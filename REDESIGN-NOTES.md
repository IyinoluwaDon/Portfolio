# Portfolio redesign with Arc

Accent: violet. Default theme: light. A small switch (bottom left) toggles dark, and the choice is remembered.

## Run it

The Arc components are already in `components/` (the real files from your `components.zip`), so there is nothing to install from uiarc.dev.

```
npm install
npm run dev          # http://localhost:3000
npm run build        # production check
npm run check:links  # tests every external link from your own machine
```

## Things you should know

- React is now 19 (was 18). Arc's files are typed for React 19 and `next build` fails on 18. `@types/react` and `@types/react-dom` moved to 19 as well.
- New packages: `@radix-ui/react-tabs`, `@radix-ui/react-dialog`, `motion`, `lucide-react`, `typescript`, `@types/*`.
- Fonts (Geist for headings, Inter for body) are bundled in the project and loaded through `next/font/local`. No Google Fonts request at build time. `geist` and `@fontsource-variable/inter` are only the source of those files.
- The theme switch is a floating button because Arc's header has no slot for one.
- Experience is a custom CSS timeline. Arc's Timeline is a day-grouped activity feed, so it did not fit.
- The Botpress chat scripts are unchanged in `app/layout.tsx`.
- AI-300 has no date because none was given. Add `date` in `app/data/certificates.js` when you have it.
- Arc footer sample links (Privacy, Terms, Licenses, sample socials) are removed.

## Where to edit things

- Links (resume, GitHub, LinkedIn, X, email): `app/data/links.js`
- Certificates: `app/data/certificates.js`
- Projects: `app/data/projects.js` (the `accent` field is no longer used)
- Skills, experience, principles, home focus areas: `app/data/profile.js`
- Page headlines and intros: `app/data/pages.js`
- Nav items: `app/data/nav.ts`
- Accent color: `data-accent` on `<html>` in `app/layout.tsx`
- Page layouts: `app/page.tsx` and `app/[section]/sections.tsx` with their `.module.css` files
