// Checks every outside link on the site and prints what works and what does not.
// Run it on your own computer (it needs normal internet access):
//   npm run check:links
import { links } from '../app/data/links.js'
import { certificates } from '../app/data/certificates.js'
import { projects } from '../app/data/projects.js'

const targets = []
const add = (label, url) => url && targets.push({ label, url })

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(links.email)) {
  throw new Error(`Email address does not look valid: ${links.email}`)
}
console.log(`OK  Email address format\n      ${links.email}`)

add('GitHub profile', links.github)
add('LinkedIn', links.linkedin)
add('X', links.x)
add('Resume', links.resume)
for (const certificate of certificates) add(`Certificate: ${certificate.name}`, certificate.url)
for (const project of projects) {
  add(`Project code: ${project.title}`, project.github)
  add(`Project demo: ${project.title}`, project.demo)
}

async function check({ label, url }) {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
      headers: { 'user-agent': 'Mozilla/5.0 (link check)' },
    })
    const landedOnLogin = /accounts\.google\.com|ServiceLogin/.test(response.url)
    // Drive sends people to a sign-in page when a file is private or missing.
    if (landedOnLogin) return { label, url, ok: false, note: 'Google asks for sign-in: the file is private or missing' }
    // LinkedIn and X often answer automated checks with 999 or 403 even for good links.
    const guarded = /linkedin\.com|x\.com/.test(url) && [403, 429, 999].includes(response.status)
    if (guarded) return { label, url, ok: true, note: `site blocks automated checks (${response.status}), open it in a browser once` }
    return { label, url, ok: response.ok, note: `HTTP ${response.status}` }
  } catch (error) {
    if (error instanceof TypeError && /\.streamlit\.app\//.test(url)) {
      return { label, url, ok: null, note: 'Streamlit did not accept the script HTTP request; verify this app in a browser' }
    }
    return { label, url, ok: false, note: error?.cause?.code || error?.name || 'request failed' }
  }
}

const results = await Promise.all(targets.map(check))

for (const result of results) {
  const status = result.ok === null ? 'MANUAL' : result.ok ? 'OK  ' : 'FAIL'
  console.log(`${status}  ${result.label}\n      ${result.url}\n      ${result.note}`)
}

const failed = results.filter((result) => result.ok === false)
const passed = results.filter((result) => result.ok === true).length
const manual = results.filter((result) => result.ok === null).length
console.log(`\n${passed} of ${results.length} links passed; ${manual} require browser verification.`)
if (failed.length) {
  console.log('Fix the FAIL lines above, then run the check again.')
  process.exitCode = 1
}
