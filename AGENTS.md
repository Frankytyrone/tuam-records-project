# Tuam Records Project: Agent Guide

Read this file first, before making any changes. It is the single source of truth for what this project is, how it must sound, and where things currently stand.

## What this is

A public, source-led archive of documents, claims, corrections, official records and forensic updates relating to the Tuam Mother and Baby Home (St Mary's, run by the Bon Secours Sisters, 1925 to 1961).

Domains: `tuamrecordsproject.ie` (main), `tuamevidencearchive.ie` (supporting/redirect). Not yet connected to this site.

**Positioning:** a public records archive, historical document library, and evidence review portal. It must never read like a campaign site, a conspiracy site, a Catholic defence blog, an anti-media attack site, or a "truth exposed" site.

## Who this is for

The owner (Frank) is not a technical person and is openly biased toward the Bon Secours Sisters and the Catholic Church. He believes the evidence, looked at fairly, supports them more than media coverage usually allows. **The agreed approach: research and present every side fairly and rigorously, and let the sources speak for themselves.** Do not slant conclusions to fit anyone's expectation, including the owner's. Where the record favours a "Church-friendly" reading, say so clearly and cite it. Where it doesn't, say that too. Credibility depends on applying one standard to everyone.

## Hard rules (do not break these)

1. **Every fact, quote, date and figure must be sourced and verified against a primary or official source before it goes on the site.** Search and confirm exact wording before quoting anyone. Never invent a quote, date, or statistic.
2. **No fake content.** No placeholder phone numbers, addresses, "team" bios, or social media stats. If a real detail (for example a contact email) isn't set up yet, say so plainly instead of inventing one.
3. **No inflammatory language.** Avoid "hoax," "lies," "cover-up," "propaganda," "scandal exposed," "anti-Catholic smear," and similar terms. Prefer: public claim, source evidence, official record, forensic update, correction, clarification, documented fact, interpretation, unresolved question, evidence status. Full list and rules in `methodology.html`.
4. **Same evidence standard for every claim.** Catholic-friendly, critical, media, and official claims are all checked the same way. See `methodology.html`.
5. **Design stays calm and archival.** No dramatic imagery, no religious symbols or crosses, no children in photos, no stock business people, no flashy animation. Palette is defined in `assets/css/style.css` (the `:root` variables). Use it; don't invent new colours.
6. **Keep it a lean static site.** Jekyll and GitHub Pages, no WordPress, no database, no unnecessary plugins or dependencies.
7. **Open a Pull Request for review rather than pushing straight to `main`,** unless the owner has explicitly said to skip review for a specific change.
8. **Write like a careful human researcher, not an AI model.** Use UK/Irish spelling (colour, organise, judgement, programme). No em dashes anywhere in site content; use full stops, commas, colons or brackets instead. Avoid stock AI phrasing ("it is important to note," "in conclusion," "delve into," "navigate," "landscape," "underscore," "robust," "leverage," "foster"). Write plain, formal English the way an Irish civil servant or archivist would, not the way a foreign AI assistant would.

## Where things stand (update this section as work progresses)

**Phase 1: Foundation, mostly done**
- [x] Site rebuilt from scratch as a static Jekyll site (replaced an old WordPress/Divi build full of AI placeholder content: fake phone/address/team/social stats, inconsistent dates)
- [x] All 7 core pages live: Home, Start Here, Methodology, Documents, Timeline, Claims, Contact
- [x] "Evidence Pathway" nav with small dots under each menu item, current page's dot larger and gold, no blue bands or blocks
- [x] Design palette applied (warm off-white, slate blue, muted gold, etc.)
- [x] Generated a realistic, appropriate archive-shelves hero image (no people, no religious symbols)
- [x] GitHub Pages enabled; live preview: `https://frankytyrone.github.io/tuam-records-project/`
- [x] Custom domain (`tuamrecordsproject.ie`) pointed at GitHub Pages via FastComet DNS; HTTPS enforced; `tuamevidencearchive.ie` set up as a 301 redirect to the main domain (10 August 2026)
- [x] Correction form added to `contact.html` (10 August 2026): no email inbox; submissions open as a labelled GitHub Issue on this repo. See "Checking for public correction reports" below
- [x] Fixed a data bug found 10 August 2026: TRP-013 and TRP-014 had each been assigned to two different documents by two separate PRs. Chapter 32: Adoption keeps TRP-013; the AP correction keeps TRP-014; the Confidential Committee report is now TRP-030 and the Irish Times/Corless interview is now TRP-029, with every cross-reference in `claims.html` and `timeline.html` updated to match

**Phase 2: Document Library, in progress**
- [x] TRP-001 to TRP-003: Commission of Investigation Final Report, 2017 test-excavation statement, Institutional Burials Act 2022
- [x] TRP-004/005: Fifth Interim Report (burials), 2024 peer-reviewed infant-mortality study
- [x] TRP-006 to TRP-009, TRP-012: Bon Secours and Catholic Church statements (2014 Prone email, 2017 statement, 2021 apology; Archbishop Neary and Archbishop Martin 2021 statements)
- [x] TRP-010/011/015: ODAIT forensic excavation updates (2025 to 2026); TRP-015 is the primary-source Technical Update 8 (99 remains: 77 plus 22, memorial-garden chamber still unexcavated)
- [x] TRP-013/014: Chapter 32 (Adoption) and Report of the Confidential Committee, added 10 August 2026 via cloud agent
- [x] TRP-013/014 (documents.html numbering): media coverage and corrections. Irish Times 7 June 2014 interview (Corless: "I never used that word 'dumped'") and the Associated Press's formal 20 June 2014 correction (withdrew "denied baptism" and "Church teaching" claims after Tuam Archdiocese registry showed 2,000+ baptisms)
- [x] TRP-031/032/033 (10 August 2026): a new "Broadcast documentaries & recorded testimony" section. TRP-031 is "The Missing Children" (RT&Eacute;/ITV, 2021, the film Nugent's TRP-020 rebuttal responds to); TRP-032 is Catherine Corless's own oral testimony to the Oireachtas Joint Committee on Children, Disability, Equality and Integration, 14 April 2021 (official transcript and recorded broadcast, linked directly to oireachtas.ie); TRP-033 is the BBC's "Ireland's Lost Babies" (Sixsmith, September 2014). Matching entries added to the Timeline, and TRP-031 cross-referenced into the existing Nugent claims entry
- [ ] Not yet added: dedicated survivor/witness testimony as standalone catalogued documents (memoirs, recorded interviews), local/historical records

**Phase 3: Claim vs Evidence, in progress**
- [x] "Septic tank" claim (nuanced: two structures; remains found in the undetermined-purpose chamber, not the tank itself)
- [x] Burial-vault dispute (Commission's finding vs Bon Secours' own expert's disagreement)
- [x] Comparative infant mortality (elevated at Tuam, but not shown to be unique to Tuam or this order; peer-reviewed cross-home comparison)
- [x] "No mass grave" 2014 denial vs later official findings
- [x] "The Catholic Church ran the home": imprecise; Council owned it, Sisters operated it, diocese was pastoral only
- [x] "Bon Secours never apologised": true for 2017, false after January 2021
- [x] Developing-evidence note on how the 2021 apology relates to newer 2025 to 2026 excavation findings
- [x] Illegal adoption allegations: Commission's Chapter 32 findings vs common media framing and Corless/Clann Project criticism (added 10 August 2026)
- [x] Survivor/witness testimony on conditions: Confidential Committee/individual testimony vs the Commission's own summary language (added 10 August 2026)
- [x] "~800 babies found dumped in a septic tank" reported as settled fact in June 2014: documented media exaggeration of Corless's own more cautious, pre-excavation hypothesis, corrected on record by both Corless and the AP
- [x] "Babies denied Catholic baptism per Church teaching": contradicted by Tuam Archdiocese registry (2,000+ baptisms) and retracted by the AP
- [x] Brian Nugent's "ossuary" theory (structure built by Galway County Council in the 1970s/80s, not a Home-era burial site): checked against the Commission's own Fifth Interim Report technical findings (dating to 1937, articulation evidence, the Castrol GTX artefact); contradicted by that report on the same categories of evidence Nugent cites
- [x] "No dignified burial at all / all remains dumped": checked against ODAIT's own Technical Update 6. Every infant recovered from the Tent 1/Tent 2 burial-ground area to date (as distinct from the still-unexcavated 20-chamber structure) was found in a proper coffin; a separate post-1977 mechanical-digger disturbance of part of that burial ground is also documented
- [x] "Nuns forced women into the homes / forced or profited from adoptions": checked against the Final Report's own findings (no evidence of coercion by Church/State or of profiteering), balanced against the same report's findings that women were routinely brought to the homes by family "without being consulted" and had little realistic alternative
- [x] New claims entry on Alice Litster's 1947 Tuam inspection report (a non-Catholic, independent DLGPH inspector). Her findings on diet and day-to-day care by the Sisters do not match a "horror-film cruelty" narrative; her sharpest criticism (no isolation unit) was structural/systemic and a Galway County Council responsibility. Note: only the isolation-unit quote has been independently cross-checked by this site against the primary Final Report PDF text; the "careful and attentive"/diet quotes are sourced to The Tablet's citation and flagged on the site as pending further independent verification

**Note on sources reviewed but not catalogued (10 August 2026):** The Irish Catholic's "Why it is unfair to demonise the nuns of Tuam children's home" and Catholic Arena's "Ireland's Mother and Baby Homes: The REAL Story" pages were both reviewed. The Irish Catholic piece is paywalled beyond its teaser, with no visible byline or date to verify; its argument overlaps with David Quinn's dated, attributed Catholic Herald column (TRP-019), which was used instead. Catholic Arena's page is itself a polemical opinion piece (for example describing the Irish government as "anti-Catholic" and making unrelated claims about abortion) rather than a primary or attributable source in its own right; its substantive content (Nugent, Jordan and Connor's talks) is catalogued directly via TRP-016/017/020 instead of through Catholic Arena's framing of it. Eugene Jordan's planned documentary (Irish Catholic report, around June 2026) is catalogued as TRP-025, clearly labelled as an unreleased, in-production work; his verified credentials (past president, Galway Archaeological and Historical Society) are noted, distinct from Brian Nugent's self-published/self-styled status.

**Note on scope (10 August 2026):** the owner asked the agent to look into whether Catherine Corless has a documented bias (for example abortion-rights campaigning or anti-Catholic statements) and whether Liam Neeson made "false allegations" in the 2026 film *The Lost Children of Tuam*. Findings: Corless appears in one segment of *The 8th* (2020, a documentary about the 2018 abortion referendum), discussing her Tuam research as historical context. No sourced evidence was found of her personally campaigning on abortion or making anti-Catholic statements, so no such characterisation has been added to the site (this would fail the site's own no-invented-content and no-inflammatory-language rules regardless of who it was about). The film is documented factually in the Timeline (release date, producers, basis) with no claim about Neeson's statements, since no specific sourced quote was found to check. If the owner has a specific Neeson quote in mind, it can be checked against a source and added.

**Phase 4: Advanced search and tools**
- [x] Client-side search added (10 August 2026): Lunr.js, vendored locally (no CDN dependency), indexes every page via a generated `search.json`. A search box sits in the header on every page, plus a full results page at `/search/`. No backend, no database, no cost.

**Phase 5: SEO and growth, started 10 August 2026**
- [x] `jekyll-seo-tag` wired properly into `_layouts/default.html` (was previously installed as a plugin but never actually used in the layout): canonical URLs, Open Graph tags, Twitter card, JSON-LD structured data
- [x] Unique, keyword-relevant meta description added to every page's front matter (previously all pages shared one generic site-wide description)
- [x] Real favicon added (generated, calm archival book icon, no religious symbols), replacing the blank placeholder icon
- [x] `robots.txt` added, pointing to the sitemap; `jekyll-sitemap` plugin was already installed and active
- [x] `html lang` changed to `en-IE` to match the site's UK/Irish English content
- [ ] Not yet done: submitting the sitemap to Google Search Console (requires the owner to create/use a Google account; agent cannot do this step)
- [ ] Not yet done: backlinks/outreach, this depends on the site being finished and stable first

## Checking for public correction reports (do this at the start of every session)

The Contact page (`contact.html`) has a correction form. There is no email inbox: when a visitor submits it, it opens a pre-filled GitHub Issue, labelled `correction`, on this repository. That is where public correction requests live.

Before starting other work, check for open ones:

```
gh issue list --repo Frankytyrone/tuam-records-project --label correction --state open
```

For each open correction issue:
1. Read what the visitor is disputing and any source they gave.
2. Check it against a primary or official source yourself, using the same standard as everything else on the site (see `methodology.html`). Do not accept a claimed correction just because someone asked; verify it independently.
3. If the source is genuine and stronger than, or more accurate than, what is already on the site, update the relevant page (and `documents.html`/`claims.html`/Timeline as needed), then comment on the issue explaining what changed and why, and close it.
4. If the correction does not hold up, or the existing sourcing is already correct, comment explaining why, politely and factually, and close the issue.
5. Never change the site based on an unverified claim in an issue alone, the issue is a lead, not a source.

## How to work on this repo

- Read `methodology.html` for the categorisation system (documented fact, official finding, public claim, interpretation, unresolved question) before writing any new content.
- Follow the existing pattern in `claims.html` for new Claim vs Evidence entries: public claim, where it appeared, source documents, exact wording, plain-English explanation, evidence status, unresolved questions.
- Add new sources to `documents.html` with the next sequential TRP-### ID, following the existing table format.
- Update the checklist above when you finish something, so the next agent (and the owner) can see current status at a glance.
