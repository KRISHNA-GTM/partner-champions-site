import type { ReactNode } from 'react'
import { SCHEDULING_URL } from '../../config/site'
import { hasScheduler } from '../../utils/contact'
import { useContact } from './ContactContext'
import '../ui/Button.css'

type Props = {
  children: ReactNode
  className?: string
  /** When set, always opens the contact dialog pre-filled for this topic. */
  topic?: string
}

/**
 * The single CTA primitive. With SCHEDULING_URL set it links straight to the
 * booking page; with it empty it opens the contact dialog (email + mailto).
 */
export function BookingCta({ children, className = 'btn btn--primary', topic }: Props) {
  const { openContact } = useContact()

  if (hasScheduler && !topic) {
    return (
      <a className={className} href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden">(opens booking page in a new tab)</span>
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={() => openContact(topic)} aria-haspopup="dialog">
      {children}
    </button>
  )
}
