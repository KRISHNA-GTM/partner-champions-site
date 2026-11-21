import { mailtoHref } from '../../utils/contact'
import { BookingCta } from '../contact/BookingCta'
import { CopyEmail } from '../contact/CopyEmail'
import { ArrowRight } from '../ui/Icons'
import './FinalCta.css'

const hexPoints = (r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2
    return `${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`
  }).join(' ')

const RINGS = [70, 140, 210, 280]

const FIRST_CALL = [
  'Where your partner program stands today',
  'Which partners and accounts matter most',
  'What we would build first, and why',
]

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
        <div className="final__main">
          <p className="eyebrow reveal">Start here</p>
          <h2 id="final-title" className="final__title reveal">
            Let's build your partner marketing <span className="hl">program.</span>
          </h2>
          <p className="lead reveal">
            A short conversation about your partners, your goals and where marketing can help most.
          </p>
          <div className="final__actions reveal">
            <BookingCta className="btn btn--primary final__btn">
              Let's Talk About Your Partner Marketing <ArrowRight />
            </BookingCta>
            <a href={mailtoHref()} className="btn btn--ghost-dark final__btn">
              Email Us
            </a>
          </div>
        </div>

        <div className="final__side reveal">
          <p className="final__side-label">What we cover on the first call</p>
          <ol>
            {FIRST_CALL.map((item, i) => (
              <li key={item}>
                <span>0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <div className="final__email">
            <span>Prefer email?</span>
            <CopyEmail tone="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
