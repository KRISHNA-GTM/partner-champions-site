import type { JSX } from 'react'
import type { ServiceVisual } from '../../data/content'

/** One custom illustration per service. All decorative; card text carries the meaning. */

const Line = ({ x, y, w, o = 1 }: { x: number; y: number; w: number; o?: number }) => (
  <rect x={x} y={y} width={w} height="5" rx="2.5" fill="currentColor" opacity={o} />
)

function Enablement() {
  return (
    <svg viewBox="0 0 560 330" className="sv sv-enable" aria-hidden="true">
      <defs>
        <linearGradient id="en-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A3A6E" />
          <stop offset="1" stopColor="#102C59" />
        </linearGradient>
      </defs>
      <circle cx="280" cy="180" r="150" fill="none" stroke="#2878FF" strokeOpacity=".18" strokeDasharray="2 7" className="sv-spin" />
      <circle cx="280" cy="180" r="98" fill="none" stroke="#2878FF" strokeOpacity=".12" />

      {/* Battlecard (left) */}
      <g className="sv-doc sv-doc--left">
        <rect x="70" y="80" width="170" height="214" rx="12" fill="url(#en-card)" stroke="#2878FF" strokeOpacity=".35" />
        <text x="88" y="110" className="sv-label">BATTLECARD</text>
        <g color="#8FB4FF">
          <Line x={88} y={128} w={60} o={0.7} />
          <Line x={160} y={128} w={60} o={0.7} />
        </g>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle cx="96" cy={156 + i * 28} r="7" fill="#155EEF" />
            <path d={`M92 ${156 + i * 28}l3 3 5-6`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <rect x="110" y={153 + i * 28} width={i % 2 ? 44 : 34} height="5" rx="2.5" fill="#B4C2DA" opacity=".55" />
            <circle cx="170" cy={156 + i * 28} r="7" fill="none" stroke="#B4C2DA" strokeOpacity=".5" />
            <rect x="184" y={153 + i * 28} width={i % 2 ? 30 : 40} height="5" rx="2.5" fill="#B4C2DA" opacity=".3" />
          </g>
        ))}
      </g>

      {/* Pitch deck (right) */}
      <g className="sv-doc sv-doc--right">
        <rect x="320" y="70" width="190" height="140" rx="12" fill="url(#en-card)" stroke="#2878FF" strokeOpacity=".35" />
        <text x="338" y="98" className="sv-label">PITCH DECK</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={340 + i * 30} y={180 - (i + 1) * 13} width="18" height={(i + 1) * 13} rx="3" fill={i === 4 ? '#D5A62B' : '#2878FF'} opacity={0.45 + i * 0.12} />
        ))}
        <rect x="320" y="222" width="190" height="10" rx="5" fill="#2878FF" opacity=".18" />
        <rect x="320" y="238" width="130" height="10" rx="5" fill="#2878FF" opacity=".12" />
      </g>

      {/* Playbook (front) */}
      <g className="sv-doc sv-doc--front">
        <rect x="190" y="40" width="180" height="250" rx="14" fill="#FFFFFF" />
        <rect x="190" y="40" width="180" height="62" rx="14" fill="#155EEF" />
        <rect x="190" y="88" width="180" height="14" fill="#155EEF" />
        <rect x="208" y="58" width="10" height="26" rx="2" fill="#D5A62B" />
        <text x="226" y="70" className="sv-label sv-label--light">PARTNER</text>
        <text x="226" y="86" className="sv-title-light">Playbook</text>
        <g color="#172B4D">
          <Line x={210} y={124} w={120} o={0.85} />
          <Line x={210} y={138} w={140} o={0.25} />
          <Line x={210} y={150} w={110} o={0.25} />
        </g>
        <rect x="210" y="170" width="140" height="44" rx="8" fill="#F5F7FA" stroke="#E5EAF1" />
        <text x="222" y="190" className="sv-mini">Messaging</text>
        <rect x="222" y="198" width="80" height="4" rx="2" fill="#155EEF" opacity=".5" />
        <g color="#172B4D">
          <Line x={210} y={232} w={130} o={0.25} />
          <Line x={210} y={244} w={96} o={0.25} />
          <Line x={210} y={256} w={118} o={0.25} />
        </g>
      </g>
    </svg>
  )
}

function Campaigns() {
  const touches = [
    { x: 50, label: 'Email' },
    { x: 170, label: 'Social' },
    { x: 290, label: 'Webinar' },
    { x: 410, label: 'Follow-up' },
  ]
  return (
    <svg viewBox="0 0 470 200" className="sv sv-campaign" aria-hidden="true">
      {/* Wave of campaign bursts */}
      {Array.from({ length: 26 }).map((_, i) => {
        const h = 14 + Math.abs(Math.sin(i * 0.55)) * 42 + (i > 16 ? (i - 16) * 3.5 : 0)
        return <rect key={i} className="sv-bar" style={{ animationDelay: `${i * 40}ms` }} x={24 + i * 16.5} y={92 - h} width="8" height={h} rx="4" fill={i === 22 ? '#D5A62B' : '#155EEF'} opacity={0.15 + (i / 26) * 0.5} />
      })}
      <path d="M50 140 C 110 140, 110 140, 170 140 S 230 140, 290 140 S 350 140, 410 140" stroke="#D3DBE7" strokeWidth="2" fill="none" />
      <path className="sv-track" d="M50 140 C 110 140, 110 140, 170 140 S 230 140, 290 140 S 350 140, 410 140" stroke="#155EEF" strokeWidth="2.5" fill="none" pathLength={1} />
      {touches.map((t, i) => (
        <g key={t.label} className="sv-touch" style={{ transitionDelay: `${i * 120}ms` }}>
          <circle cx={t.x} cy="140" r="11" fill="#fff" stroke="#155EEF" strokeWidth="2.5" />
          <circle cx={t.x} cy="140" r="4" fill={i === 3 ? '#D5A62B' : '#155EEF'} />
          <text x={t.x} y="176" textAnchor="middle" className="sv-mini sv-mini--ink">
            {t.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

function Abm() {
  const accounts = [
    [40, -60, true],
    [-72, -18, false],
    [64, 48, true],
    [-30, 74, false],
    [-58, -78, false],
    [92, -8, false],
    [8, -96, false],
    [-96, 40, false],
    [24, 30, true],
  ] as const
  return (
    <svg viewBox="-130 -130 260 260" className="sv sv-abm" aria-hidden="true">
      <circle r="118" fill="none" stroke="#155EEF" strokeOpacity=".25" strokeDasharray="3 8" className="sv-spin" />
      <circle r="88" fill="none" stroke="#155EEF" strokeOpacity=".2" />
      <circle r="56" fill="rgba(21,94,239,0.05)" stroke="#155EEF" strokeOpacity=".35" />
      <circle r="24" fill="rgba(21,94,239,0.1)" stroke="#155EEF" strokeOpacity=".6" />
      <path d="M-124 0h248M0 -124v248" stroke="#155EEF" strokeOpacity=".12" />
      {accounts.map(([x, y, hit], i) => (
        <g key={i} className={hit ? 'sv-hit' : ''} style={{ animationDelay: `${i * 160}ms` }}>
          {hit && <circle cx={x} cy={y} r="13" fill="none" stroke="#155EEF" strokeOpacity=".5" className="sv-ping" />}
          <rect x={x - 6} y={y - 6} width="12" height="12" rx="3" fill={hit ? '#155EEF' : '#B4C2DA'} />
        </g>
      ))}
      <rect x="-7" y="-7" width="14" height="14" rx="3" fill="#D5A62B" />
    </svg>
  )
}

function Events() {
  return (
    <svg viewBox="0 0 420 250" className="sv sv-events" aria-hidden="true">
      <rect x="10" y="10" width="400" height="230" rx="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
      <circle cx="30" cy="30" r="4" fill="rgba(255,255,255,.4)" />
      <circle cx="44" cy="30" r="4" fill="rgba(255,255,255,.4)" />
      <circle cx="58" cy="30" r="4" fill="rgba(255,255,255,.4)" />
      <rect x="338" y="20" width="56" height="20" rx="10" fill="#D5A62B" />
      <circle cx="352" cy="30" r="3.5" fill="#09182F" className="sv-blink" />
      <text x="362" y="34.5" className="sv-mini sv-mini--dark">LIVE</text>

      {/* Main speaker tile */}
      <rect x="26" y="52" width="250" height="150" rx="10" fill="rgba(9,24,47,0.45)" />
      <circle cx="151" cy="112" r="24" fill="#8FB4FF" />
      <path d="M103 202c0-34 22-52 48-52s48 18 48 52z" fill="#8FB4FF" opacity=".8" />
      <rect x="38" y="178" width="92" height="16" rx="8" fill="rgba(9,24,47,0.6)" />
      <rect x="46" y="184" width="60" height="4" rx="2" fill="#fff" opacity=".8" />

      {/* Side tiles */}
      <rect x="290" y="52" width="104" height="70" rx="10" fill="rgba(9,24,47,0.45)" />
      <circle cx="342" cy="80" r="13" fill="#fff" opacity=".75" />
      <path d="M318 122c0-18 11-26 24-26s24 8 24 26z" fill="#fff" opacity=".6" />
      <rect x="290" y="132" width="104" height="70" rx="10" fill="rgba(9,24,47,0.45)" />
      <rect x="304" y="148" width="60" height="5" rx="2.5" fill="#fff" opacity=".7" />
      <rect x="304" y="160" width="76" height="5" rx="2.5" fill="#fff" opacity=".35" />
      <rect x="304" y="172" width="48" height="5" rx="2.5" fill="#fff" opacity=".35" />

      {/* Audience row */}
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={i} className="sv-seat" style={{ transitionDelay: `${i * 45}ms` }} cx={36 + i * 18} cy="222" r="6" fill="#fff" />
      ))}
      <rect x="300" y="215" width="94" height="14" rx="7" fill="rgba(255,255,255,0.15)" />
    </svg>
  )
}

function CoMarketing() {
  return (
    <svg viewBox="0 0 360 250" className="sv sv-comarketing" aria-hidden="true">
      <g className="sv-brand sv-brand--a">
        <rect x="20" y="40" width="130" height="170" rx="12" fill="#102C59" />
        <rect x="38" y="60" width="12" height="28" rx="2" fill="#D5A62B" />
        <rect x="56" y="60" width="12" height="36" rx="2" fill="#2878FF" />
        <text x="38" y="124" className="sv-mini sv-mini--light">YOUR BRAND</text>
        <rect x="38" y="136" width="80" height="5" rx="2.5" fill="#fff" opacity=".3" />
        <rect x="38" y="148" width="60" height="5" rx="2.5" fill="#fff" opacity=".3" />
      </g>
      <g className="sv-brand sv-brand--b">
        <rect x="210" y="40" width="130" height="170" rx="12" fill="#fff" stroke="#155EEF" strokeWidth="2" strokeDasharray="5 5" />
        <polygon points="250,62 266,70 266,88 250,96 234,88 234,70" fill="none" stroke="#155EEF" strokeWidth="2.5" />
        <text x="228" y="124" className="sv-mini sv-mini--royal">PARTNER</text>
        <rect x="228" y="136" width="80" height="5" rx="2.5" fill="#155EEF" opacity=".25" />
        <rect x="228" y="148" width="60" height="5" rx="2.5" fill="#155EEF" opacity=".25" />
      </g>
      <g className="sv-joint">
        <rect x="104" y="20" width="152" height="210" rx="14" fill="#fff" stroke="#E5EAF1" />
        <rect x="104" y="20" width="152" height="8" rx="4" fill="#155EEF" />
        <rect x="122" y="44" width="10" height="22" rx="2" fill="#D5A62B" />
        <rect x="136" y="44" width="10" height="28" rx="2" fill="#2878FF" />
        <text x="156" y="64" className="sv-mini sv-mini--ink">+</text>
        <polygon points="186,46 198,52 198,66 186,72 174,66 174,52" fill="none" stroke="#155EEF" strokeWidth="2" />
        <rect x="122" y="92" width="116" height="9" rx="4.5" fill="#102C59" />
        <rect x="122" y="108" width="90" height="9" rx="4.5" fill="#102C59" />
        <rect x="122" y="130" width="116" height="5" rx="2.5" fill="#64748B" opacity=".35" />
        <rect x="122" y="141" width="100" height="5" rx="2.5" fill="#64748B" opacity=".35" />
        <rect x="122" y="152" width="108" height="5" rx="2.5" fill="#64748B" opacity=".35" />
        <rect x="122" y="182" width="76" height="26" rx="13" fill="#155EEF" />
        <rect x="136" y="193" width="48" height="4" rx="2" fill="#fff" />
      </g>
    </svg>
  )
}

const DIRECT_STEPS = [
  { label: 'Invite', icon: 'M-9 -6h18v12h-18z M-9 -6l9 7 9-7' },
  { label: 'Follow-up', icon: 'M-9 -7h18v11h-9l-5 5v-5h-4z' },
  { label: 'Call', icon: 'M-7 -9c-2 0-3 2-2 5 2 6 7 11 13 13 3 1 5 0 5-2l-1-3-4-1-2 2c-3-1-5-4-6-6l2-2-1-4z' },
  { label: 'Meeting', icon: 'M-9 -7h18v16h-18z M-9 -2h18 M-4 -10v5 M4 -10v5' },
]

function DirectStep({ x, y, i, labelDy = 58 }: { x: number; y: number; i: number; labelDy?: number }) {
  const s = DIRECT_STEPS[i]
  const last = i === DIRECT_STEPS.length - 1
  return (
    <g transform={`translate(${x} ${y})`} className="sv-step" style={{ transitionDelay: `${i * 160}ms` }}>
      <circle r="30" fill="#fff" stroke={last ? '#D5A62B' : '#155EEF'} strokeWidth="2" />
      <path d={s.icon} fill="none" stroke={last ? '#9A7412' : '#155EEF'} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <text y={labelDy} textAnchor="middle" className="sv-mini sv-mini--ink">
        {s.label}
      </text>
    </g>
  )
}

function Direct() {
  const snake = 'M70 50 H 330 C 380 50, 380 160, 330 160 H 70'
  return (
    <>
      <svg viewBox="0 0 700 150" className="sv sv-direct sv-direct--wide" aria-hidden="true">
        <path d="M60 64 H 630" stroke="#D3DBE7" strokeWidth="2" strokeDasharray="4 6" />
        <path className="sv-track" d="M60 64 H 630" stroke="#155EEF" strokeWidth="2.5" pathLength={1} />
        {[60, 250, 440, 630].map((x, i) => (
          <DirectStep key={x} x={x} y={64} i={i} />
        ))}
      </svg>
      <svg viewBox="0 0 400 230" className="sv sv-direct sv-direct--compact" aria-hidden="true">
        <path d={snake} stroke="#D3DBE7" strokeWidth="2" strokeDasharray="4 6" fill="none" />
        <path className="sv-track" d={snake} stroke="#155EEF" strokeWidth="2.5" pathLength={1} fill="none" />
        {[
          [70, 50],
          [330, 50],
          [330, 160],
          [70, 160],
        ].map(([x, y], i) => (
          <DirectStep key={i} x={x} y={y} i={i} labelDy={52} />
        ))}
      </svg>
    </>
  )
}

const MAP: Record<ServiceVisual, () => JSX.Element> = {
  enablement: Enablement,
  campaigns: Campaigns,
  abm: Abm,
  events: Events,
  comarketing: CoMarketing,
  direct: Direct,
}

export function ServiceArt({ visual }: { visual: ServiceVisual }) {
  const Art = MAP[visual]
  return <Art />
}
