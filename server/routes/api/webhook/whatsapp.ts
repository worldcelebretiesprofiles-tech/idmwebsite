// Nitro server route: /api/webhook/whatsapp
// WhatsApp Business API webhook — handles Meta verification + incoming events

const VERIFY_TOKEN = "IDM_WA_Verify_2026_Secure";

export default defineEventHandler(async (event) => {
  const method = event.method;

  // ── CORS headers ─────────────────────────────────────────────────────────
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  if (method === "OPTIONS") {
    setResponseStatus(event, 204);
    return null;
  }

  // ── GET — Meta webhook verification handshake ─────────────────────────────
  // Meta calls: GET /api/webhook/whatsapp?hub.mode=subscribe&hub.verify_token=...&hub.challenge=...
  if (method === "GET") {
    const query = getQuery(event);
    const mode = String(query["hub.mode"] ?? "");
    const token = String(query["hub.verify_token"] ?? "");
    const challenge = String(query["hub.challenge"] ?? "");

    console.log("[IDM WA Webhook] Verification request:", { mode, token });

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("[IDM WA Webhook] ✅ Verification SUCCESS");
      // Must return plain text challenge string
      setResponseHeader(event, "Content-Type", "text/plain");
      return challenge;
    }

    console.warn("[IDM WA Webhook] ❌ Verification FAILED — token mismatch");
    setResponseStatus(event, 403);
    setResponseHeader(event, "Content-Type", "text/plain");
    return "Forbidden: Invalid verify token";
  }

  // ── POST — incoming WhatsApp messages & status updates ───────────────────
  if (method === "POST") {
    try {
      const body = await readBody(event) as Record<string, unknown>;
      console.log("[IDM WA Webhook] Incoming event:", JSON.stringify(body, null, 2));

      // Parse WhatsApp message events
      const entry = (body?.entry as Array<Record<string, unknown>>)?.[0];
      const changes = (entry?.changes as Array<Record<string, unknown>>)?.[0];
      const value = changes?.value as Record<string, unknown> | undefined;

      if (value) {
        const messages = value.messages as Array<Record<string, unknown>> | undefined;
        const statuses = value.statuses as Array<Record<string, unknown>> | undefined;

        // Incoming message
        if (messages?.length) {
          const msg = messages[0];
          const from = String(msg.from ?? "unknown");
          const msgType = String(msg.type ?? "text");
          const text =
            msgType === "text"
              ? String((msg.text as Record<string, unknown>)?.body ?? "")
              : `[${msgType} message]`;
          const timestamp = new Date(Number(msg.timestamp) * 1000).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          });
          console.log(`[IDM WA Webhook] 💬 Message from ${from}: "${text}" at ${timestamp}`);
        }

        // Delivery/read status update
        if (statuses?.length) {
          const status = statuses[0];
          console.log(
            `[IDM WA Webhook] 📋 Status: ${status.status} for msg ${status.id} to ${status.recipient_id}`
          );
        }
      }

      // Meta requires 200 OK quickly
      return { success: true };
    } catch (err) {
      console.error("[IDM WA Webhook] ❌ Error:", err);
      // Always return 200 — prevents Meta retry storm
      return { success: true };
    }
  }

  setResponseStatus(event, 405);
  return { success: false, message: "Method not allowed" };
});
