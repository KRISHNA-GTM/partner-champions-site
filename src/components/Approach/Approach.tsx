import { useEffect, useState, type KeyboardEvent } from 'react'
import { PROCESS } from '../../data/content'
import { useInView, useReducedMotion } from '../../hooks/useMedia'
import { vars } from '../../utils/style'
import './Approach.css'

const R = 200
const C = 2 * Math.PI * R
// Stage nodes sit at 12, 3, 6 and 9 o'clock.
const NODE_POS = [
  [50, 0],
  [100, 50],
  [50, 100],
  [0, 50],
] as const

export function Approach() {
  const [active, setActive] = useState(0)
  const [engaged, setEngaged] = useState(false)
  const reduced = useReducedMotion()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35 })
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    if (inView) setSeen(true)
  }, [inView])

  useEffect(() => {
    if (engaged || reduced || !inView) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % PROCESS.length), 4200)
    return () => window.clearInterval(id)
  }, [engaged, reduced, inView])

  const choose = (i: number) => {
    setEngaged(true)
    setActive(i)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    if (!(e.key in keys)) return
    e.preventDefault()
    const next = (active + keys[e.key] + PROCESS.length) % PROCESS.length
    choose(next)
    document.getElementById(`stage-tab-${next}`)?.focus()
  }

  const progress = seen ? (active + 1) / PROCESS.length : 0
  const stage = PROCESS[active]

  return (
    <section id="approach" className="approach" aria-labelledby="approach-title">
      <div className="container approach__grid">
        <div className="approach__copy">
          <div className="reveal">
            <p className="eyebrow">Our Approach</p>
            <h2 id="approach-title" className="section-title">
              From strategy to execution. Every step focused on <span className="hl">growth.</span>
            </h2>
            <p className="lead approach__lead">
              Good partner marketing isn't one campaign. It's a connected process that brings strategy, execution,
              engagement, and insights together.
            </p>
          </div>

          <div className="stages reveal" role="tablist" aria-orientation="vertical" aria-label="Our four-stage process" onKeyDown={onKeyDown}>
            {PROCESS.map((p, i) => {
              const selected = i === active
              return (
                <div key={p.num} className={`stage ${selected ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}>
                  <button
                    id={`stage-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`stage-panel-${i}`}
                    tabIndex={selected ? 0 : -1}
                    className="stage__tab"
                    onClick={() => choose(i)}
                  >
                    <span className="stage__num">{p.num}</span>
                    <span className="stage__title">{p.title}</span>
                    <span className="stage__bar" aria-hidden="true">
                      <span key={selected && !engaged ? `run-${active}` : 'static'} className={selected && !engaged && !reduced && inView ? 'is-running' : ''} />
                    </span>
                  </button>
                  <div
                    id={`stage-panel-${i}`}
                    role="tabpanel"
                    aria-labelledby={`stage-tab-${i}`}
                    className="stage__panel"
                    hidden={!selected}
                  >
                    <p>{p.description}</p>
                    <ul aria-label={`${p.title} focus areas`}>
                      {p.focus.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div ref={ref} className="cycle reveal" data-seen={seen} style={vars({ '--delay': '150ms' })}>
          <svg viewBox="-260 -260 520 520" className="cycle__svg" aria-hidden="true">
            <defs>
              <linearGradient id="cycle-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#155EEF" />
                <stop offset="1" stopColor="#2878FF" />
              </linearGradient>
            </defs>
            <circle r="248" className="cycle__halo" />
            <circle r={R + 26} className="cycle__tick-ring" />
            <circle r={R} className="cycle__track" />
            <circle
              r={R}
              className="cycle__progress"
              transform="rotate(-90)"
              style={{ strokeDasharray: C, strokeDashoffset: C * (1 - progress) }}
            />
            <circle r={R - 46} className="cycle__inner" />
            <g className="cycle__orbit">
              <circle cx="0" cy={-(R + 26)} r="4" fill="#D5A62B" />
            </g>
            {/* Return arrow: Optimize feeds back into Discover */}
            <path d="M -150 -150 A 212 212 0 0 1 -40 -208" className="cycle__return" markerEnd="url(#cycle-arrow)" />
            <marker id="cycle-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="#D5A62B" />
            </marker>
          </svg>

          {PROCESS.map((p, i) => (
            <button
              key={p.num}
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className={`cycle__node ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
              style={vars({ '--x': `${NODE_POS[i][0]}%`, '--y': `${NODE_POS[i][1]}%` })}
              onClick={() => choose(i)}
            >
              <span>{p.num}</span>
              <em>{p.title}</em>
            </button>
          ))}

          <div className="cycle__center" aria-hidden="true">
            <span className="cycle__big" key={stage.num}>
              {stage.num}
            </span>
            <span className="cycle__name" key={stage.title}>
              {stage.title}
            </span>
            <span className="cycle__of">Stage {active + 1} of 4</span>
          </div>
        </div>
      </div>
    </section>
  )
}
