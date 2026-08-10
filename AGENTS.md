# Tuam Records Project — Agent Guide

Read this file first, before making any changes. It is the single source of truth for what this project is, how it must sound, and where things currently stand.

## What this is

A public, source-led archive of documents, claims, corrections, official records and forensic updates relating to the Tuam Mother and Baby Home (St Mary's, run by the Bon Secours Sisters, 1925–1961).

Domains: `tuamrecordsproject.ie` (main), `tuamevidencearchive.ie` (supporting/redirect) — not yet connected to this site.

**Positioning:** a public records archive / historical document library / evidence review portal. It must never read like a campaign site, a conspiracy site, a Catholic defence blog, an anti-media attack site, or a "truth exposed" site.

## Who this is for

The owner (Frank) is not a technical person and is openly biased toward the Bon Secours Sisters and the Catholic Church — he believes the evidence, looked at fairly, supports them more than media coverage usually allows. **The agreed approach: research and present every side fairly and rigorously, and let the sources speak for themselves.** Do not slant conclusions to fit anyone's expectation, including the owner's. Where the record favours a "Church-friendly" reading, say so clearly and cite it. Where it doesn't, say that too. Credibility depends on applying one standard to everyone.

## Hard rules (do not break these)

1. **Every fact, quote, date and figure must be sourced and verified against a primary or official source before it goes on the site.** Web-search and confirm exact wording before quoting anyone. Never invent a quote, date, or statistic.
2. **No fake content.** No placeholder phone numbers, addresses, "team" bios, or social media stats. If a real detail (e.g. a contact email) isn't set up yet, say so plainly instead of inventing one.
3. **No inflammatory language** — avoid "hoax," "lies," "cover-up," "propaganda," "scandal exposed," "anti-Catholic smear," etc. Prefer: public claim, source evidence, official record, forensic update, correction, clarification, documented fact, interpretation, unresolved question, evidence status. Full list/rules in `methodology.html`.
4. **Same evidence standard for every claim** — Catholic-friendly, critical, media, and official claims are all checked the same way. See `methodology.html`.
5. **Design stays calm and archival** — no dramatic imagery, no religious symbols/crosses, no children in photos, no stock business people, no flashy animation. Palette is defined in `assets/css/style.css` (`:root` variables) — use it, don't invent new colours.
6. **Keep it a lean static site.** Jekyll + GitHub Pages, no WordPress, no database, no unnecessary plugins/dependencies.
7. **Open a Pull Request for review; don't push straight to `main`** unless the owner has explicitly said to skip review for a specific change.

## Where things stand (update this section as work progresses)

**Phase 1 — Foundation: mostly done**
- [x] Site rebuilt from scratch as a static Jekyll site (replaced an old WordPress/Divi build full of AI placeholder content — fake phone/address/team/social stats, inconsistent dates)
- [x] All 7 core pages live: Home, Start Here, Methodology, Documents, Timeline, Claims, Contact
- [x] "Evidence Pathway" nav with small dots under each menu item, current page's dot larger/gold, no blue bands/blocks
- [x] Design palette applied (warm off-white / slate blue / muted gold, etc.)
- [x] Generated a realistic, appropriate archive-shelves hero image (no people, no religious symbols)
- [x] GitHub Pages enabled; live preview: `https://frankytyrone.github.io/tuam-records-project/`
- [ ] Real contact email/form not yet set up (`contact.html` says so honestly instead of faking it)
- [ ] Custom domain (`tuamrecordsproject.ie`) not yet pointed at GitHub Pages

**Phase 2 — Document Library: in progress**
- [x] TRP-001 to TRP-003: Commission of Investigation Final Report, 2017 test-excavation statement, Institutional Burials Act 2022
- [x] TRP-004/005: Fifth Interim Report (burials), 2024 peer-reviewed infant-mortality study
- [x] TRP-006 to TRP-009, TRP-012: Bon Secours & Catholic Church statements (2014 Prone email, 2017 statement, 2021 apology; Archbishop Neary and Archbishop Martin 2021 statements)
- [x] TRP-010/011/015: ODAIT forensic excavation updates (2025–2026), TRP-015 added as the primary-source Technical Update 8 (99 remains = 77 + 22, memorial-garden chamber still unexcavated)
- [x] TRP-013/014: Media coverage & corrections — Irish Times 7 June 2014 interview (Corless: "I never used that word 'dumped'") and the Associated Press's own formal 20 June 2014 correction (withdrew "denied baptism" and "Church teaching" claims after Tuam Archdiocese registry showed 2,000+ baptisms)
- [ ] Not yet added: survivor/witness testimony, illegal adoption allegations documents, local/historical records — still in progress

**Phase 3 — Claim vs Evidence: in progress**
- [x] "Septic tank" claim (nuanced: two structures, remains found in the undetermined-purpose chamber, not the tank itself)
- [x] Burial-vault dispute (Commission's finding vs Bon Secours' own expert's disagreement)
- [x] Comparative infant mortality (elevated at Tuam, but not shown to be unique to Tuam or this order — peer-reviewed cross-home comparison)
- [x] "No mass grave" 2014 denial vs later official findings
- [x] "The Catholic Church ran the home" — imprecise; Council owned it, Sisters operated it, diocese was pastoral only
- [x] "Bon Secours never apologised" — true for 2017, false after Jan 2021
- [x] "~800 babies found dumped in a septic tank" as reported as settled fact in June 2014 — documented media exaggeration of Corless's own more cautious, pre-excavation hypothesis; corrected on record by both Corless and the AP
- [x] "Babies denied Catholic baptism per Church teaching" — contradicted by Tuam Archdiocese registry (2,000+ baptisms) and retracted by the AP
- [x] Brian Nugent's "ossuary" theory (structure built by Galway County Council in the 1970s/80s, not a Home-era burial site) — checked against the Commission's own Fifth Interim Report technical findings (dating to 1937, articulation evidence, the Castrol GTX artefact); contradicted by that report on the same categories of evidence Nugent cites
- [x] "No dignified burial at all / all remains dumped" — checked against ODAIT's own Technical Update 6: every infant recovered from the Tent 1/Tent 2 burial-ground area to date (as distinct from the still-unexcavated 20-chamber structure) was found in a proper coffin; a separate post-1977 mechanical-digger disturbance of part of that burial ground is also documented
- [x] "Nuns forced women into the homes / forced or profited from adoptions" — checked against the Final Report's own findings (no evidence of coercion by Church/State or of profiteering), balanced against the same report's findings that women were routinely brought to the homes by family "without being consulted" and had little realistic alternative
- [x] Strengthened the 2014 media-exaggeration entry further: Corless's own earliest on-record framing (Connacht Tribune, 13 Feb 2014, months before the story went international) was "crypt," not "dumped"; The Guardian's own 10 June 2014 correction note on its 4 June piece is now cited alongside the AP's correction — two independent, documented outlet corrections rather than one
- [x] Pinned down the precise origin of the international story (Irish Mail on Sunday, 25 May 2014, journalist Alison O'Reilly) via ABC Media Watch's professional media-accountability broadcast (30 June 2014), plus a named eyewitness (Mary Moriarty, RTÉ) describing an orderly "crypt," not raw sewage
- [x] New claims entry on Alice Litster's 1947 Tuam inspection report (a non-Catholic, independent DLGPH inspector) — her findings on diet and day-to-day care by the Sisters do not match a "horror-film cruelty" narrative; her sharpest criticism (no isolation unit) was structural/systemic and a Galway County Council responsibility. Note: only the isolation-unit quote has been independently cross-checked by this site against the primary Final Report PDF text; the "careful and attentive"/diet quotes are sourced to The Tablet's citation and flagged on the site as pending further independent verification
- [x] Catalogued Eugene Jordan's planned documentary (Irish Catholic report, ~June 2026) — clearly labelled as an unreleased, in-production work; his verified credentials (past president, Galway Archaeological and Historical Society) are noted, distinct from Brian Nugent's self-published/self-styled status
- [ ] Illegal adoption allegations — **in progress**
- [ ] Survivor/witness testimony — **in progress**

**Note on sources reviewed but not catalogued (10 Aug 2026):** The Irish Catholic's "Why it is unfair to demonise the nuns of Tuam children's home" and Catholic Arena's "Ireland's Mother and Baby Homes: The REAL Story" pages were both reviewed. The Irish Catholic piece is paywalled beyond its teaser, with no visible byline or date to verify — its argument overlaps with David Quinn's dated, attributed Catholic Herald column (TRP-019), which was used instead. Catholic Arena's page is itself a polemical opinion piece (e.g. describing the Irish government as "anti-Catholic" and making unrelated claims about abortion) rather than a primary or attributable source in its own right; its substantive content (Nugent, Jordan and Connor's talks) is catalogued directly via TRP-016/017/020 instead of through Catholic Arena's framing of it.

**Note on scope (10 Aug 2026):** the owner asked the agent to look into whether Catherine Corless has a documented bias (e.g. abortion-rights campaigning, anti-Catholic statements) and whether Liam Neeson made "false allegations" in the 2026 film *The Lost Children of Tuam*. Findings: Corless appears in one segment of *The 8th* (2020, a documentary about the 2018 abortion referendum), discussing her Tuam research as historical context — no sourced evidence was found of her personally campaigning on abortion or making anti-Catholic statements, so no such characterisation has been added to the site (this would fail the site's own no-invented-content and no-inflammatory-language rules regardless of who it was about). The film is documented factually in the Timeline (release date, producers, basis) with no claim about Neeson's statements, since no specific sourced quote was found to check — if the owner has a specific Neeson quote in mind, it can be checked against a source and added.

**Phase 4 — Advanced search & tools: not started**
**Phase 5 — SEO & growth: not started** (don't start until content above is solid)

## How to work on this repo

- Read `methodology.html` for the categorisation system (documented fact / official finding / public claim / interpretation / unresolved question) before writing any new content.
- Follow the existing pattern in `claims.html` for new Claim vs Evidence entries (public claim → where it appeared → source documents → exact wording → plain-English explanation → evidence status → unresolved questions).
- Add new sources to `documents.html` with the next sequential TRP-### ID, following the existing table format.
- Update the checklist above when you finish something, so the next agent (and the owner) can see current status at a glance.
