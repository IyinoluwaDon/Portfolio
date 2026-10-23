# Iyinoluwa Don-Taiwo

Portfolio for a machine learning engineer and data scientist. The site groups six projects across computer vision, multimodal learning, geospatial analysis, language models and application development. Visitors can browse an animated project deck, inspect the evidence and limitations for each project, and download the selected-work presentation.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Check the production build and external links with:

```sh
npm run build
npm run check:links
```

## Update the portfolio

- `app/data/projects.js` contains project descriptions, evidence, limitations, categories and public links.
- `app/data/profile.js` contains experience and skills.
- `app/data/links.js` contains contact, resume and profile links.
- `app/components/work-deck.tsx` and its CSS contain the project slides and diagrams.
- `public/decks/` contains the downloadable PDF and editable PowerPoint.

The PowerPoint source can be rebuilt with Python and `python-pptx`:

```sh
python -m pip install -r requirements-deck.txt
python scripts/build_project_deck.py
```

Export the regenerated PowerPoint as PDF to refresh the PDF download.

## Project evidence

Project results are described alongside their dataset, evaluation context and known limits. The MRI model is a research prototype, not a diagnostic tool. Product-listing mismatch labels come from deliberately swapped images and do not represent general moderation. The Omo Forest dashboard contains illustrative values; the linked notebook is the source for the separate model evaluation. The Sentinel-2 preview uses generated data and does not establish real-world map accuracy. The employee system's live MySQL setup has not been tested in this workspace.

The site uses the UI Arc components checked into `components/` and keeps the Botpress webchat scripts in the shared layout. The app can be deployed to Vercel or another host that supports Next.js. Set the production URL in `app/layout.tsx` before deployment.
