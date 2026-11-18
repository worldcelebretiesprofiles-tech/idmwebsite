// src/api/webhook-whatsapp.ts
// WhatsApp Business API webhook — Meta verification + incoming events

const VERIFY_TOKEN = "IDM_WA_Verify_2026_Secure";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function handleApiWebhookWhatsapp(request: Request): Promise<Response> {
  const method = request.method.toUpperCase();
  const jsonHeaders = { "Content-Type": "application/json", ...CORS_HEADERS };

  if (method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  // ── GET — Meta webhook verification handshake ─────────────────────────────
  if (method === "GET") {
    const url = new URL(request.url);
    const mode      = url.searchParams.get("hub.mode");
    const token     = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    console.log("[IDM WA Webhook] Verification request:", { mode, token });

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("[IDM WA Webhook] ✅ Verification SUCCESS");
      return new Response(challenge, {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "text/plain" },
      });
    }

    console.warn("[IDM WA Webhook] ❌ Verification FAILED — token mismatch");
    return new Response("Forbidden: Invalid verify token", {
      status: 403,
      headers: { ...CORS_HEADERS, "Content-Type": "text/plain" },
    });
  }

  // ── POST — incoming WhatsApp messages & status updates ───────────────────
  if (method === "POST") {
    try {
      const body = await request.json() as Record<string, unknown>;
      console.log("[IDM WA Webhook] Incoming event:", JSON.stringify(body, null, 2));

      const entry   = (body?.entry   as Array<Record<string, unknown>>)?.[0];
      const changes = (entry?.changes as Array<Record<string, unknown>>)?.[0];
      const value   = changes?.value as Record<string, unknown> | undefined;

      if (value) {
        const messages = value.messages as Array<Record<string, unknown>> | undefined;
        const statuses = value.statuses as Array<Record<string, unknown>> | undefined;

        if (messages?.length) {
          const msg     = messages[0];
          const from    = String(msg.from ?? "unknown");
          const msgType = String(msg.type ?? "text");
          const text    = msgType === "text"
            ? String((msg.text as Record<string, unknown>)?.body ?? "")
            : `[${msgType} message]`;
          const timestamp = new Date(Number(msg.timestamp) * 1000).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
          console.log(`[IDM WA Webhook] 💬 Message from ${from}: "${text}" at ${timestamp}`);
        }

        if (statuses?.length) {
          const status = statuses[0];
          console.log(`[IDM WA Webhook] 📋 Status: ${status.status} for msg ${status.id} to ${status.recipient_id}`);
        }
      }

      // Always return 200 — prevents Meta retry storm
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: jsonHeaders });
    } catch (err) {
      console.error("[IDM WA Webhook] ❌ Error:", err);
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: jsonHeaders });
    }
  }

  return new Response(JSON.stringify({ success: false, message: "Method not allowed" }), {
    status: 405, headers: jsonHeaders,
  });
}
