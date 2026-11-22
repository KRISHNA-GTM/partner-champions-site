import { OUTCOMES } from '../../data/content'
import { useInView } from '../../hooks/useMedia'
import { vars } from '../../utils/style'
import { SectionHeading } from '../ui/SectionHeading'
import './Outcomes.css'

// Deterministic scatter for the "before" side: short strokes at assorted angles.
const SCATTER = Array.from({ length: 30 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453
  const b = Math.sin(i * 78.233) * 12543.123
  const c = Math.sin(i * 39.425) * 24634.634
  const fx = a - Math.floor(a)
  const fy = b - Math.floor(b)
  const fr = c - Math.floor(c)
  return { x: 20 + fx * 400, y: 24 + fy * 172, angle: -60 + fr * 120, len: 18 + (i % 4) * 6 }
})

const LANES = [52, 92, 132, 172]

export function Outcomes() {
  // The in-view flag lives on an inner element so React never overwrites the
  // .is-visible class that the scroll-reveal hook adds to the outer wrapper.
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.3 })

  return (
    <section id="outcomes" className="outcomes section" aria-labelledby="outcomes-title">
      <div className="container">
        <SectionHeading
          id="outcomes-title"
          eyebrow="Outcomes"
          title={
            <>
              Less scattered activity. <span className="hl">More coordinated marketing.</span>
            </>
          }
          lead="What changes when partner marketing runs as one program."
        />

        <div className="converge reveal">
          <div ref={ref} className={inView ? 'converge__inner is-on' : 'converge__inner'}>
            <svg viewBox="0 0 1200 220" className="converge__svg" role="img" aria-labelledby="converge-desc">
              <desc id="converge-desc">
                Illustration: short marketing strokes scattered in every direction on the left line up into four steady
                lanes on the right.
              </desc>
              <defs>
                <linearGradient id="lane-grad" gradientUnits="userSpaceOnUse" x1="560" y1="0" x2="1160" y2="0">
                  <stop offset="0" stopColor="#155EEF" stopOpacity=".25" />
                  <stop offset=".35" stopColor="#155EEF" />
                  <stop offset="1" stopColor="#155EEF" />
                </linearGradient>
              </defs>
              {SCATTER.map((s, i) => (
                <line
                  key={i}
                  x1={s.x}
                  y1={s.y}
                  x2={s.x + s.len}
                  y2={s.y}
                  transform={`rotate(${s.angle.toFixed(1)} ${s.x} ${s.y})`}
                  className="converge__bit"
                />
              ))}
              <line x1="520" y1="12" x2="520" y2="208" className="converge__divider" />
              {LANES.map((y, i) => (
                <g key={y} className="converge__lane" style={vars({ '--i': i })}>
                  <line x1="560" y1={y} x2="1160" y2={y} pathLength={1} />
                  {[680, 820, 960].map((x, k) => (
                    <rect
                      key={x}
                      x={x + i * 24 - 14}
                      y={y - 5}
                      width="28"
                      height="10"
                      rx="5"
                      className={k === 2 && i === 1 ? 'is-gold' : ''}
                    />
                  ))}
                  <path d={`M1152 ${y - 6} L1164 ${y} L1152 ${y + 6}`} />
                </g>
              ))}
            </svg>
            <div className="converge__labels" aria-hidden="true">
              <span>One-off activity</span>
              <span>A coordinated program</span>
            </div>
          </div>
        </div>

        <ul className="outcome-grid">
          {OUTCOMES.map((o, i) => (
            <li key={o.title} className="outcome reveal" style={vars({ '--delay': `${(i % 4) * 70}ms` })}>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
