// Nitro server route: /api/webhook
// General lead callback endpoint for client CRM/automation integrations

export default defineEventHandler(async (event) => {
  const method = event.method;

  // ── CORS headers ────────────────────────────────────────────────────────────
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  if (method === "OPTIONS") {
    setResponseStatus(event, 204);
    return null;
  }

  // ── GET — show documentation ─────────────────────────────────────────────
  if (method === "GET") {
    return {
      success: true,
      endpoint: "/api/webhook",
      method: "POST",
      description:
        "IDM Smart Tech lead callback endpoint. Send a POST request with JSON body.",
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
    };
  }

  // ── POST — receive lead data ─────────────────────────────────────────────
  if (method === "POST") {
    try {
      const data = await readBody(event) as Record<string, unknown>;

      const name = String(data?.name ?? data?.full_name ?? data?.fullName ?? "Not Provided");
      const phone = String(data?.phone ?? data?.mobile ?? data?.whatsapp ?? data?.contact ?? "Not Provided");
      const email = String(data?.email ?? data?.email_id ?? "Not Provided");
      const company = String(data?.company ?? data?.business ?? data?.organization ?? "Not Provided");
      const message = String(data?.message ?? data?.details ?? data?.notes ?? data?.query ?? "Not Provided");
      const source = String(data?.source ?? data?.utm_source ?? data?.referrer ?? "Webhook");

      const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
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

      console.log("[IDM Webhook] Incoming lead:", { timestamp, name, phone, email, company, source, raw: data });

      const encodedMsg = encodeURIComponent(whatsappMessage);

      return {
        success: true,
        message: "Lead received successfully. IDM Smart Tech will contact you shortly.",
        received: { name, phone, email, company, source, timestamp },
        whatsapp_url: `https://wa.me/918519837818?text=${encodedMsg}`,
      };
    } catch (err) {
      setResponseStatus(event, 400);
      return {
        success: false,
        message: "Failed to process webhook. Please check your payload format.",
        error: err instanceof Error ? err.message : "Unknown error",
      };
    }
  }

  // ── Method not allowed ───────────────────────────────────────────────────
  setResponseStatus(event, 405);
  return { success: false, message: "Method not allowed" };
});
