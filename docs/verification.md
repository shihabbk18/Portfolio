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
