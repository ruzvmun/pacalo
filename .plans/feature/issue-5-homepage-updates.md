# Task: Issue #5 — Homepage updates (replace WhatsApp CTA, remove forms, fix Contact + scroll)

**Status:** COMPLETE (pending visual QA in dev server)
**Issue:** [#5](https://github.com/ruzvmun/Pacalo_Demo_Site/issues/5) — "Updates to Pacalo.net"
**Branch:** TBD (suggest `feature/issue-5-homepage-updates`)

## Goal
Replace the WhatsApp button in the top-right navbar with a visually compelling "Request a Ride" CTA, remove two homepage forms (Request-a-Ride next to FAQ, and the Book Vehicle bar), make the FAQ section absorb the freed space, ensure `/request-ride` opens scrolled to the top, and remove the broken Contact link.

## Context
- **Related files:**
  - `src/features/home/Navbar.tsx` — top-right WhatsApp + Call Now buttons (desktop and mobile drawer); broken Contact link in nav arrays
  - `src/features/home/HeroSection.tsx` — separate WhatsApp button in the hero CTA grid (out of scope per the issue; leave alone unless user asks)
  - `src/app/Home.tsx` — composes the FAQ + BookingForm row; this is the section to restructure
  - `src/features/home/components/BookingForm.tsx` — "Request a Ride" form shown next to FAQ (to be removed from Home)
  - `src/features/home/components/FAQ.tsx` — needs to expand into the freed column
  - `src/features/home/components/BookingBarForm.tsx` — the "Book Vehicle" form (to be removed)
  - `src/features/home/HeroSection.tsx` — check whether BookingBarForm is rendered here or in another section
  - `src/app/RequestRideBambi.tsx` (route `/request`) — needs scroll-to-top on mount
  - `src/App.tsx` — route map; routes are currently `/request` and `/request-ride-old`, but **every CTA in the codebase links to `/request-ride`** which does not exist → must reconcile (see Notes)
  - `src/features/home/Footer.tsx`, `src/features/home/components/FloatingActionButton.tsx`, `src/features/home/components/RequestRideCTA.tsx`, `src/app/Services.tsx` — all link to `/request-ride`
- **Triggered by:** Issue #5 from @ruzvmun

## Current State

**What works now:**
- WhatsApp button in `Navbar.tsx:99-102` (desktop) and `Navbar.tsx:151-155` (mobile drawer) — present and functional
- Call Now button beside it works
- FAQ + BookingForm two-column grid renders in `Home.tsx:41-51`
- BookingBarForm renders on the homepage (location TBD — confirm during step 1)
- Contact route `/contact` exists and renders `ContactPage`; nav links to it from `Navbar.tsx:47` and `Navbar.tsx:54`

**What's broken/missing:**
- **Critical pre-existing bug:** all "Request a Ride" CTAs in the codebase link to `/request-ride`, but the route is defined as `/request`. Every one of these buttons currently 404s — Footer, FloatingActionButton, RequestRideCTA, Services page CTA. (This is what produced the 404 the user reported earlier; the `404.html` SPA fallback masks the symptom but the link still lands on a non-existent route.) **Must be reconciled before adding another `/request-ride` link from the navbar.**
- Contact link in nav is flagged as "broken" by the issue (the route exists; user likely means content/UX broken — confirm before removal vs. fix)
- `/request` page does not scroll to top on mount (likely inherits scroll position from the previous page)

## Steps

### Phase 1: Reconnaissance (do before writing any code)
- [ ] Open the issue's screenshots to confirm exact placement of the WhatsApp button, the FAQ/RequestForm row, and the Book Vehicle form
- [ ] Locate where `BookingBarForm` is rendered on the homepage (grep for `BookingBarForm` import) and confirm removal scope
- [ ] Decide route reconciliation strategy (see Notes → Open Questions). Recommended: **rename the route to `/request-ride`** so all existing CTAs start working, rather than touching every link site-wide
- [ ] Confirm with user whether to also remove the WhatsApp button from `HeroSection.tsx` (out of scope per literal reading of the issue, but possibly intended for visual consistency)
- [ ] Confirm whether the Contact link should be **removed from nav** (literal ask) or **fixed** (the page exists)

### Phase 2: Route reconciliation
- [ ] Update every `/request-ride` link to `/request`:
  - `src/features/home/Footer.tsx:69`
  - `src/features/home/components/FloatingActionButton.tsx:36`
  - `src/features/home/components/RequestRideCTA.tsx:15`
  - `src/app/Services.tsx:28`
- [ ] Keep `/request-ride-old` route as-is for now
- [ ] Manual test: click every "Request a Ride" CTA and confirm they all resolve

### Phase 3: Navbar — compact WhatsApp + add Request a Ride
- [ ] In `Navbar.tsx:97-102` (desktop WhatsApp): keep the link, drop the `<span>WhatsApp</span>` text, keep only the `FaWhatsapp` icon. Add `title="WhatsApp"` (or `aria-label`) for accessibility/tooltip. Tighten padding so it reads as an icon button.
- [ ] **Call Now stays exactly as-is** (icon + text). Confirmed by user.
- [ ] Add a new `<Link to="/request">` "Request a Ride" CTA next to Call Now in `Navbar.tsx:97-110`. Style: `bg-red-600 hover:bg-red-700 text-white font-bold` (decided). Use an icon from `react-icons` (e.g. `FaTaxi`, `FaCarSide`, or `FaCalendarCheck`).
- [ ] In `Navbar.tsx:148-155` (mobile drawer): keep WhatsApp **with** its label (drawer has space, no need to icon-ify there). Add the new Request a Ride entry to the drawer as well.

### Phase 4: Homepage — remove Request a Ride form, expand FAQ
- [ ] In `Home.tsx:30-53`: remove the `<BookingForm />` column. Restructure the grid:
  - **Option A (recommended):** drop the `lg:grid-cols-2` and let FAQ span full width within the container, optionally `max-w-4xl mx-auto` for readability
  - **Option B:** keep two columns but put something else in the left column (e.g. an image, testimonials excerpt, or "Why Choose Us" highlights)
- [ ] Remove the now-unused `BookingForm` import
- [ ] Verify the background image still looks balanced without the form taking the left half — may need to adjust container padding or gradient

### Phase 5: Homepage — remove Book Vehicle form
- [ ] Locate `BookingBarForm` usage on the homepage (confirmed in Phase 1) and remove it
- [ ] Remove its import
- [ ] Verify the surrounding section flow doesn't leave an awkward gap; adjust spacing if needed

### Phase 6: /request-ride — scroll to top on mount
- [ ] In `src/app/RequestRideBambi.tsx`: add a `useEffect(() => { window.scrollTo(0, 0) }, [])` at the top of the component
- [ ] Better alternative: add a global `ScrollToTop` component inside `<Router>` in `App.tsx` that listens to `useLocation()` and resets scroll on every route change — fixes the same issue site-wide, not just this page. Recommended.

### Phase 7: Contact link — leave alone
- [x] **Decision:** Contact link stays as-is, routes to `/contact`. The `ContactPage` is fully built (phone/WhatsApp/email/hours card grid) — was not actually broken. No action needed.

### Phase 8: Verification
- [ ] `npm run dev` — visit `/`, scroll through every section, click each CTA
- [ ] Confirm: top-right shows Request a Ride + Call Now (no WhatsApp); FAQ section has no form next to it; no Book Vehicle bar anywhere; `/request-ride` loads at top of page; nav has no Contact link (or has a working one)
- [ ] Test mobile viewport — drawer should also show the new Request a Ride CTA
- [ ] `npm run build` locally (note: requires WSL/Git Bash on Windows due to `rm -rf`) or push and watch the GH Actions build
- [ ] Visual diff against the screenshots in the issue

## Recovery Checkpoint

- **Last completed action:** All implementation phases complete. `tsc --noEmit` passes clean.
- **Next immediate action:** Visual QA — `npm run dev`, walk through homepage + mobile + Request a Ride flow.
- **Recent commands run:**
  - `npx tsc --noEmit` → exit 0
- **Uncommitted changes:** Home.tsx, HeroSection.tsx, Navbar.tsx, Footer.tsx, App.tsx, Services.tsx, FloatingActionButton.tsx, RequestRideCTA.tsx
- **Environment state:** on `main` branch. Code changes ready to stage + commit.

## Failed Approaches
<!-- Prevent repeating mistakes after context reset -->

| What was tried | Why it failed | Date |
| -------------- | ------------- | ---- |
|                |               |      |

## Files Modified

| File | Action | Status |
| ---- | ------ | ------ |
| `src/App.tsx` | Added global `ScrollToTop` component | ✅ |
| `src/features/home/Navbar.tsx` | WhatsApp → icon-only w/ tooltip; added red Request a Ride CTA (desktop + mobile drawer) | ✅ |
| `src/app/Home.tsx` | Removed `BookingForm`, FAQ now spans full width (`max-w-4xl mx-auto`); cleaned unused imports | ✅ |
| `src/features/home/HeroSection.tsx` | Removed `BookingBarForm` + import | ✅ |
| `src/features/home/Footer.tsx` | Fixed `/request-ride` → `/request`; added `id="contact"` for homepage anchor scroll | ✅ |
| `src/features/home/components/FloatingActionButton.tsx` | Fixed `/request-ride` → `/request` | ✅ |
| `src/features/home/components/RequestRideCTA.tsx` | Fixed `/request-ride` → `/request` | ✅ |
| `src/app/Services.tsx` | Fixed `/request-ride` → `/request` | ✅ |

## Blockers
- Need user decision on:
  1. ~~Route reconciliation strategy~~ → **DECIDED:** keep `/request`, update all `/request-ride` links to `/request`
  2. ~~Remove WhatsApp from HeroSection?~~ → **DECIDED:** leave the hero WhatsApp button alone (only navbar changes)
  3. ~~Remove Contact link?~~ → **DECIDED:** keep Contact link as-is (page is fully built, not broken). Routes to `/contact`.
  4. ~~Color for new CTA~~ → **DECIDED:** vibrant red (`bg-red-600 hover:bg-red-700 text-white`)

## Notes

### Open questions for the user (resolve before Phase 2)
1. **Route mismatch:** every existing "Request a Ride" CTA in the codebase links to `/request-ride`, but the route is `/request`. Rename the route, or fix every link? (Rename is one line; fixing links touches 4+ files.)
2. **WhatsApp in hero:** there's a second WhatsApp button in `HeroSection.tsx:107-115` (green pill in the contact-CTA grid). Issue only calls out the top-right one. Leave or remove?
3. **Contact link:** "broken" — issue says remove; the page exists but maybe its content is broken. Remove from nav, or fix the page?

### Design decisions
- Use `<Link>` from react-router-dom for the new CTA, not `<a href>` — keeps it client-side and snappy
- Add a `ScrollToTop` component in `App.tsx` (Phase 6 alternative) rather than per-page `useEffect` — better hygiene, fixes the same UX issue on every route
- Color suggestion for the new CTA: bright/warm accent that doesn't compete with the gold Call Now button. Red, orange, or a darker blue-with-glow are all reasonable

### Gotchas
- `Home.tsx` references `window.innerWidth` at render time for the background image — not responsive on resize, but unrelated to this issue. Don't fix here.
- `Navbar.tsx` has two arrays of nav links (lines 47, 54) — likely one for anchor scroll and one for routed nav. Make sure both arrays get the Contact removal if that's the chosen direction.

## Lessons Learned
<!-- Fill during and after task. -->
-

## Additional Context (Claude)

**Suggestion: collapse the route mismatch fix into this PR.** It's a pre-existing bug — Footer, FAB, Services, and RequestRideCTA buttons all 404 today. The issue is asking me to add yet another `/request-ride` link in the navbar. Fixing the route name once (Phase 2) is strictly cheaper than adding a fifth broken link. The user should know this is not optional polishing — it's the actual cause of the 404 they were debugging earlier with the SPA fallback.

**Suggestion: prefer a global `ScrollToTop` over per-page scroll resets.** The issue only mentions `/request-ride`, but if you ever land on FAQ → click another link, you'll see the same problem. One small component in `App.tsx` (~10 lines) fixes it everywhere and is the convention in react-router apps.

**Out-of-scope cleanup spotted (do NOT bundle into this PR):**
- `Home.tsx:34` uses `window.innerWidth` at render time — won't update on resize. Better as a CSS media query in the `style` attribute or a `useMediaQuery` hook. File a separate issue.
- `/request-ride-old` route still exists in `App.tsx:28`. If `RequestRidePage` is truly orphaned, delete the file and route in a follow-up cleanup commit.
- `.claude/settings.local.json` was accidentally tracked by commit `3c787b7`. `git rm --cached` it and add `.claude/` to `.gitignore`. (User already added `.claude/settings.local.json` to .gitignore — but the file is still tracked. Needs the cached removal too.)
