# Iyinoluwa Don-Taiwo Portfolio

A Next.js portfolio for machine-learning, data-science, geospatial, and application projects. The site presents an eight-project animated work deck, project context and evaluation details, and a downloadable selected-work presentation.

`app/data/projects.js` contains project descriptions and links; `app/data/profile.js` and
`app/data/links.js` contain profile and contact content. `app/components/work-deck.tsx`
and its styles implement the project deck. `public/decks/` contains the PDF and
editable PowerPoint; `scripts/build_project_deck.py` rebuilds the PowerPoint from
its source data.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Use `npm run build` for the production build and `npm run check:links` to review external links. The project summaries link to their source repositories and describe each model, dataset, and evaluation context.
