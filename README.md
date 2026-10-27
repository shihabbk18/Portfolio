# Shihab Bin Kader — Portfolio

[Live website](https://shihabbk18.github.io/portfolio-/) · [LinkedIn](https://www.linkedin.com/in/shihab-bin-kader-a30841409/) · [ResearchGate](https://www.researchgate.net/profile/Shihab-Bin-Kader-2)

A personal portfolio showcasing computer vision, explainable AI, research contributions, and practical software projects. Built with Next.js, React, TypeScript, Tailwind CSS, Motion, and React Three Fiber.

## Features

- Animated portrait, floating shapes, and responsive layouts.
- Home, About, Work, Research, and Contact pages.
- 16 project case studies, including GestureCam FX, LitWeaver AI, and Fun with Flags.
- Project search, field filters, and keyboard navigation.
- White, Black, Midnight, and Violet themes with remembered preferences.
- Orbit, an animated 3D guide that answers from the portfolio’s local knowledge base.
- Motion controls, reduced-motion support, and accessible HTML content.
- Downloadable CV and a validated contact form that opens an email draft.

## Run locally

Requires Node.js 22.13 or later and pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm exec next dev
```

Open http://localhost:3000.

```sh
pnpm test
pnpm build:next
```

## Content and structure

| Location | Purpose |
| --- | --- |
| `app/` | Routes, metadata, and styles |
| `components/clay/` | Animated portrait and home-page presentation |
| `components/robot/` | 3D guide, chat UI, and local answers |
| `components/experience/` | Shared state, colour themes, and motion controls |
| `data/portfolio.ts` | Biography, education, research, and profile links |
| `data/projects.ts` | Project content and case-study routes |
| `data/skills.ts` | Technical skills |
| `public/clay/` | Portrait and decorative assets |
| `public/Shihab-Bin-Kader-CV.pdf` | Downloadable CV |

Orbit uses local keyword matching and verified portfolio content. Chat is not sent to an external AI service. The contact form opens the visitor’s email app; it does not send or store messages.

## Deployment

GitHub Actions builds a static export and publishes it to GitHub Pages on pushes to `main`. Repository settings must use **GitHub Actions** as the Pages source.

The workflow supplies:

```text
NEXT_STATIC_EXPORT=true
NEXT_PUBLIC_BASE_PATH=/portfolio-
NEXT_PUBLIC_SITE_URL=https://shihabbk18.github.io/portfolio-
```


## License and acknowledgements

Source code is MIT licensed. The decorative assets and original visual theme derive from [Deri Kurniawan’s 3D portfolio](https://github.com/Deri-Kurniawan/3d-portfolio); its [MIT notice](public/licenses/deri-portfolio-MIT.txt) is retained. Personal content and the supplied portrait are attributable to Shihab Bin Kader.
