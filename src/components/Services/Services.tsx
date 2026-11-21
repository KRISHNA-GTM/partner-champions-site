import { SERVICES } from '../../data/content'
import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { ArrowRight } from '../ui/Icons'
import { SectionHeading } from '../ui/SectionHeading'
import './Services.css'

export function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          layout="split"
          title={
            <>
              Six services. <span className="hl">Real deliverables.</span>
            </>
          }
          lead="Each service is something we plan and produce for you, not advice you still have to act on. Take one, or combine them into a full partner program."
        />

        <ul className="svc-grid">
          {SERVICES.map((s, i) => (
            <li key={s.num} className="svc reveal" style={vars({ '--delay': `${(i % 3) * 80}ms` })}>
              <article aria-labelledby={`svc-${s.num}`}>
                <div className="svc__top">
                  <span className="svc__num" aria-hidden="true">
                    {s.num}
                  </span>
                  <h3 id={`svc-${s.num}`}>{s.title}</h3>
                </div>
                <p className="svc__summary">{s.summary}</p>
                <p className="svc__label">What we deliver</p>
                <ul className="svc__list">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <div className="svc-cta reveal">
          <p>
            <strong>Not sure which of these you need?</strong> That is what the first conversation is for.
          </p>
          <BookingCta className="btn btn--ghost-light">
            Explore How We Can Help <ArrowRight />
          </BookingCta>
        </div>
      </div>
    </section>
  )
}
