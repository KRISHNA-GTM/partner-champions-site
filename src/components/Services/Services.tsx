import type { ReactNode } from 'react'
import { SERVICES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import './Services.css'

/* Small drawings of what each service actually produces. Blue square = your brand, gold circle = partner. */
const ART: Record<string, ReactNode> = {
  campaigns: (
    <svg viewBox="0 0 240 140" aria-hidden="true">
      <g className="sv-card" transform="translate(28 34) rotate(-8)">
        <rect width="86" height="76" rx="8" />
        <rect className="sv-blue" x="10" y="12" width="66" height="22" rx="4" />
        <rect className="sv-line" x="10" y="44" width="54" height="5" rx="2.5" />
        <rect className="sv-line" x="10" y="55" width="40" height="5" rx="2.5" />
      </g>
      <g className="sv-card" transform="translate(132 30) rotate(7)">
        <rect width="80" height="84" rx="8" />
        <circle className="sv-gold-o" cx="16" cy="16" r="6" />
        <rect className="sv-line" x="28" y="13" width="34" height="5" rx="2.5" />
        <rect className="sv-soft" x="10" y="32" width="60" height="30" rx="4" />
        <rect className="sv-line" x="10" y="70" width="44" height="5" rx="2.5" />
      </g>
      <g className="sv-card sv-front" transform="translate(76 22)">
        <rect width="92" height="100" rx="8" />
        <rect className="sv-bar" width="92" height="14" rx="8" />
        <rect className="sv-navy" x="10" y="26" width="58" height="8" rx="3" />
        <rect className="sv-line" x="10" y="42" width="72" height="5" rx="2.5" />
        <rect className="sv-line" x="10" y="52" width="60" height="5" rx="2.5" />
        <rect className="sv-blue" x="10" y="70" width="40" height="14" rx="7" />
      </g>
    </svg>
  ),
  comarketing: (
    <svg viewBox="0 0 240 140" aria-hidden="true">
      <rect className="sv-blue-o" x="34" y="36" width="64" height="64" rx="14" />
      <circle className="sv-gold-o2" cx="104" cy="68" r="34" />
      <path className="sv-arrow" d="M150 68h30m-8-8 8 8-8 8" />
      {[0, 1, 2].map((r) =>
        [0, 1].map((c) => <circle key={`${r}${c}`} className="sv-buyer" cx={196 + c * 18} cy={46 + r * 22} r="6" />),
      )}
    </svg>
  ),
  enablement: (
    <svg viewBox="0 0 240 140" aria-hidden="true">
      <g className="sv-card sv-front" transform="translate(62 14)">
        <rect width="116" height="112" rx="8" />
        <rect className="sv-navy-fill" width="116" height="22" rx="8" />
        <rect className="sv-navy-fill" y="12" width="116" height="10" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(12 ${34 + i * 26})`}>
            <rect className={i === 2 ? 'sv-gold-fill' : 'sv-blue'} width="3" height="18" rx="1.5" />
            <rect className="sv-navy" x="10" y="1" width={i === 1 ? 46 : 36} height="6" rx="3" />
            <rect className="sv-line" x="10" y="12" width={i === 2 ? 64 : 80} height="5" rx="2.5" />
          </g>
        ))}
      </g>
    </svg>
  ),
}

export function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" title={SERVICES.headline} />

        <ul className="pillars">
          {SERVICES.items.map((item) => (
            <li key={item.key} className="pillar">
              <div className="pillar__art">{ART[item.key]}</div>
              <h3>{item.title}</h3>
              <p className="pillar__summary">{item.summary}</p>
              <p className="pillar__tags">{item.tags}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
