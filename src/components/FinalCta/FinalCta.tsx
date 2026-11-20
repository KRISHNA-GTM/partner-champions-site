import { BookingCta } from '../contact/BookingCta'
import { CopyEmail } from '../contact/CopyEmail'
import { ArrowRight } from '../ui/Icons'
import './FinalCta.css'

const hexPoints = (r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2
    return `${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`
  }).join(' ')

const RINGS = [70, 130, 190, 250, 310]

export function FinalCta() {
  return (
    <section id="contact" className="final on-dark" aria-labelledby="final-title">
      <svg className="final__art" viewBox="-340 -340 680 680" aria-hidden="true">
        {RINGS.map((r, i) => (
          <polygon key={r} points={hexPoints(r)} className="final__hex" style={{ animationDelay: `${i * 0.5}s` }} />
        ))}
        {RINGS.slice(1).flatMap((r, ri) =>
          Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i - Math.PI / 2
            const x = Math.cos(a) * r
            const y = Math.sin(a) * r
            const gold = ri === 2 && i === 1
            return (
              <g key={`${r}-${i}`}>
                <line x1="0" y1="0" x2={x} y2={y} className="final__spoke" />
                <circle cx={x} cy={y} r={gold ? 6 : 4} className={gold ? 'final__node final__node--gold' : 'final__node'} />
              </g>
            )
          }),
        )}
        <polygon points={hexPoints(34)} className="final__core" />
      </svg>

      <div className="container final__inner">
        <p className="eyebrow reveal">Let's talk</p>
        <h2 id="final-title" className="final__title reveal">
          Your partners can do more. <span className="hl">Let's make it happen.</span>
        </h2>
        <p className="lead reveal">
          Let's build a partner marketing strategy that brings the right people, programs, and opportunities together.
        </p>
        <div className="final__actions reveal">
          <BookingCta className="btn btn--primary final__btn">
            Let's Start a Conversation <ArrowRight />
          </BookingCta>
          <div className="final__email">
            <span>Or write to us</span>
            <CopyEmail tone="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
