# Shihab Bin Kader — Portfolio

AI research, computer vision, and software projects by Shihab Bin Kader, a Computer Science and Engineering graduate based in Chattogram, Bangladesh.

**[View live portfolio](https://shihabbk18.github.io/Portfolio/)** · [LinkedIn](https://www.linkedin.com/in/shihab-bin-kader-a30841409/) · [ResearchGate](https://www.researchgate.net/profile/Shihab-Bin-Kader-2)

## Highlights

- Interactive lamp entrance and animated portrait.
- Home, About, Work, Research, and Contact pages with 16 project case studies.
- Searchable project gallery, category filters, and keyboard navigation.
- Midnight blue by default, with Black, White, and Violet themes.
- Shihab Bot: an expressive companion with automatic activities, project Q&A, and progressively typed replies.
- Responsive layouts, reduced-motion support, downloadable CV, and email contact form.

## Stack

Next.js · React · TypeScript · Tailwind CSS · Motion · Vitest

Statically exported and deployed to GitHub Pages through GitHub Actions.

## Local development

Requires **Node.js 22.13+** and **pnpm 10**.

```sh
git clone https://github.com/shihabbk18/Portfolio.git
cd Portfolio
pnpm install --frozen-lockfile
pnpm exec next dev
```

Open [localhost:3000](http://localhost:3000).

```sh
pnpm test          # Run tests
pnpm typecheck     # Check TypeScript
pnpm build:next    # Build with Next.js
```

## Content

| Path | Purpose |
| --- | --- |
| `app/` | Pages, metadata, and styles |
| `data/` | Profile, projects, research, skills, and themes |
| `components/experience/` | Lamp entrance, navigation state, and motion controls |
| `components/robot/` | Bot activities, chat interface, and answer matching |
| `public/` | Portraits, mascot sprites, CV, and decorative assets |
| `tests/` | Component and behaviour tests |

The bot answers from a local knowledge base; no chat is sent to an external AI service. The contact form opens an email draft in the visitor’s email app.

## Deployment

Pushes to `main` trigger [the deployment workflow](.github/workflows/deploy-pages.yml). It builds the static site into `out/` using the `/Portfolio` base path and publishes it to GitHub Pages. The repository’s Pages source should be set to **GitHub Actions**.

## Credits & license

Source code is available under the [MIT License](LICENSE). The original visual theme and decorative assets are adapted from [Deri Kurniawan’s 3D portfolio](https://github.com/Deri-Kurniawan/3d-portfolio), with its [MIT notice](public/licenses/deri-portfolio-MIT.txt) retained. Personal content and portraits belong to Shihab Bin Kader.
