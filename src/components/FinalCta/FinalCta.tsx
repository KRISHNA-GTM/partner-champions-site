import { BookingCta } from '../contact/BookingCta'
import { ArrowRight } from '../ui/Icons'
import './FinalCta.css'

const hexPoints = (r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2
    return `${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`
  }).join(' ')

const RINGS = [70, 140, 210, 280]

export function FinalCta() {
  return (
    <section id="contact" className="final on-dark" aria-labelledby="final-title">
      <svg className="final__art" viewBox="-300 -300 600 600" aria-hidden="true">
        {RINGS.map((r) => (
          <polygon key={r} points={hexPoints(r)} className="final__hex" />
        ))}
        <polygon points={hexPoints(34)} className="final__core" />
      </svg>

      <div className="container final__inner">
        <p className="eyebrow reveal">Start here</p>
        <h2 id="final-title" className="final__title reveal">
          Your partners are already part of your growth plan. Let's help them <span className="hl">put it into action.</span>
        </h2>
        <p className="lead reveal">
          Schedule a 30-minute consultation to walk through your partner program, identify your execution bottlenecks, and discuss ready-to-run campaigns that get your partners to market.
        </p>
        <div className="final__actions reveal">
          <BookingCta className="btn btn--primary final__btn">
            Book a Partner Marketing Consultation <ArrowRight />
          </BookingCta>
        </div>
      </div>
    </section>
  )
}
