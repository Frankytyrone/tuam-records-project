# Hidden corrections relay

This folder is not part of the Jekyll site. It is a tiny Cloudflare Worker
that sits between the public correction form on `contact.html` and this
repository's GitHub Issues.

**Why it exists:** the correction form used to send visitors to a
`github.com/.../issues/new` page. That revealed the site runs on GitHub,
and required visitors to sign in to GitHub themselves. This Worker removes
both problems: the visitor's browser only ever talks to the Worker's own
`workers.dev` address, and the Worker uses a repo-scoped GitHub token,
stored only as a Cloudflare secret, to open the Issue on their behalf.

## One-time setup (only needs doing once)

1. Create a free Cloudflare account at <https://dash.cloudflare.com/sign-up>.
2. Install Wrangler (Cloudflare's deploy tool): `npm install -g wrangler`
   (requires Node.js, also free).
3. From this `cloudflare/` folder, run `wrangler login` once, and follow
   the browser prompt to connect your Cloudflare account.
4. Create a GitHub fine-grained personal access token at
   <https://github.com/settings/personal-access-tokens/new>: repository
   access limited to `tuam-records-project` only, permissions set to
   `Issues: Read and write`, nothing else.
5. Run `wrangler deploy` from this folder. Note the `workers.dev` URL it
   prints, for example `https://tuam-corrections-relay.<your-subdomain>.workers.dev`.
6. Run `wrangler secret put GITHUB_TOKEN` and paste in the token from
   step 4 when prompted.
7. Update the `RELAY_URL` constant near the top of the script in
   `contact.html` to the URL from step 5, then commit and push.

## Ongoing maintenance

None expected. If the GitHub token is ever revoked or expires, generate
a new one (same steps 4 and 6) and nothing else needs to change.

If correction volume ever needs raising above Cloudflare Workers' generous
free-tier request limits, that is a Cloudflare billing question, not a
code change; the free tier (100,000 requests/day) is expected to be more
than enough for a corrections form.
