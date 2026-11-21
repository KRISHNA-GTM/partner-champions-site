import { CHALLENGES, FLOW } from '../../data/content'
import { vars } from '../../utils/style'
import { SectionHeading } from '../ui/SectionHeading'
import './Challenge.css'

const POSITIONING = [
  {
    title: 'Partner marketing only',
    text: 'Not a general agency. Partner programs, partner audiences and co-marketing are all we do.',
  },
  {
    title: 'Strategy and execution',
    text: 'The same team writes the plan and builds the campaigns, kits and events that carry it out.',
  },
  {
    title: 'Hands-on with partners',
    text: 'We work with your partners directly, so campaigns launch instead of waiting in a queue.',
  },
]

export function Challenge() {
  return (
    <section id="challenge" className="challenge" aria-labelledby="challenge-title">
      <div className="container challenge__top">
        <SectionHeading
          id="challenge-title"
          eyebrow="The challenge"
          layout="split"
          title={
            <>
              You have partners. Getting them to market with you is the <span className="hl">hard part.</span>
            </>
          }
          lead="Recruiting partners is the start. Revenue comes when partners know what to sell, have the campaigns to sell it, and someone makes sure it happens."
        />

        <ol className="problems">
          {CHALLENGES.map((c, i) => (
            <li key={c.title} className="problem reveal" style={vars({ '--delay': `${(i % 3) * 80}ms` })}>
              <span className="problem__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <section className="fit on-dark" aria-labelledby="fit-title">
        <div className="container">
          <div className="fit__head">
            <div className="reveal">
              <p className="eyebrow">Where we fit</p>
              <h2 id="fit-title" className="fit__title">
                The partner marketing team between your brand and your partners.
              </h2>
            </div>
            <ul className="fit__points reveal" style={vars({ '--delay': '100ms' })}>
              {POSITIONING.map((p) => (
                <li key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="flow reveal" aria-labelledby="flow-caption">
            <figcaption id="flow-caption" className="visually-hidden">
              How partner marketing flows: Technology Brand, then Partner Champions, then Partner Network, then
              Marketing Programs, then Campaigns, then Customer Engagement, then Growth.
            </figcaption>
            <ol className="flow__list">
              {FLOW.map((step, i) => (
                <li key={step.label} className={`flow__step ${step.hub ? 'is-hub' : ''}`}>
                  <span className="flow__marker" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <strong>{step.label}</strong>
                  <span className="flow__note">{step.note}</span>
                </li>
              ))}
            </ol>
          </figure>
        </div>
      </section>
    </section>
  )
}
