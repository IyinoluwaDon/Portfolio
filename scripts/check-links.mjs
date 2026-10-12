// Checks every outside link on the site and prints what works and what does not.
// Run it on your own computer (it needs normal internet access):
//   npm run check:links
import { links } from '../app/data/links.js'
import { certificates } from '../app/data/certificates.js'
import { projects } from '../app/data/projects.js'

const targets = []
const add = (label, url) => url && targets.push({ label, url })

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
    return { label, url, ok: false, note: error?.cause?.code || error?.name || 'request failed' }
  }
}

const results = []
for (const target of targets) results.push(await check(target))

for (const result of results) {
  console.log(`${result.ok ? 'OK  ' : 'FAIL'}  ${result.label}\n      ${result.url}\n      ${result.note}`)
}

const failed = results.filter((result) => !result.ok)
console.log(`\n${results.length - failed.length} of ${results.length} links look fine.`)
if (failed.length) {
  console.log('Fix the FAIL lines above, then run the check again.')
  process.exitCode = 1
}
