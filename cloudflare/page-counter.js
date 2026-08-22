/**
 * Tuam Records Project: simple page-view counter.
 *
 * No cookies, no consent pop-up, no Microsoft. Each page load POSTs here;
 * the Worker adds one to a Cloudflare KV total and returns the new count.
 * The site footer shows "Page views: N".
 *
 * This counts page loads, not unique people. Refreshing the page adds one.
 */

const ALLOWED_ORIGINS = [
  "https://tuamrecordsproject.ie",
  "https://www.tuamrecordsproject.ie",
  "https://frankytyrone.github.io",
];

const COUNT_KEY = "total_page_views";

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
  };
}

function jsonResponse(body, origin, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

function looksLikeBot(ua) {
  if (!ua) return true;
  return /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|wget|curl|python-requests|headless/i.test(
    ua
  );
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== "GET" && request.method !== "POST") {
      return jsonResponse({ ok: false, error: "Method not allowed" }, origin, 405);
    }

    let count = parseInt((await env.PAGE_VIEWS.get(COUNT_KEY)) || "0", 10);
    if (!Number.isFinite(count) || count < 0) count = 0;

    const ua = request.headers.get("User-Agent") || "";
    const shouldCount = request.method === "POST" && !looksLikeBot(ua);

    if (shouldCount) {
      count += 1;
      await env.PAGE_VIEWS.put(COUNT_KEY, String(count));
    }

    return jsonResponse({ ok: true, count }, origin);
  },
};
