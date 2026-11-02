# inspirilab.com

The company website of **Inspirilab Sdn. Bhd.**, a Malaysian technology consultancy and product studio based in Cyberjaya. It presents the company's consulting, its service lines (SaaS & AI, websites, blockchain & decentralised AI, partner projects) and selected work.

- Live site: https://inspirilab.com
- Hosting: [Cloudflare Pages](https://pages.cloudflare.com/) (project `inspirilab-com`), connected to this GitHub repository
- Framework: [Nuxt 3](https://nuxt.com) with Vue 3, Tailwind CSS v4 via [Nuxt UI](https://ui.nuxt.com)

## How deployment works

Cloudflare Pages builds and deploys the site automatically from GitHub:

- **Production:** every merge into `main` is built and published to https://inspirilab.com.
- **Previews:** every other branch and pull request gets its own preview, at `https://<branch-name>.inspirilab-com.pages.dev`. The link also appears as the "Cloudflare Pages" check on the pull request.

The build settings (build command, output folder, environment variables) and the custom domain are managed in the Cloudflare dashboard, not in this repository. Nuxt detects Cloudflare Pages during the build and outputs a version that runs there, so no deployment config is needed in the code.

To change the live site: create a branch, open a pull request, check the preview link, then merge into `main`.

## Editing content

Most text lives in one file, `data/site.ts`: services, projects, team, consulting offerings, contact details and links. Edit copy there rather than in the page templates.

- Project logos go in `public/logos/` and are referenced from `data/site.ts`.
- `PRODUCT.md` describes who the site is for and what it should achieve; `DESIGN.md` describes the visual system (the transit-map design, colours, type and motion).

## Project structure

```
pages/        one file per page (home, services, consulting, work, contact)
components/   route map, project cards, team line, page header, call-to-action banner
data/site.ts  site content
assets/css/   global styles and design tokens
plugins/      scroll-reveal directive
app/          router options (scroll behaviour)
public/       logos, favicons and other static files
```

## Local development

Requires Node.js 20 or newer.

```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
npm run preview   # preview the production build locally
npm run generate  # optional: fully static build into .output/public
```

See the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) and the [Cloudflare Pages Nuxt guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/) for more detail.
