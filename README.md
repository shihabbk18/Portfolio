# Shihab Bin Kader — Neural Research Lab

Live portfolio: https://shihabbk18.github.io/Portfolio/

A multi-page portfolio for an aspiring AI researcher and computer-vision developer. Real Three.js scenes, GSAP camera travel, and an animated robot guide connect the portfolio without hiding its research, projects, or accessible HTML content.

## Pages

- `/`: neural-core hero and introductions to the portfolio.
- `/about/`: background, education, language proficiency, skills, and research interests.
- `/work/`: an interactive 3D project carousel, keyboard controls, and the complete project index.
- `/work/[slug]/`: five statically generated case studies with problem, approach, outcome, tools, features, and verified links.
- `/research/`: research contributions, published work, and a clearly labelled manuscript under review.
- `/contact/`: a communication-terminal scene and validated email-draft form.

## Technology

Next.js App Router, React 19, TypeScript, Tailwind CSS 4, Three.js, React Three Fiber 9, Drei, GSAP/ScrollTrigger, Motion, and Lucide.

## Architecture

The root layout mounts `ExperienceShell` once. Its provider preserves the selected project, motion setting, and assistant state across client navigation. A dynamically imported world canvas contains five procedural environments. CameraRig uses GSAP for horizontal route travel and ScrollTrigger for depth, with cleanup on route changes. A small independent robot canvas keeps Orbit anchored above page content without remounting the main world.

`components/experience/` contains the provider, WebGL boundary, renderer, scenes, and camera controller. `components/robot/` contains the procedural robot, chat interface, and knowledge retrieval. `components/work-gallery.tsx` connects accessible carousel controls to the 3D gallery. `app/experience.css` styles the multi-page interface; the base visual system remains in `app/globals.css` and `app/digital.css`.

## Orbit portfolio guide

Orbit answers locally from `data/portfolio.ts`, `data/projects.ts`, and `data/skills.ts`. It recognizes project names, supports project follow-up questions, links to case studies, and declines unknown personal information. It is a deterministic knowledge guide, not an external generative AI service. Chat text is not sent to a server, and no API key is needed. History remains in memory while navigating; reloading clears it.

The robot floats and blinks, becomes attentive when opened, and changes its eye illumination after an answer. Chat is keyboard accessible, supports Escape, and restores launcher focus when closed. The motion setting is the only preference stored locally.

## Contact behavior

The form validates the visitor's name, email, and message, then opens their email client with a prepared draft. It does not send or store messages and does not claim delivery. A mail-service backend can be added separately if required.

## Development

Requires Node.js 22.13+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm test
```

The existing development command uses Vinext. For a standard Next.js development session, run `pnpm exec next dev`.

```sh
pnpm build:next
```

For GitHub Pages, set `NEXT_STATIC_EXPORT=true`, `NEXT_PUBLIC_BASE_PATH=/Portfolio`, and `NEXT_PUBLIC_SITE_URL=https://shihabbk18.github.io/Portfolio`, then build. The existing GitHub Actions workflow supplies these values and deploys `out/` after pushes to `main`.

## Accessibility and performance

Semantic HTML contains all essential content. Real links preserve direct URLs and browser history. Project controls support arrow keys and explicit selection buttons. The guide uses a labelled conversation log. WebGL failures fall back to accessible content and a static robot. Reduced-motion preferences disable continuous rendering; a persistent pause control is also available. Hidden documents stop continuous rendering. Device pixel ratio is capped, procedural assets avoid external model downloads, and the robot uses a small low-power canvas.

## Editing content

- `data/portfolio.ts`: identity, biography, research, education, and navigation.
- `data/projects.ts`: project descriptions, outcomes, features, technologies, and verified links.
- `data/skills.ts`: skill groups.
- `public/Shihab-Bin-Kader-CV.pdf`: genuine downloadable CV.

Keep claims grounded in the supplied CV and verified project records. Generate case-study routes and sitemap entries from the project data. Do not add invented achievements, testimonials, or performance metrics.

## Validation

Vitest and Testing Library cover navigation, project interactions, contact validation, assistant focus and chat behavior, knowledge answers and unknown-information handling, and animation controls. Production static exports must include all page routes and five case studies. Verify desktop/mobile layouts and real WebGL rendering before publication.

## License

MIT for source code. Personal biography, research claims, and CV remain attributable to Shihab Bin Kader.
