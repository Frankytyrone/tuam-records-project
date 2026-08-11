/**
 * Tuam Records Project: hidden corrections relay.
 *
 * Runs on Cloudflare Workers, not on GitHub Pages. A visitor's browser only
 * ever talks to this Worker's own workers.dev address; it never sees or
 * navigates to github.com. This Worker is the only thing that holds the
 * GitHub token, and it uses that token server-side to open a correction
 * report as a GitHub Issue on the project's repository.
 *
 * Required Worker secret (set with `wrangler secret put GITHUB_TOKEN`):
 *   GITHUB_TOKEN - a GitHub fine-grained personal access token, scoped only
 *                  to the tuam-records-project repository, with Issues set
 *                  to "Read and write" and no other permissions.
 */

const REPO = "Frankytyrone/tuam-records-project";
const ALLOWED_ORIGIN = "https://tuamrecordsproject.ie";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return jsonResponse({ ok: false, error: "Method not allowed" }, 405);
    }

    let data;
    try {
      data = await request.json();
    } catch (err) {
      return jsonResponse({ ok: false, error: "Invalid submission" }, 400);
    }

    // Honeypot: a hidden field real visitors never fill in. Bots that fill
    // in every field will trip this, and we quietly pretend success so they
    // do not learn anything about the check.
    if (data.website) {
      return jsonResponse({ ok: true });
    }

    const page = (data.page || "Other / not sure").toString().slice(0, 200);
    const statement = (data.statement || "").toString().trim().slice(0, 4000);
    const issue = (data.issue || "").toString().trim().slice(0, 4000);
    const source = (data.source || "").toString().trim().slice(0, 1000);
    const name = (data.name || "").toString().trim().slice(0, 200);

    if (!statement || !issue) {
      return jsonResponse(
        { ok: false, error: "Please fill in the statement and what you believe is wrong." },
        400
      );
    }

    const body =
      `Page: ${page}\n\n` +
      `Statement in question: ${statement}\n\n` +
      `What I believe is wrong or missing: ${issue}\n\n` +
      `Source to check: ${source || "(none provided)"}\n\n` +
      `Submitted by: ${name || "(anonymous)"}\n\n` +
      `---\nSubmitted via the site's correction form.`;

    const githubResponse = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "tuam-records-project-corrections-relay",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `Correction: ${page}`,
        body,
        labels: ["correction"],
      }),
    });

    if (!githubResponse.ok) {
      return jsonResponse(
        { ok: false, error: "Could not record the correction right now. Please try again shortly." },
        502
      );
    }

    return jsonResponse({ ok: true });
  },
};
