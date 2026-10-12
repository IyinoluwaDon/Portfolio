import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMeta } from '../data/pages'
import { PageIntro } from '../components/page-intro'
import { AboutPage, ContactPage, CredentialsPage, ExperiencePage, SkillsPage, WorkPage } from './sections'

type Section = keyof typeof pageMeta
type Params = Promise<{ section: string }>

const isSection = (value: string): value is Section => Object.prototype.hasOwnProperty.call(pageMeta, value)

export function generateStaticParams() {
  return Object.keys(pageMeta).map((section) => ({ section }))
}

// Each page gets its own title and canonical URL. Before, every page named the home page as canonical.
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { section } = await params
  if (!isSection(section)) return {}
  const [name, title, description] = pageMeta[section]
  return {
    title: name,
    description,
    alternates: { canonical: `/${section}` },
    openGraph: { title: `${name} | Iyinoluwa Don-Taiwo`, description: title, url: `/${section}` },
  }
}

const content: Record<Section, () => React.JSX.Element> = {
  about: AboutPage,
  skills: SkillsPage,
  work: WorkPage,
  experience: ExperiencePage,
  credentials: CredentialsPage,
  contact: ContactPage,
}

export default async function SectionPage({ params }: { params: Params }) {
  const { section } = await params
  if (!isSection(section)) notFound()
  const [, title, description] = pageMeta[section]
  const Content = content[section]
  return (
    <>
      <PageIntro title={title} description={description} />
      <Content />
    </>
  )
}
