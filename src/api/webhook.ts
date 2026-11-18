// src/api/webhook.ts
// General lead callback endpoint

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function handleApiWebhook(request: Request): Promise<Response> {
  const method = request.method.toUpperCase();
  const jsonHeaders = { "Content-Type": "application/json", ...CORS_HEADERS };

  if (method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (method === "GET") {
    return new Response(
      JSON.stringify({
        success: true,
        endpoint: "/api/webhook",
        method: "POST",
        description: "IDM Smart Tech lead callback endpoint. Send a POST request with JSON body.",
        accepted_fields: {
          name: "string (required)",
          phone: "string (required)",
          email: "string (optional)",
          company: "string (optional)",
          message: "string (optional)",
          source: "string (optional) — e.g. 'Facebook Ads', 'Google Ads'",
        },
        example: {
          name: "Priya Sharma",
          phone: "+91 98765 43210",
          email: "priya@example.com",
          company: "Acme Corp",
          message: "Looking for SEO services",
          source: "Facebook Lead Ad",
        },
      }),
      { status: 200, headers: jsonHeaders }
    );
  }

  if (method === "POST") {
    try {
      let data: Record<string, unknown> = {};
      const contentType = request.headers.get("content-type") ?? "";

      if (contentType.includes("application/json")) {
        data = await request.json();
      } else if (contentType.includes("application/x-www-form-urlencoded")) {
        const text = await request.text();
        const params = new URLSearchParams(text);
        params.forEach((value, key) => { data[key] = value; });
      } else {
        try { data = await request.json(); } catch { data = { raw: await request.text() }; }
      }

      const name    = String(data.name    ?? data.full_name    ?? data.fullName     ?? "Not Provided");
      const phone   = String(data.phone   ?? data.mobile       ?? data.whatsapp     ?? data.contact ?? "Not Provided");
      const email   = String(data.email   ?? data.email_id     ?? "Not Provided");
      const company = String(data.company ?? data.business     ?? data.organization ?? "Not Provided");
      const message = String(data.message ?? data.details      ?? data.notes        ?? data.query ?? "Not Provided");
      const source  = String(data.source  ?? data.utm_source   ?? data.referrer     ?? "Webhook");

      const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short",
      });

      const whatsappMessage =
        `🔔 *New Lead via Webhook* 🔔\n\n` +
        `📅 *Time:* ${timestamp}\n` +
        `📌 *Source:* ${source}\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📧 *Email:* ${email}\n` +
        `🏢 *Company:* ${company}\n` +
        `📝 *Message:* ${message}\n\n` +
        `─────────────────\n` +
        `_Received at IDM Smart Tech Website_`;

      console.log("[IDM Webhook] Incoming lead:", { timestamp, name, phone, email, company, source });

      const encodedMsg = encodeURIComponent(whatsappMessage);
      return new Response(
        JSON.stringify({
          success: true,
          message: "Lead received successfully. IDM Smart Tech will contact you shortly.",
          received: { name, phone, email, company, source, timestamp },
          whatsapp_url: `https://wa.me/918519837818?text=${encodedMsg}`,
        }),
        { status: 200, headers: jsonHeaders }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ success: false, message: "Failed to process webhook.", error: err instanceof Error ? err.message : "Unknown error" }),
        { status: 400, headers: jsonHeaders }
      );
    }
  }

  return new Response(JSON.stringify({ success: false, message: "Method not allowed" }), {
    status: 405, headers: jsonHeaders,
  });
}
