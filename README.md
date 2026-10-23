# Iyinoluwa Don-Taiwo — Portfolio

A personal portfolio for selected work in machine learning, geospatial analysis, and software. Each project entry links to public source code and summarizes the method, available evidence, and known limits.

## Featured work

- **ACL Tear Detection** — MRI classification research demo; not a medical device.
- **Product Listing Consistency** — multimodal image and text mismatch experiment.
- **Sentinel-2 Water Mapping** — spatially evaluated water-index workflow.
- **African Folktale Language Model** — Gemma 2 fine-tuning capstone using synthetic stories.
- **Omo Forest NDVI Forecasting** — Sentinel-2 time-series and LSTM evaluation.
- **Shebamiles Employee Management System** — PHP and MySQL web application.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Build the production site with:

```sh
npm run build
npm run start
```

Check public project, profile, resume, and certificate links with:

```sh
npm run check:links
```

Some services block automated requests. The checker reports those cases so they can be opened in a browser manually.

## Project structure

- `app/` — routes, shared page sections, copy, and project data.
- `app/data/` — editable project, profile, navigation, certificate, and link content.
- `components/arc/` — the UI Arc React components used by the site, checked into the repository.
- `public/` — portrait, site icon, and social preview image.
- `.github/workflows/ci.yml` — install and production-build check for pushes and pull requests.

## Deployment

The site is a standard Next.js application and can be deployed to Vercel or another host that supports Next.js. Set the production URL in `app/layout.tsx` metadata before deployment. No deployment is run by this repository's CI workflow.

## Content and evidence

Project claims are deliberately qualified where a repository does not reproduce the result or use real-world validation. The Omo Forest dashboard uses illustrative values; its separate notebook contains the extraction, training, and evaluation workflow. The ACL demo is a research prototype and is not for diagnosis. Review the linked project repositories for data and model terms before reuse.

The site uses a locally bundled UI Arc component library in `components/arc/`; no runtime Arc service or MCP connection is required to run the portfolio.
