import Link from 'next/link'
import { EmptyState } from '@/components/arc/empty-state/empty-state'
import page from './styles/page.module.css'

export default function NotFound() {
  return (
    <div className={`${page.container} ${page.section}`}>
      <EmptyState
        title="Page not found"
        description="This page does not exist or has moved. Head back home to find what you need."
        action={
          <Link href="/" className={page.textLink}>
            Go to the home page
          </Link>
        }
      />
    </div>
  )
}
