import { useInView } from '../../hooks/useMedia'
import { vars } from '../../utils/style'
import './ValueProp.css'

const STEPS = [
  {
    num: '01',
    title: 'Engage Partners',
    text: 'Build meaningful partner relationships and keep your brand top of mind.',
    pos: { x: 0, y: 56 },
    glyph: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="18" cy="24" r="11" />
        <circle cx="30" cy="24" r="11" />
        <circle cx="24" cy="24" r="2.5" className="fill-gold" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Activate Demand',
    text: 'Give partners the campaigns, content, and tools they need to reach the right customers.',
    pos: { x: 34, y: 30 },
    glyph: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="14" cy="24" r="4" className="fill-blue" />
        <path d="M22 16a12 12 0 0 1 0 16M27 11a19 19 0 0 1 0 26M32 6a26 26 0 0 1 0 36" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Drive Growth',
    text: 'Turn marketing activity into stronger engagement and business opportunities.',
    pos: { x: 68, y: 4 },
    glyph: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 38h32" />
        <path d="M12 38V30M20 38V24M28 38V17" />
        <path d="M34 10h6v6M40 10 30 20" className="stroke-gold" />
      </svg>
    ),
  },
]

const AUDIENCE = ['Channel marketing leaders', 'Partner marketing directors', 'Heads of alliances', 'Partner program leaders']

export function ValueProp() {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.25 })

  return (
    <section id="about" className="value" aria-labelledby="value-title">
      <div className="container">
        <div className="value__head">
          <div className="reveal">
            <p className="eyebrow">About Partner Champions</p>
            <h2 id="value-title" className="section-title value__title">
              Your partner ecosystem has potential. Let's turn it into <span className="hl">performance.</span>
            </h2>
          </div>
          <div className="value__intro reveal" style={vars({ '--delay': '120ms' })}>
            <p className="lead">
              Recruiting partners is only the beginning. Real growth happens when partners are engaged, equipped, and
              actively creating opportunities.
            </p>
            <p className="value__who">
              Partner Champions is a partner marketing services company for B2B technology companies. We bring the
              strategy and the hands-on execution.
            </p>
            <div className="value__audience">
              <span>Built for</span>
              <ul>
                {AUDIENCE.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div ref={ref} className={`ascent ${inView ? 'is-drawn' : ''}`}>
          <svg className="ascent__line" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="ascent-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#155EEF" stopOpacity=".12" />
                <stop offset="1" stopColor="#155EEF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ascent-fade-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#fff" />
                <stop offset=".75" stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <mask id="ascent-fade" maskContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="url(#ascent-fade-grad)" />
              </mask>
              <linearGradient id="ascent-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8FB4FF" />
                <stop offset=".7" stopColor="#155EEF" />
                <stop offset="1" stopColor="#D5A62B" />
              </linearGradient>
            </defs>
            <path
              className="ascent__area"
              d="M0 560 C 170 560, 190 300, 340 300 S 530 40, 680 40 S 900 15, 1000 -5 L 1000 1000 L 0 1000 Z"
              fill="url(#ascent-fill)"
              mask="url(#ascent-fade)"
            />
            <path
              className="ascent__path"
              d="M0 560 C 170 560, 190 300, 340 300 S 530 40, 680 40 S 900 15, 1000 -5"
              fill="none"
              stroke="url(#ascent-stroke)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
            />
          </svg>

          <ol className="ascent__steps">
            {STEPS.map((s, i) => (
              <li
                key={s.num}
                className="ascent__step"
                style={vars({ '--x': `${s.pos.x}%`, '--y': `${s.pos.y}%`, '--i': i })}
              >
                <span className={`ascent__dot ${i === 2 ? 'is-gold' : ''}`} aria-hidden="true" />
                <div className="ascent__glyph">{s.glyph}</div>
                <span className="ascent__num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
