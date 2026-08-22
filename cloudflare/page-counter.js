/**
 * Tuam Records Project: simple page-view counter.
 *
 * No cookies, no consent pop-up. Each real browser page load POSTs here;
 * the Worker adds one to a Cloudflare KV total and returns the new count.
 * The site footer shows "Page views: N".
 *
 * Counts page loads, not unique people. Obvious bots are not counted.
 */

const ALLOWED_ORIGINS = [
  "https://tuamrecordsproject.ie",
  "https://www.tuamrecordsproject.ie",
  "https://frankytyrone.github.io",
];

const COUNT_KEY = "total_page_views";

const BOT_UA =
  /bot|crawler|crawl|spider|slurp|bingpreview|facebookexternal|facebot|twitterbot|linkedinbot|embedly|quora|pinterest|redditbot|applebot|duckduck|yandex|baidu|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|anthropic|openai|ccbot|wget|curl|python-requests|python-urllib|go-http|java\/|libwww|httpclient|scrapy|headless|phantomjs|selenium|puppeteer|playwright|monitoring|uptime|pingdom|statuscake|gtmetrix|lighthouse|pagespeed|preview|validator|checker|fetch\//i;

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

function looksLikeBot(request) {
  const ua = request.headers.get("User-Agent") || "";
  if (!ua || ua.length < 12) return true;
  if (BOT_UA.test(ua)) return true;

  // Real browser fetch() from the site sends Origin. Direct hits and most
  // scrapers do not, so refuse to count those.
  const origin = request.headers.get("Origin") || "";
  if (!ALLOWED_ORIGINS.includes(origin)) return true;

  // Modern browsers send these on cors fetch; many bots omit them.
  const fetchMode = (request.headers.get("Sec-Fetch-Mode") || "").toLowerCase();
  const fetchSite = (request.headers.get("Sec-Fetch-Site") || "").toLowerCase();
  if (fetchMode && fetchMode !== "cors") return true;
  if (fetchSite && fetchSite !== "cross-site" && fetchSite !== "same-site") return true;

  return false;
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

    const shouldCount = request.method === "POST" && !looksLikeBot(request);

    if (shouldCount) {
      count += 1;
      await env.PAGE_VIEWS.put(COUNT_KEY, String(count));
    }

    return jsonResponse({ ok: true, count }, origin);
  },
};
