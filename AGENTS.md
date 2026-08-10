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
- [ ] Real contact email/form not yet set up (`contact.html` says so honestly instead of faking it)
- [ ] Custom domain (`tuamrecordsproject.ie`) not yet pointed at GitHub Pages

**Phase 2: Document Library, in progress**
- [x] TRP-001 to TRP-003: Commission of Investigation Final Report, 2017 test-excavation statement, Institutional Burials Act 2022
- [x] TRP-004/005: Fifth Interim Report (burials), 2024 peer-reviewed infant-mortality study
- [x] TRP-006 to TRP-009, TRP-012: Bon Secours and Catholic Church statements (2014 Prone email, 2017 statement, 2021 apology; Archbishop Neary and Archbishop Martin 2021 statements)
- [x] TRP-010/011: ODAIT forensic excavation updates (2025 to 2026)
- [ ] Not yet added: survivor/witness testimony, illegal adoption allegations documents, general media coverage and corrections, local/historical records. In progress via cloud agent as of 10 August 2026.

**Phase 3: Claim vs Evidence, in progress**
- [x] "Septic tank" claim (nuanced: two structures; remains found in the undetermined-purpose chamber, not the tank itself)
- [x] Burial-vault dispute (Commission's finding vs Bon Secours' own expert's disagreement)
- [x] Comparative infant mortality (elevated at Tuam, but not shown to be unique to Tuam or this order; peer-reviewed cross-home comparison)
- [x] "No mass grave" 2014 denial vs later official findings
- [x] "The Catholic Church ran the home": imprecise; Council owned it, Sisters operated it, diocese was pastoral only
- [x] "Bon Secours never apologised": true for 2017, false after January 2021
- [x] Developing-evidence note on how the 2021 apology relates to newer 2025 to 2026 excavation findings
- [ ] Illegal adoption allegations: in progress
- [ ] Survivor/witness testimony: in progress

**Phase 4: Advanced search and tools: not started**
**Phase 5: SEO and growth: not started** (don't start until content above is solid)

## How to work on this repo

- Read `methodology.html` for the categorisation system (documented fact, official finding, public claim, interpretation, unresolved question) before writing any new content.
- Follow the existing pattern in `claims.html` for new Claim vs Evidence entries: public claim, where it appeared, source documents, exact wording, plain-English explanation, evidence status, unresolved questions.
- Add new sources to `documents.html` with the next sequential TRP-### ID, following the existing table format.
- Update the checklist above when you finish something, so the next agent (and the owner) can see current status at a glance.
