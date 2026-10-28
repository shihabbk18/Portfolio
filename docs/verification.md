# Portfolio verification

## 27 October 2026 update: selectable colour themes

- Added persistent Midnight, Black, White, and Violet choices beside the motion control.
- Theme tokens cover backgrounds, typography, navigation, cards, forms, chat, controls, and 3D accent colours. White uses a light native colour scheme and dark text.
- An allowlisted inline bootstrap restores a saved palette before hydration. Theme selection still applies when local storage is unavailable.
- All 25 tests across nine files passed, including choosing White, restoring it after remounting, keyboard dismissal, invalid stored values, and blocked storage. Production export and TypeScript passed for all pages and 16 case studies.
- Visual browser review remains unavailable because the browser tool cannot initialize its kernel assets. The palettes have not been visually verified in this session.

## 27 October 2026 update: scroll reset and complete project collection

- Added an explicit instant top reset on every pathname change, followed by a frame-level reset after router scroll/focus handling. Explicit section links keep their target.
- Two regression tests cover transitions across all main routes and the `/about/#skills` exception.
- Expanded the catalogue from five to 16 complete case studies, using the owner's repository READMEs and implementation details. Fun with Flags, LitWeaver AI, and GestureCam FX are featured on Home.
- Added catalogue search and field filters, a selector for every gallery project, and bounded rendering of five neighboring 3D cards.
- Updated Orbit's project knowledge and verified that the existing academic-grade privacy tests still pass.
- Production export and TypeScript passed. All 22 tests across eight files passed. Direct HTTP checks passed for all 16 generated case-study routes and the featured Fun with Flags links.
- Manual browser verification was unavailable for this update: the browser tool failed to initialize its kernel assets with a missing-path error, including after a reset. Scroll behavior is covered by the regression tests; physical-browser behavior should be checked when the tool is available again.

## Original multi-page release

Verified 26 October 2026.

**Story:** Visitors move between persistent 3D environments, select a project and open its generated case study, ask Orbit questions grounded in portfolio data, and prepare an email enquiry.

| Boundary | Result | Evidence |
| --- | --- | --- |
| Production build | Passed | `next build` exported all five main pages and five project case studies; TypeScript passed. |
| Direct route loads | Passed | HTTP 200 for home, about, work, research, contact, all five case studies, CV, and sitemap. |
| 3D rendering | Passed | Real WebGL core and gallery rendered in the browser; robot used its own small persistent viewport. No browser console errors during the tested flows. |
| Navigation | Passed | Desktop and mobile navigation changed routes; a case-study heading received focus; mobile menu closed after selection. |
| Gallery → content | Passed | Selecting ModelDNA and advancing to Sign Sense changed the selected project and case-study link. The carousel rotation center was corrected during visual review. |
| Chat → data → answer | Passed | “Tell me about ModelDNA” returned its portfolio description; “What tools does it use?” returned PyTorch, Streamlit, and its other recorded technologies. |
| Chat → navigation | Passed | The assistant link opened `/work/model-dna/`; chat history remained available after client navigation. |
| Contact validation | Passed | Submitting an empty form displayed three validation errors. Valid submissions prepare a mailto draft; no delivery is claimed. |
| Mobile layout | Passed | At a 390 × 844 viewport, no horizontal overflow; chat, menu, carousel controls, and persistent controls remained usable. |
| Motion controls | Passed | The pause button switched the shared experience to `motion-paused`; reduced-motion and document-visibility logic use demand rendering. |
| Regression suite | Passed | 17 tests across seven files passed. Worker concurrency is capped at two to avoid resource-contention timeouts. |

## Runtime and hosting

The build uses `NEXT_STATIC_EXPORT=true`, `NEXT_PUBLIC_BASE_PATH=/Portfolio`, and the existing GitHub Pages canonical URL. Internal links and the CV resolve under that base path. GitHub Actions builds the static export on Linux and publishes `out/`.

There are no chat or contact API requests, database writes, or server credentials. Orbit retrieves answers from the same typed data modules as the pages. Its fallback explicitly declines unknown information. The contact form opens the visitor's email client; sending the message is the visitor's action.

## Scope of checks

Browser checks covered desktop rendering, mobile navigation and chat, gallery selection, a case-study transition, history persistence, global pause, and contact errors. The operating system's reduced-motion setting and device-specific GPU limits were not exhaustively tested on physical devices. WebGL error boundaries and accessible HTML provide fallbacks.


## Clay design preview — 2026-10-28

Local-only revision requested by the owner; no commit, push, or deployment performed. Adapted the MIT reference at https://3d-portfolio.derikn.com/ with attribution and license retained. White is default; existing saved theme preferences remain respected.

Production static export passed for all 25 generated pages, including 16 case studies. Existing 25 tests passed; two new home tests passed; the affected gallery tests were rerun successfully after adding artwork. Browser checked at 1440px and 390px: home, research tab, About top reset, Black/White switching, mobile navigation, project search, Fun with Flags case study, and opening Orbit. No browser console errors were recorded during the initial browser flow. All above-the-fold artwork loaded; below-fold images load lazily.

Desktop screenshot: outputs/clay-desktop.jpg. Local preview: http://127.0.0.1:4173/. Source remains uncommitted pending user design approval.


## Photo-based portrait — 2026-10-28
Replaced the generic character in all live ClayIllustration instances with an identity-preserving 3D-style portrait generated from the owner-supplied photograph using the built-in image tool. Transparent 1254×1254 PNG retained in public/clay/shihab-3d-portrait.png. Full prompt recorded in docs/portrait-generation.md. Original photograph unchanged. Production static build passed; both affected home tests passed. Browser confirmed the portrait loaded in both home placements, no old avatar images remained mounted, the new float pauses with the motion control, and the 390px layout has no horizontal overflow. Screenshot: outputs/shihab-portrait-desktop.jpg. No commit, push, or deployment performed; still awaiting design approval.


## Selected leather portrait and social profiles — 2026-10-28
Used the owner-supplied Confident 3D Portrait in Leather.png unchanged (source and project copy SHA256 match). Portrait uses CSS framing with existing entrance, float, and pointer tilt. Added canonical LinkedIn and ResearchGate URLs to the home connections, Contact page, footer, Person sameAs metadata, and local assistant profile answers. Removed tracking query strings from the supplied profile URLs. Production static build passed, with 10 affected tests passing. Browser confirmed the hero image loaded and rendered, and all home/footer social links have the supplied canonical destinations. Screenshot: outputs/leather-portrait-desktop.jpg. All work remains local and uncommitted pending design approval.


## Release to PORTFOLIO- — 2026-10-28
Owner approved publication to shihabbk18/PORTFOLIO-. Removed the on-page design credit and footer design copy; retained the third-party MIT notice. Switched the portrait to a PNG cutout with genuine alpha transparency and removed the container background. Production static export passed at /PORTFOLIO- and all 27 tests passed. Workflow preserves the existing nested GestureCam demo. README rewritten for the published repository.


Owner correction: publish this repository as lowercase portfolio-, serving only the portfolio. Removed the GestureCam compatibility build and nested demo path from the deployment. GestureCam remains an external project in its own repository.


## Consolidation into the original Portfolio repository — 2026-10-28
Owner requested keeping this design in shihabbk18/Portfolio and removing the duplicate portfolio- repository. Updated workflow base path, site metadata, and README live URL to /Portfolio. The original repository HEAD is an ancestor of this version, so migration preserves its history without a force push. The duplicate contains only main and no issues, stars, or forks. A local Git bundle is saved before removal.
