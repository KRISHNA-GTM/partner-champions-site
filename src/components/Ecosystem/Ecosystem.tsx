import { useCallback, useEffect, useMemo, useState } from 'react'
import { ECO_EDGES, ECO_NODES, type EcoNodeId } from '../../data/content'
import { useInView, useMediaQuery, useReducedMotion } from '../../hooks/useMedia'
import { vars } from '../../utils/style'
import logoMark from '../../assets/logo-mark.png'
import './Ecosystem.css'

const VIEW_W = 1000
const VIEW_H = { desktop: 560, mobile: 1500 }
const CYCLE: EcoNodeId[] = ['hub', 'partners', 'programs', 'campaigns', 'customers', 'growth', 'brand']

const GLYPHS: Record<EcoNodeId, string> = {
  brand: 'M12 3 20 7.5v9L12 21l-8-4.5v-9zM4 7.5 12 12l8-4.5M12 12v9',
  hub: 'M12 2.5 20.5 7.3v9.4L12 21.5l-8.5-4.8V7.3z',
  partners: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5M12 20c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5',
  programs: 'M12 3 21 8l-9 5-9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5',
  campaigns: 'M4 10v4h3l7 4V6L7 10zM17 9.5a4 4 0 0 1 0 5M19.5 7a8 8 0 0 1 0 10',
  customers: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01',
  growth: 'M3 17l6-6 4 4 8-8M15 7h6v6',
}

type Layout = 'desktop' | 'mobile'

function edgePath(a: [number, number], b: [number, number], layout: Layout, loop = false) {
  const H = VIEW_H[layout]
  const x1 = (a[0] / 100) * VIEW_W
  const y1 = (a[1] / 100) * H
  const x2 = (b[0] / 100) * VIEW_W
  const y2 = (b[1] / 100) * H

  if (loop) {
    // Feedback loop: growth insight returns to the brand, routed around the diagram.
    return layout === 'desktop'
      ? `M${x1} ${y1 + 34} C ${x1} ${H + 40}, ${x2} ${H + 40}, ${x2} ${y2 + 34}`
      : `M${x1 + 250} ${y1} C ${VIEW_W - 20} ${y1}, ${VIEW_W - 20} ${y2}, ${x2 + 240} ${y2}`
  }
  if (layout === 'desktop') {
    if (Math.abs(x2 - x1) < 1) {
      // Same column: bow the link out to the side so it reads as a connection, not a rule.
      return `M${x1 + 60} ${y1} C ${x1 + 150} ${y1}, ${x2 + 150} ${y2}, ${x2 + 60} ${y2}`
    }
    const dx = Math.abs(x2 - x1) * 0.5
    return `M${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
  }
  const dy = Math.abs(y2 - y1) * 0.5
  return `M${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`
}

export function Ecosystem() {
  const [active, setActive] = useState<EcoNodeId>('hub')
  const [engaged, setEngaged] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1100px)')
  const reduced = useReducedMotion()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const layout: Layout = isMobile ? 'mobile' : 'desktop'

  // Gentle auto-tour until the visitor interacts.
  useEffect(() => {
    if (engaged || reduced || !inView) return
    const id = window.setInterval(() => {
      setActive((cur) => CYCLE[(CYCLE.indexOf(cur) + 1) % CYCLE.length])
    }, 3600)
    return () => window.clearInterval(id)
  }, [engaged, reduced, inView])

  const select = useCallback((id: EcoNodeId) => {
    setEngaged(true)
    setActive(id)
  }, [])

  const nodeById = useMemo(() => Object.fromEntries(ECO_NODES.map((n) => [n.id, n])), [])

  const edges = useMemo(
    () =>
      ECO_EDGES.map((e) => ({
        ...e,
        key: `${e.from}-${e.to}`,
        d: edgePath(nodeById[e.from].pos[layout], nodeById[e.to].pos[layout], layout, e.loop),
      })),
    [layout, nodeById],
  )

  const connected = useMemo(() => {
    const set = new Set<EcoNodeId>([active])
    ECO_EDGES.forEach((e) => {
      if (e.from === active) set.add(e.to)
      if (e.to === active) set.add(e.from)
    })
    return set
  }, [active])

  const current = nodeById[active]
  const links = ECO_NODES.filter((n) => n.id !== active && connected.has(n.id))

  return (
    <section className="eco on-dark" aria-labelledby="eco-title">
      <div className="container">
        <header className="eco__head">
          <div className="reveal">
            <p className="eyebrow">The Partner Ecosystem</p>
            <h2 id="eco-title" className="section-title">
              Better-connected partners. Stronger marketing. <span className="hl">Greater impact.</span>
            </h2>
          </div>
          <p className="lead reveal" style={vars({ '--delay': '120ms' })}>
            Partner growth doesn't happen in isolation. We bring strategy, partners, marketing programs, content, and
            customer engagement together to create a connected growth engine.
          </p>
        </header>

        <div ref={ref} className="eco__stage reveal" data-layout={layout}>
          <p className="eco__hint" aria-hidden="true">
            <span className="eco__hint-dot" /> {isMobile ? 'Tap' : 'Hover or select'} a stage to see how it connects
          </p>

          <div className="eco__diagram" style={vars({ '--ratio': `${VIEW_W} / ${VIEW_H[layout]}` })}>
            <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H[layout]}`} className="eco__edges" aria-hidden="true">
              <defs>
                <linearGradient id="eco-hot" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#2878FF" />
                  <stop offset="1" stopColor="#8FB4FF" />
                </linearGradient>
              </defs>
              {edges.map((e) => {
                const hot = e.from === active || e.to === active
                return (
                  <g key={e.key} className={`eco-edge ${hot ? 'is-hot' : ''} ${e.loop ? 'is-loop' : ''}`}>
                    <path d={e.d} className="eco-edge__base" />
                    <path d={e.d} className="eco-edge__flow" />
                    {hot && !reduced && (
                      <circle r="4.5" className="eco-edge__spark">
                        <animateMotion dur={e.loop ? '3.6s' : '2.2s'} repeatCount="indefinite" path={e.d} />
                      </circle>
                    )}
                  </g>
                )
              })}
            </svg>

            {ECO_NODES.map((n) => {
              const [x, y] = n.pos[layout]
              const state = n.id === active ? 'is-active' : connected.has(n.id) ? 'is-linked' : 'is-dim'
              return (
                <button
                  key={n.id}
                  type="button"
                  className={`eco-node eco-node--${n.id} ${state}`}
                  style={vars({ '--x': `${x}%`, '--y': `${y}%` })}
                  aria-pressed={n.id === active}
                  aria-controls="eco-detail"
                  onMouseEnter={() => select(n.id)}
                  onFocus={() => select(n.id)}
                  onClick={() => select(n.id)}
                >
                  <span className="eco-node__icon" aria-hidden="true">
                    {n.id === 'hub' ? (
                      <img src={logoMark} alt="" width={180} height={192} />
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <path d={GLYPHS[n.id]} />
                      </svg>
                    )}
                  </span>
                  <span className="eco-node__label">{n.label}</span>
                </button>
              )
            })}
          </div>

          <div id="eco-detail" className="eco__detail" aria-live="polite">
            <div className="eco__detail-main" key={active}>
              <p className="eco__role">{current.role}</p>
              <h3>{current.label}</h3>
              <p>{current.description}</p>
            </div>
            <div className="eco__links">
              <span>Connects to</span>
              <ul>
                {links.map((l) => (
                  <li key={l.id}>
                    <button type="button" onClick={() => select(l.id)}>
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
