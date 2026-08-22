# Cloudflare Workers for Tuam Records Project

This folder is not part of the Jekyll site. It holds two small Workers:

1. **`corrections-relay.js`** (config: `wrangler.toml`) – hidden corrections form relay.
2. **`page-counter.js`** (config: `page-counter.toml`) – cookieless page-view counter shown in the site footer.

## Corrections relay

Sits between the public correction form on `contact.html` and this
repository's GitHub Issues. Visitors never see github.com.

### One-time setup (only needs doing once)

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

## Page-view counter

Deploy with:

```
wrangler deploy -c page-counter.toml
```

Create the KV namespace first if needed:

```
wrangler kv namespace create PAGE_VIEWS
```

Then put the returned ID into `page-counter.toml` under `[[kv_namespaces]]`.

The footer in `_includes/footer.html` already points at
`https://tuam-page-counter.tuamrecordsproject.workers.dev`.

## Ongoing maintenance

None expected for either Worker under normal use. The free Workers tier is
enough for a quiet archive site.
