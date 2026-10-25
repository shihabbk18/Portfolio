# Shihab Bin Kader — Interactive AI Portfolio

Check it out — https://shihabbk18.github.io/Portfolio/

A production-ready, single-page research portfolio for Shihab Bin Kader, an aspiring AI researcher and computer-vision developer. The site presents verified projects, research, education, and skills through a dark editorial interface designed for graduate-school applications, research opportunities, and professional networking.

## Screenshots

Add desktop and mobile screenshots to `public/screenshots/`, then reference them here. Suggested captures:

- `portfolio-desktop.png` at 1440 × 1000
- `portfolio-project-deck.png` with a background project selected
- `portfolio-mobile.png` at 390 × 844

## Key design features

- Midnight blue, luminous cyan, and violet palette controlled by CSS variables
- Editorial typography using Manrope for display text and Inter for body text through `next/font`
- Native CSS 3D globe with rotating wireframes, orbiting lights, floating research panels, and pointer-responsive perspective
- Pause/resume control and automatic reduced-motion support for the 3D scene
- Glass-style project cards, illuminated skill panels, and dimensional hover transitions
- Scroll-aware sticky navigation with active-section states and an accessible mobile menu
- Reusable viewport reveals, reduced-motion fallbacks, and restrained hover feedback
- Fully responsive layouts from 320px phones through large desktop displays

## Project-deck interaction

Featured work is rendered from typed data in `data/projects.ts`. All five cards remain in one visible stack, led by GestureCam FX. The active card has the highest stacking order while the other cards retain small offsets, rotations, opacity changes, and scale changes. Selecting a background card moves it to the front with a restrained spring transition. Previous/Next buttons, Left/Right Arrow keys, touch input, visible focus, a numeric counter, and reduced-motion behavior are included.

## Technology stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS 4 for the styling toolchain, with the visual system in `app/globals.css` and `app/digital.css`
- Motion for React
- Lucide React icons
- Vitest, Testing Library, and jsdom
- ESLint with Next.js Core Web Vitals rules

## Local installation

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Open the local address printed by the development server.

## Production builds

The Sites-compatible build is:

```bash
pnpm build
```

The standard Next.js build used by Vercel is:

```bash
pnpm build:next
```

## Testing and quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build:next
```

The interaction suite covers the project deck, mobile navigation, contact validation, and navigation targets.

## Deployment

### Vercel

1. Push the `portfolio` directory to a Git repository.
2. Import the repository in Vercel.
3. If this directory is part of a larger repository, set the Vercel Root Directory to `portfolio`.
4. Keep the included `vercel.json`; it runs the standard Next.js production build.
5. Optionally set `NEXT_PUBLIC_SITE_URL` to the final canonical origin before deployment.
6. Deploy. No backend, secrets, or API keys are required.

### Other Next.js hosts

Use `pnpm build:next` and a host that supports the Next.js App Router. Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical, sitemap, robots, and social metadata point to the correct address.

### GitHub Pages

The included `.github/workflows/deploy-pages.yml` workflow exports the portfolio as a static site and publishes it at `https://shihabbk18.github.io/Portfolio/`. It supplies the repository base path during the build so scripts, fonts, the favicon, the Open Graph image, and the CV resolve correctly. GitHub Pages must use **GitHub Actions** as its publishing source.

## Editing content

- Identity, biography, focus areas, research, education, recognition, and navigation: `data/portfolio.ts`
- Featured projects: `data/projects.ts`
- Skill categories: `data/skills.ts`
- Layout and interactions: `components/`
- Visual tokens and responsive rules: `app/globals.css`
- SEO and structured person data: `app/layout.tsx`

The CV is a verified workspace asset copied to `public/Shihab-Bin-Kader-CV.pdf`. Replace it only with a genuine updated CV and keep the file path in `data/portfolio.ts` synchronized.

## Adding another project

1. Add a new object to the `projects` array in `data/projects.ts` and follow the exported `Project` type.
2. Add each verified repository, live experience, or publication URL to the project’s `links` array.
3. Add a supported abstract visual variant in `components/project-card.tsx` and `app/globals.css`, or deliberately reuse the closest existing variant.
4. Keep descriptions, outcomes, and claimed results evidence-based.
5. The deck counter and Previous/Next logic update from the array length automatically. If the deck grows beyond five projects, extend the physical stack states before publishing.

## Accessibility

- Semantic landmarks and a logical heading hierarchy
- Skip link and visible keyboard focus
- Accessible navigation and mobile-menu state
- Keyboard-operable project deck with an `aria-live` active state
- Programmatic form labels, validation messages, and invalid states
- Descriptive external-link labels and decorative graphics excluded from the accessibility tree
- Global and component-level `prefers-reduced-motion` support
- Text contrast designed against the dark surface palette

## Performance decisions

- No stock photographs, videos, 3D libraries, CMS, backend, or form service
- CSS-generated visual identity and a single compressed social-preview bitmap
- Local page content from typed TypeScript data
- Font loading through `next/font` with `display: swap`
- One client-side interaction layer per animated or stateful section
- No full-screen loader or route-transition delay

## License

The source code is available under the MIT License. Personal biography, research claims, CV content, and identity assets remain attributable to Shihab Bin Kader and should not be reused to impersonate or misrepresent him.
