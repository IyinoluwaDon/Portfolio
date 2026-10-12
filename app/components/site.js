// Kept so existing imports of `links` and `Arrow` keep working.
// Header, Footer and Shell moved to Arc blocks: see site-header.tsx and site-footer.tsx.
export { links } from '../data/links'

export function Arrow() {
  return <span aria-hidden="true">↗</span>
}
