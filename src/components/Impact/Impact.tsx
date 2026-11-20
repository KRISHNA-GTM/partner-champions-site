import type { JSX } from 'react'
import { OUTCOMES, type OutcomeGlyph } from '../../data/content'
import { useInView, useMediaQuery, useReducedMotion } from '../../hooks/useMedia'
import { vars } from '../../utils/style'
import './Impact.css'

// Two geometries for the activity-to-impact illustration: wide (desktop) and compact (phones).
type Geometry = {
  view: [number, number]
  dots: { x: number; y: number; r: number; hot: boolean }[]
  hub: { x: number; y: number }
  curve: string
  end: { x: number; y: number }
  marks: [number, number][]
  labelSize: number
}

const scatter = (x0: number, w: number, y0: number, h: number) =>
  Array.from({ length: 64 }, (_, i) => {
    const a = Math.sin(i * 12.9898) * 43758.5453
    const b = Math.sin(i * 78.233) * 12543.123
    return {
      x: x0 + (a - Math.floor(a)) * w,
      y: y0 + (b - Math.floor(b)) * h,
      r: 2 + ((i * 7) % 5) * 0.6,
      hot: i % 9 === 0,
    }
  })

const WIDE: Geometry = {
  view: [1200, 300],
  dots: scatter(30, 430, 40, 220),
  hub: { x: 560, y: 170 },
  curve: 'M560 170 C 700 170, 760 150, 860 118 S 1060 54, 1180 40',
  end: { x: 1180, y: 40 },
  marks: [
    [725, 156],
    [860, 118],
    [1012, 72],
  ],
  labelSize: 12,
}

const COMPACT: Geometry = {
  view: [600, 380],
  dots: scatter(20, 230, 40, 290),
  hub: { x: 300, y: 200 },
  curve: 'M300 200 C 370 200, 400 180, 450 150 S 540 80, 585 56',
  end: { x: 585, y: 56 },
  marks: [
    [382, 186],
    [450, 150],
    [520, 101],
  ],
  labelSize: 17,
}

const GLYPHS: Record<OutcomeGlyph, JSX.Element> = {
  engagement: (
    <>
      <circle cx="15" cy="20" r="9" />
      <circle cx="25" cy="20" r="9" />
      <circle cx="20" cy="20" r="2.2" className="g-gold" />
    </>
  ),
  performance: (
    <>
      <path d="M6 30 14 22l6 5 13-14" />
      <path d="M27 13h6v6" className="g-blue" />
    </>
  ),
  reach: (
    <>
      <circle cx="12" cy="28" r="3" className="g-fill" />
      <path d="M12 18a10 10 0 0 1 10 10M12 11a17 17 0 0 1 17 17M12 4a24 24 0 0 1 24 24" />
    </>
  ),
  demand: (
    <>
      <path d="M6 8h28l-10 12v10l-8 4V20z" />
      <circle cx="20" cy="14" r="1.8" className="g-gold" />
    </>
  ),
  content: (
    <>
      <rect x="9" y="6" width="18" height="24" rx="2.5" />
      <path d="M13 6V4h18v24h-4" />
      <path d="M13 14h10M13 19h7" />
    </>
  ),
  execution: (
    <>
      <path d="M6 10h4M6 20h4M6 30h4" />
      <path d="M15 10h19M15 20h14M15 30h17" />
      <path d="m30 17 2.5 2.5L37 15" className="g-blue" />
    </>
  ),
}

export function Impact() {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, threshold: 0.3 })
  const reduced = useReducedMotion()
  const g = useMediaQuery('(max-width: 600px)') ? COMPACT : WIDE
  const [VW, VH] = g.view

  return (
    <section className="impact" aria-labelledby="impact-title">
      <div className="container">
        <div className="impact__head">
          <div className="reveal">
            <p className="eyebrow">Impact</p>
            <h2 id="impact-title" className="section-title">
              Engagement that creates <span className="hl">impact.</span>
            </h2>
          </div>
          <p className="lead reveal" style={vars({ '--delay': '120ms' })}>
            The right partner marketing programs connect activity to meaningful outcomes.
          </p>
        </div>

        <div ref={ref} className={`signal ${inView ? 'is-on' : ''}`}>
          <svg viewBox={`0 0 ${VW} ${VH}`} className="signal__svg" style={vars({ '--label': `${g.labelSize}px` })} role="img" aria-labelledby="signal-desc">
            <desc id="signal-desc">
              Illustration: scattered marketing activity on the left converges through partner programs into a single
              rising line on the right labelled impact.
            </desc>
            <defs>
              <linearGradient id="sig-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#155EEF" />
                <stop offset=".75" stopColor="#2878FF" />
                <stop offset="1" stopColor="#D5A62B" />
              </linearGradient>
              <linearGradient id="sig-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#155EEF" stopOpacity=".16" />
                <stop offset="1" stopColor="#155EEF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {g.dots.filter((_, i) => i % 3 === 0).map((d, i) => (
              <path
                key={`l${i}`}
                d={`M${d.x} ${d.y} Q ${(d.x + g.hub.x) / 2 + 40} ${d.y}, ${g.hub.x} ${g.hub.y}`}
                className="signal__funnel"
                style={vars({ '--i': i })}
              />
            ))}
            {g.dots.map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={d.r}
                className={`signal__dot ${d.hot ? 'is-hot' : ''}`}
                style={vars({ '--i': i })}
              />
            ))}

            <path d={`${g.curve} L${g.end.x} ${VH} L${g.hub.x} ${VH} Z`} fill="url(#sig-area)" className="signal__area" />
            <path d={g.curve} className="signal__curve" pathLength={1} />
            {g.marks.map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="5" className="signal__mark" />
            ))}
            {!reduced && (
              <circle r="6" className="signal__spark">
                <animateMotion dur="3.2s" repeatCount="indefinite" path={g.curve} />
              </circle>
            )}

            <g transform={`translate(${g.hub.x} ${g.hub.y})`} className="signal__hub">
              <circle r="26" fill="#fff" stroke="#E5EAF1" />
              <polygon points="0,-13 11.3,-6.5 11.3,6.5 0,13 -11.3,6.5 -11.3,-6.5" fill="none" stroke="#155EEF" strokeWidth="2.5" />
              <rect x="-3" y="-5" width="6" height="10" rx="1" fill="#D5A62B" />
            </g>

            <text x="24" y={VH - 8} className="signal__label">ACTIVITY</text>
            <text x={g.hub.x} y={g.hub.y + 56} textAnchor="middle" className="signal__label">PARTNER PROGRAMS</text>
            <text x={g.end.x} y={g.end.y - 20} textAnchor="end" className="signal__label signal__label--strong">IMPACT</text>
          </svg>
        </div>

        <ul className="outcomes">
          {OUTCOMES.map((o, i) => (
            <li key={o.title} className="outcome reveal" style={vars({ '--delay': `${(i % 3) * 90}ms` })}>
              <span className="outcome__glyph" aria-hidden="true">
                <svg viewBox="0 0 40 40">{GLYPHS[o.glyph]}</svg>
              </span>
              <h3>{o.title}</h3>
              <p>{o.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
