import { createAPIFileRoute } from "@tanstack/react-start/api";

// Allowed origins for CORS (adjust as needed)
const ALLOWED_ORIGINS = [
  "https://idmsmarttech.com",
  "https://www.idmsmarttech.com",
];

function corsHeaders(origin: string | null) {
  const allowed =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": "*", // Allow all for client integrations
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

export const APIRoute = createAPIFileRoute("/api/webhook")({
  // Handle preflight OPTIONS request (CORS)
  OPTIONS: async ({ request }) => {
    const origin = request.headers.get("origin");
    return new Response(null, {
      status: 204,
      headers: corsHeaders(origin),
    });
  },

  // Handle POST — receive lead/callback data from client's system
  POST: async ({ request }) => {
    const origin = request.headers.get("origin");
    const headers = {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    };

    try {
      // Parse incoming JSON body
      let data: Record<string, unknown> = {};
      const contentType = request.headers.get("content-type") ?? "";

      if (contentType.includes("application/json")) {
        data = await request.json();
      } else if (contentType.includes("application/x-www-form-urlencoded")) {
        const text = await request.text();
        const params = new URLSearchParams(text);
        params.forEach((value, key) => {
          data[key] = value;
        });
      } else {
        // Try JSON anyway
        try {
          data = await request.json();
        } catch {
          data = { raw: await request.text() };
        }
      }

      // Extract common lead fields (flexible — works with any payload)
      const name = String(data.name ?? data.full_name ?? data.fullName ?? "Not Provided");
      const phone = String(data.phone ?? data.mobile ?? data.whatsapp ?? data.contact ?? "Not Provided");
      const email = String(data.email ?? data.email_id ?? "Not Provided");
      const company = String(data.company ?? data.business ?? data.organization ?? "Not Provided");
      const message = String(data.message ?? data.details ?? data.notes ?? data.query ?? "Not Provided");
      const source = String(data.source ?? data.utm_source ?? data.referrer ?? "Webhook");

      // Build WhatsApp notification message
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

      // Log the incoming lead (Vercel logs)
      console.log("[IDM Webhook] Incoming lead:", {
        timestamp,
        name,
        phone,
        email,
        company,
        source,
        raw: data,
      });

      // Return success response with the WhatsApp deep-link for reference
      const encodedMsg = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/918519837818?text=${encodedMsg}`;

      return new Response(
        JSON.stringify({
          success: true,
          message: "Lead received successfully. IDM Smart Tech will contact you shortly.",
          received: {
            name,
            phone,
            email,
            company,
            source,
            timestamp,
          },
          // Included so client can optionally redirect user to WhatsApp
          whatsapp_url: whatsappUrl,
        }),
        { status: 200, headers }
      );
    } catch (err) {
      console.error("[IDM Webhook] Error processing request:", err);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to process webhook. Please check your payload format.",
          error: err instanceof Error ? err.message : "Unknown error",
        }),
        { status: 400, headers }
      );
    }
  },

  // Reject GET requests gracefully
  GET: async ({ request }) => {
    const origin = request.headers.get("origin");
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
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders(request.headers.get("origin")),
        },
      }
    );
  },
});
