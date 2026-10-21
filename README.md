# abhandary14.github.io

Personal website of Aakash Bhandary, built with [Astro](https://astro.build) and [GSAP](https://gsap.com), deployed to GitHub Pages at https://abhandary14.github.io.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
```

## Editing content

| What | Where |
| --- | --- |
| Name, tagline, About text, social links, service keys | `src/data/site.ts` |
| Education | `src/data/education.ts` |
| Experience | `src/data/experience.ts` |
| Featured projects (copy an entry to add one) | `src/data/projects.ts` |
| Publications | `src/data/publications.ts` |
| Skills | `src/data/skills.ts` |
| Blog posts | `src/content/blog/*.md` (see `_example-post.md`) |
| Images, resume PDF | `public/` |
| Colors and fonts | `src/styles/global.css` |
| Animations | `src/scripts/animations.ts` |

The Blog section and its nav link show up automatically once one post without `draft: true` exists.

## One-time setup

1. **GitHub Pages:** repo Settings → Pages → Source: **GitHub Actions**. Every push to `main` then builds and deploys.
2. **Contact form:** get a free access key at https://web3forms.com and set `web3formsAccessKey` in `src/data/site.ts`. Until then, the form opens the visitor's email app instead.
3. **Security settings on GitHub** (these can't live in code):
   - Turn on two-factor authentication for your GitHub account (Settings → Password and authentication). This is the single biggest protection: anyone who controls your account controls the site.
   - Repo Settings → Rules → Rulesets → New branch ruleset, target `main`, enable **Restrict deletions** and **Block force pushes**.
   - Repo Settings → Environments → `github-pages`: deployment branches limited to `main`.
   - Repo Settings → Actions → General: Workflow permissions **Read repository contents**, and untick "Allow GitHub Actions to create and approve pull requests".
   - Repo Settings → Code security: enable Dependabot alerts and security updates, plus secret scanning and push protection.
   - Web3Forms dashboard: restrict the access key to the `abhandary14.github.io` domain if your plan allows it.
4. **Visit / resume counter:** create a site at https://www.goatcounter.com and set `goatcounterCode` in `src/data/site.ts`. Resume views and downloads show up as `resume-view` and `resume-download` events.
