import { CONTACT_EMAIL } from '../../config/site'
import { mailtoHref } from '../../utils/contact'
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
          Let's build your partner marketing <span className="hl">program.</span>
        </h2>
        <p className="lead reveal">Tell us about your partners and goals. We'll show you where we would start.</p>
        <div className="final__actions reveal">
          <BookingCta className="btn btn--primary final__btn">
            Let's Talk About Your Partner Marketing <ArrowRight />
          </BookingCta>
        </div>
        <p className="final__email reveal">
          Or write to <a href={mailtoHref()}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  )
}
