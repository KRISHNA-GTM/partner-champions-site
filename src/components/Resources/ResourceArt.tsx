import type { Resource } from '../../data/content'

/** Cover illustrations for the draft articles, one composition per article. */
export function ResourceArt({ art }: { art: Resource['art'] }) {
  if (art === 'revenue') {
    return (
      <svg viewBox="0 0 640 400" className="ra" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="400" fill="#09182F" />
        <g stroke="rgba(143,180,255,0.08)">
          {Array.from({ length: 11 }).map((_, i) => (
            <path key={i} d={`M${i * 64} 0V400`} />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <path key={i} d={`M0 ${i * 64}H640`} />
          ))}
        </g>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} className="ra-step" style={{ transitionDelay: `${i * 60}ms` }}>
            <rect x={110 + i * 88} y={300 - (i + 1) * 46} width="64" height={(i + 1) * 46} rx="8" fill={i === 4 ? '#D5A62B' : '#155EEF'} opacity={0.35 + i * 0.15} />
            <text x={142 + i * 88} y={290} textAnchor="middle" className="ra-num">
              {i + 1}
            </text>
          </g>
        ))}
        <path d="M100 280 C 220 260, 330 200, 560 70" stroke="#fff" strokeWidth="3" fill="none" strokeDasharray="2 8" strokeLinecap="round" />
        <path d="M540 66 l22 2 -8 20" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="560" cy="70" r="40" fill="none" stroke="#2878FF" strokeOpacity=".4" />
      </svg>
    )
  }
  if (art === 'comarketing') {
    return (
      <svg viewBox="0 0 640 400" className="ra" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="640" height="400" fill="#155EEF" />
        <circle cx="250" cy="200" r="130" fill="#0F4FD1" stroke="rgba(255,255,255,.35)" strokeWidth="2" />
        <circle cx="390" cy="200" r="130" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="6 8" />
        <g className="ra-doc">
          <rect x="280" y="130" width="80" height="108" rx="8" fill="#fff" />
          <rect x="292" y="144" width="8" height="18" rx="2" fill="#D5A62B" />
          <rect x="304" y="144" width="8" height="24" rx="2" fill="#155EEF" />
          <rect x="292" y="182" width="56" height="6" rx="3" fill="#102C59" />
          <rect x="292" y="194" width="42" height="6" rx="3" fill="#102C59" opacity=".5" />
          <rect x="292" y="214" width="34" height="12" rx="6" fill="#155EEF" />
        </g>
        <text x="232" y="292" textAnchor="middle" className="ra-tag">YOU</text>
        <text x="410" y="292" textAnchor="middle" className="ra-tag">PARTNER</text>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 640 400" className="ra" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="400" fill="#EEF2F8" />
      <rect x="120" y="60" width="400" height="280" rx="14" fill="#fff" stroke="#D3DBE7" />
      <rect x="120" y="60" width="400" height="38" rx="14" fill="#102C59" />
      <rect x="120" y="84" width="400" height="14" fill="#102C59" />
      <circle cx="142" cy="79" r="4" fill="#fff" opacity=".5" />
      <circle cx="156" cy="79" r="4" fill="#fff" opacity=".5" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => {
          const hot = r === 1 && c === 1
          return (
            <g key={`${r}${c}`} className={hot ? 'ra-hot' : ''}>
              <rect x={144 + c * 124} y={116 + r * 70} width="108" height="56" rx="8" fill={hot ? '#155EEF' : '#F5F7FA'} stroke={hot ? 'none' : '#E5EAF1'} />
              <rect x={156 + c * 124} y={130 + r * 70} width="44" height="6" rx="3" fill={hot ? '#fff' : '#B4C2DA'} />
              <rect x={156 + c * 124} y={142 + r * 70} width="70" height="6" rx="3" fill={hot ? '#fff' : '#D3DBE7'} opacity={hot ? 0.6 : 1} />
            </g>
          )
        }),
      )}
      <path d="M352 238 l0 34 9 -8 7 14 7 -3 -7 -14 12 -1 z" fill="#09182F" stroke="#fff" strokeWidth="2" strokeLinejoin="round" className="ra-cursor" />
      <rect x="470" y="40" width="64" height="24" rx="12" fill="#D5A62B" />
      <text x="502" y="56.5" textAnchor="middle" className="ra-pill">USED</text>
    </svg>
  )
}
