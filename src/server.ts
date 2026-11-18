import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// ─── Webhook: shared CORS headers ────────────────────────────────────────────
const WEBHOOK_CORS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// ─── Webhook: WhatsApp Business API (/api/webhook/whatsapp) ──────────────────
const WA_VERIFY_TOKEN = "IDM_WA_Verify_2026_Secure";

async function handleWhatsappWebhook(request: Request): Promise<Response> {
  const method = request.method.toUpperCase();
  const json = (body: unknown) =>
    new Response(JSON.stringify(body), {
      status: 200,
      headers: { "Content-Type": "application/json", ...WEBHOOK_CORS },
    });

  if (method === "OPTIONS") return new Response(null, { status: 204, headers: WEBHOOK_CORS });

  if (method === "GET") {
    const url = new URL(request.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");
    if (mode === "subscribe" && token === WA_VERIFY_TOKEN) {
      console.log("[IDM WA] ✅ Webhook verified");
      return new Response(challenge, {
        status: 200,
        headers: { "Content-Type": "text/plain", ...WEBHOOK_CORS },
      });
    }
    return new Response("Forbidden", {
      status: 403,
      headers: { "Content-Type": "text/plain", ...WEBHOOK_CORS },
    });
  }

  if (method === "POST") {
    try {
      const body = (await request.json()) as Record<string, unknown>;
      console.log("[IDM WA] Incoming event:", JSON.stringify(body));
      // Always respond 200 fast — prevents Meta retry storms
      return json({ success: true });
    } catch {
      return json({ success: true });
    }
  }

  return json({ success: false, message: "Method not allowed" });
}

// ─── Webhook: General lead callback (/api/webhook) ───────────────────────────
async function handleLeadWebhook(request: Request): Promise<Response> {
  const method = request.method.toUpperCase();
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json", ...WEBHOOK_CORS },
    });

  if (method === "OPTIONS") return new Response(null, { status: 204, headers: WEBHOOK_CORS });

  if (method === "GET") {
    return json({
      success: true,
      endpoint: "/api/webhook",
      method: "POST",
      description: "IDM Smart Tech lead callback. POST JSON with lead data.",
      fields: {
        name: "required",
        phone: "required",
        email: "optional",
        company: "optional",
        message: "optional",
        source: "optional",
      },
    });
  }

  if (method === "POST") {
    try {
      let data: Record<string, unknown> = {};
      const ct = request.headers.get("content-type") ?? "";
      if (ct.includes("application/json")) {
        data = (await request.json()) as Record<string, unknown>;
      } else {
        const text = await request.text();
        try {
          data = JSON.parse(text) as Record<string, unknown>;
        } catch {
          data = { raw: text };
        }
      }

      const name = String(data.name ?? data.full_name ?? "Not Provided");
      const phone = String(data.phone ?? data.mobile ?? data.whatsapp ?? "Not Provided");
      const email = String(data.email ?? "Not Provided");
      const company = String(data.company ?? data.business ?? "Not Provided");
      const message = String(data.message ?? data.details ?? "Not Provided");
      const source = String(data.source ?? data.utm_source ?? "Webhook");
      const ts = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      console.log("[IDM Webhook] Lead:", { ts, name, phone, email, company, source });

      const wa = encodeURIComponent(
        `🔔 *New Lead via Webhook*\n\n📅 ${ts}\n📌 Source: ${source}\n👤 ${name}\n📞 ${phone}\n📧 ${email}\n🏢 ${company}\n📝 ${message}`,
      );
      return json({
        success: true,
        message: "Lead received. IDM Smart Tech will contact you shortly.",
        received: { name, phone, email, company, source, ts },
        whatsapp_url: `https://wa.me/918519837818?text=${wa}`,
      });
    } catch (err) {
      return json(
        {
          success: false,
          message: "Bad request",
          error: err instanceof Error ? err.message : "unknown",
        },
        400,
      );
    }
  }

  return json({ success: false, message: "Method not allowed" }, 405);
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const { pathname } = new URL(request.url);

    // Intercept API routes BEFORE TanStack Router
    if (pathname === "/api/webhook/whatsapp" || pathname === "/api/webhook/whatsapp/")
      return handleWhatsappWebhook(request);
    if (pathname === "/api/webhook" || pathname === "/api/webhook/")
      return handleLeadWebhook(request);

    // All other requests → TanStack Router SSR
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
