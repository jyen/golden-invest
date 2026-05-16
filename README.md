# Golden Glaze Strategic Package · Deployment Guide

Everything you need to walk Jack through the rollup, share the HTML strategy site, pitch new SAFE investors, and update existing LPs.

Prepared May 2026 for Youyou. Distribute internally only. The HTML site is for investors; the DOCX files are confidential.

---

## What's in this package

```
gg-package/
├── README.md                                   ← you are here
├── html-app/
│   ├── dist/                                   ← deployable static site (663KB total)
│   │   ├── index.html
│   │   └── assets/index-DwHQS84G.js
│   ├── src/App.jsx                             ← editable React source
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── docs/
│   ├── 01-Strategy-Walkthrough-for-Jack.docx   ← internal memo for Jack session
│   ├── 02-Investor-Pitch-Deck.pptx             ← pitch deck (both audiences)
│   └── 03-LP-Update-Letter.docx                ← warm letter for 14 existing LPs
└── build scripts                                ← regenerate any artifact if you edit it
```

---

## File-by-file summary

### 1 · HTML strategy site (`html-app/dist/`)

The full interactive strategic memorandum. 10 tabs. ~660KB total. Loads in any browser.

**Audience:** sophisticated investors and advisors. Send the URL when you want someone to do their own deep dive before a call. Mobile-responsive but designed primarily for desktop review.

**What's in it:** Welcome · Foundations · Where We Are · Team · Vision · Roll-Up · Modeler · Walkthrough · For Existing LPs · For New Investors.

### 2 · Strategy Walkthrough for Jack (`docs/01-...docx`)

A comprehensive internal memo covering every decision made about the rollup, cap table, valuations, capital strategy, open items, and risks. Designed to be the document you and Jack mark up together before approaching the anchor SAFE investor.

**Use:** print or share with Jack ahead of your strategy session. Mark anything that surprises him. The "Open Items" and "Action Items" sections are designed to drive concrete decisions in your meeting.

**Key sections:** Executive Summary, Current State, Roll-Up Strategy, Decisions Already Made, Capital Strategy, Open Items, Risks & Mitigations, 30-Day Action Items.

### 3 · Investor Pitch Deck (`docs/02-...pptx`)

A single 16-slide deck designed for both audiences:
- **Small SAFE investors** ($30K-100K checks) — present slides 1-12, skip 13 risk detail
- **Anchor SAFE investor** ($500K+) — present all 16 slides, spend extra time on slides 6, 8, 9, 11, 13

Speaker notes on every slide differentiate the talk track. Read them before each conversation.

**Slide map:**
1. Cover — set tone
2. One-paragraph summary — fast orientation
3. Portfolio today — credibility through real numbers
4. Turnaround playbook — value creation story
5. The team — three pillars (institutional, engineering, donut expertise)
6. Platform thesis — four revenue pillars
7. Path to exit — Year 4 and Year 7 windows
8. Comparable valuations — Shipley, Mochinut, Dave's, Krispy Kreme, Cava, Sweetgreen
9. Roll-up structure — three cap-table lines
10. Unit economics — Arlington (LP-funded) vs Bluemound (founder-funded)
11. The ask — SAFE terms + use of proceeds
12. The math — MOIC and IRR table by check size and exit
13. Risks we own — honest accounting with mitigations
14. Why now — three timing windows
15. Next steps — week-by-week to close
16. Closing — contact

### 4 · LP Update Letter (`docs/03-...docx`)

A warm, transparent letter for the 14 existing LPs explaining the rollup. Honors the Arlington 10% preferred return prominently. Customize per recipient — fields in brackets `[LP NAME]`, `[SHOP NAME]`, `[INVESTMENT AMOUNT]`, `[STARTING MRR]`, `[CURRENT MRR]`, etc.

**Three versions to customize:**

- **Arlington/NRH LPs (8 people)** — include the italicized Arlington pref paragraph. $25K investment each. Their shop is `Arlington` and `NRH`.
- **Fort Worth LPs (4 people)** — remove the Arlington pref paragraph. $30K investment each. Their shop is `Fort Worth`.
- **Grapevine LPs (2 people)** — remove the Arlington pref paragraph. $30K investment each. Their shop is `Grapevine`. Note: their cohort is incomplete (2 of 4 wired) — be transparent about why the remaining $60K is moving to HoldCo SAFE.

---

## How to deploy the HTML site

The HTML site is a **single self-contained `index.html` file** (660KB). Everything is inlined — React, the data, all components. Only Tailwind CSS loads from CDN (requires internet on first view).

### Option A · Just open it (simplest)

Double-click `golden-glaze-strategy.html` (or `html-app/dist/index.html` inside the zip). It opens in any modern browser — Chrome, Safari, Firefox, Edge.

Use this when you want to review the doc yourself or hand a USB drive to someone in person.

### Option B · Vercel / Netlify (60 seconds, gives you a shareable URL)

1. Sign up at [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) (both free for personal sites)
2. Drag the `golden-glaze-strategy.html` file onto the dashboard (rename it to `index.html` first if Netlify asks)
3. You get a URL like `golden-glaze-xxxxx.vercel.app` to share with investors

### Option C · GitHub Pages

1. Create a new repo on GitHub, upload `index.html` to the root
2. Settings → Pages → Source: deploy from branch `main` → root `/`
3. Site appears at `[username].github.io/[repo-name]/` in ~2 minutes

### Option D · Custom domain (when you have one)

Both Vercel and Netlify support custom domains for free. Buy a domain (Namecheap, Cloudflare, Squarespace), add it in the platform's domain settings, follow DNS instructions. SSL is automatic.

**Recommended naming:**
- `strategy.goldenglaze.com` for the investor site
- `goldenglaze.com` reserved for the brand site you'll build later

---

## How to share the HTML

The link should ideally go to sophisticated investors **only**. Treat it like a confidential deck. The site does not contain a password gate — anyone with the URL can view it.

**If you want to add a password gate:**

The simplest approach is Cloudflare Access (free for up to 50 users):
1. Set up Cloudflare in front of your domain (this is automatic with Vercel/Netlify via DNS)
2. In Cloudflare Zero Trust dashboard → Access → Applications → "Add an application"
3. Set the application type to "Self-hosted", domain to your site URL
4. Add policy: "Emails listed" → paste investor email addresses
5. Now only those email addresses can access the site (verified by email login)

**Alternative:** use a service like [Pagewatch](https://pagewatch.dev) or [Whocanaccessthis](https://github.com/wkoffel/who-can-access-this) if you want simpler password protection.

---

## How to edit each artifact

### Editing the HTML site

1. The React source is at `html-app/src/App.jsx` (~2,800 lines)
2. Open in any code editor (VSCode recommended)
3. Make changes
4. Rebuild: `cd html-app && npm run build`
5. Redeploy the `dist/` folder

### Editing the strategy memo

Open `docs/01-Strategy-Walkthrough-for-Jack.docx` in Microsoft Word, Google Docs, or Pages. Edit normally. Save.

**To rebuild from script** (if you want to programmatically update):
- The build script is at `/home/claude/gg-package/build-strategy-doc.js`
- Edit it, then run: `node build-strategy-doc.js`

### Editing the pitch deck

Open `docs/02-Investor-Pitch-Deck.pptx` in PowerPoint, Google Slides, or Keynote. Edit normally.

**Critical:** the math on slide 12 assumes $2M post-money cap and 20% Series A dilution. If you change the SAFE terms, update slide 12 manually OR regenerate from script.

**To rebuild from script:**
- Edit `/home/claude/gg-package/build-pitch-deck.js`
- Look for the `calcReturn` function around line 800
- Adjust the cap (`/ 2000` means $2M cap; change to `/ 5000` for $5M cap)
- Run: `node build-pitch-deck.js`

### Editing the LP letter

Open `docs/03-LP-Update-Letter.docx` in Word/Google Docs. Replace all `[BRACKETED FIELDS]` with the specific LP's information. Save as a per-LP version (e.g. `LP-Letter-Mary-Chen.docx`).

**Recommended workflow:** create 14 personalized versions, one per LP. Track which version went to whom in a simple spreadsheet (Name | Email | Shop | Letter version sent | Date sent | Response).

---

## Important caveats before you send anything

### 1 · The math on slide 12 is generous to investors

The pitch deck shows 32-48× MOIC on the SAFE because of the $2M cap relative to the projected $80-120M exit. **This is correct given the stated terms, but the cap is generous.** Sophisticated investors will notice. Two considerations:

- If anchor SAFE investor pushes back on the cap, you may want to negotiate UP to $4-6M cap (which would put MOICs in a more normal 8-15× range). Be ready for this conversation.
- If you want to preserve the $2M cap, the math IS what it is — present it confidently. The asymmetry favors investors because we need their capital now.

### 2 · Revenue numbers throughout assume net figures

The strategy doc, pitch deck, and LP letter all use approximate figures (~$1.5M gross ARR, $1.31M net). Before any of these goes to an anchor SAFE investor or to PE diligence, **engage the fractional bookkeeper** to verify actual gross and net figures from POS data and bank deposits.

### 3 · Arlington pref language is preserved but informal

The 10% per year preferred return promise to Arlington LPs was original informal deal — not in operating agreement language. Securities counsel should formalize this in the HoldCo Operating Agreement before the rollup completes. The LP letter honors it; the docs should too.

### 4 · Founder cash contributions are not disclosed

Per your prior instruction, the package does NOT disclose what UU+Jack personally paid for Bluemound, Carrollton, Dallas. The framing is "founder-funded" without specific dollar amounts. Keep this consistent in any verbal pitch.

### 5 · Open allocation questions

Two minor cap-table items were defaulted, not confirmed:
- **Lam** is in advisor pool at 1% (vs. MIP at 1%). Defaulted to advisor per "mutual-aid" framing. If Lam is on payroll, move to MIP.
- **Advisor reserve** at 6% of GGP. Sized for 2-4 institutional board advisors at 1-3% each. Larger reserve possible if you want more aggressive board recruitment.

---

## Suggested sequencing

### Week 1 · Internal alignment
1. Read the strategy doc end-to-end
2. Send it to Jack with a note: "Read this, mark anything you'd change, let's meet Friday"
3. Friday: 90-minute working session to align on the cap table and the SAFE terms

### Week 2 · Set up infrastructure
1. Deploy HTML site to Vercel/Netlify
2. Engage corporate counsel for HoldCo formation
3. Send accreditation questionnaires to all 14 LPs
4. Engage fractional bookkeeper for April + May 2026 close

### Week 3 · Soft outreach to existing LPs
1. Customize LP letter for each of the 14 LPs (3 versions, just the bracketed fields)
2. Send via email with a personal note offering a 30-minute call
3. Conduct calls; collect questions; refine messaging

### Week 4 · Anchor SAFE conversation
1. Send anchor the HTML site link 2-3 days before the meeting
2. Send pitch deck to review beforehand
3. Lead the meeting with strategy doc as backbone
4. Close the conversation with specific next steps (term sheet timeline)

### Months 2-3 · Round close
1. Anchor commitment → pool participants follow on MFN terms
2. SAFE proceeds released → counsel engaged in earnest
3. HoldCo formation begins
4. Monthly investor updates start (template available on request)

---

## Need to regenerate anything?

All build scripts are in the package root:

- `build-strategy-doc.js` — regenerates `docs/01-...docx`
- `build-pitch-deck.js` — regenerates `docs/02-...pptx`
- `build-lp-letter.js` — regenerates `docs/03-...docx`

To run any of them: `node <scriptname>.js`. Output goes to `docs/`.

To rebuild the HTML site: `cd html-app && npm run build` (output in `dist/`).

---

## Questions while deploying?

If something doesn't render correctly, the most common fix is:

- **HTML site doesn't load:** check that `assets/` folder is uploaded alongside `index.html`
- **Pitch deck looks wrong in Google Slides:** PowerPoint format renders best in PowerPoint or Keynote. For Google Slides, export from PowerPoint as PDF first, then import the PDF.
- **DOCX missing formatting:** make sure you're opening in Word 2019+ or modern Google Docs. Old versions may not render the table shading.

---

*Confidential. Prepared for Golden Glaze Holdings only. Do not distribute externally.*
