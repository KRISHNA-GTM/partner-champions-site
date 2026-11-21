import type { ReactNode } from 'react'
import { SERVICES, type ServiceIcon } from '../../data/content'
import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { ArrowRight } from '../ui/Icons'
import { SectionHeading } from '../ui/SectionHeading'
import './Services.css'

/* One simple line icon per service, each drawn from what the service produces */
const ICONS: Record<ServiceIcon, ReactNode> = {
  // playbook
  enable: (
    <>
      <path d="M5 4.5h9.5a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z" />
      <path d="M5 17a3 3 0 0 1 3-3h9.5" />
      <path d="M9 8.5h5" />
    </>
  ),
  // send / campaign
  campaign: (
    <>
      <path d="M20 4 3.5 10.5l6.5 2.5 2.5 6.5z" />
      <path d="m20 4-10 9" />
    </>
  ),
  // target
  abm: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </>
  ),
  // calendar
  event: (
    <>
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </>
  ),
  // two brands
  cobrand: (
    <>
      <rect x="3.5" y="6" width="10" height="10" rx="2" />
      <rect x="10.5" y="8" width="10" height="10" rx="2" />
    </>
  ),
  // envelope
  direct: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
}

export function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title={
            <>
              Six services. <span className="hl">Real deliverables.</span>
            </>
          }
          lead="Each one is work we plan and produce for you. Take one, or combine them into a full program."
        />

        <ul className="svc-grid">
          {SERVICES.map((s, i) => (
            <li key={s.num} className="svc reveal" style={vars({ '--delay': `${(i % 3) * 70}ms` })}>
              <span className="svc__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  {ICONS[s.icon]}
                </svg>
              </span>
              <h3>{s.title}</h3>
              <p className="svc__summary">{s.summary}</p>
              <ul className="svc__list" aria-label={`${s.title} deliverables`}>
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="svc-more reveal">
          Not sure which you need?{' '}
          <BookingCta className="text-link">
            <span>Explore how we can help</span> <ArrowRight size={16} />
          </BookingCta>
        </p>
      </div>
    </section>
  )
}
