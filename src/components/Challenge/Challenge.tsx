import { CHALLENGES, FLOW, FLOW_HANDOFF } from '../../data/content'
import { vars } from '../../utils/style'
import './Challenge.css'

export function Challenge() {
  return (
    <section id="challenge" className="challenge section" aria-labelledby="challenge-title">
      <div className="container challenge__grid">
        <div className="challenge__copy">
          <header className="section-head reveal">
            <p className="eyebrow">Why partner programs stall</p>
            <h2 id="challenge-title" className="section-title">
              You have partners. Getting them to market with you is the <span className="hl">hard part.</span>
            </h2>
          </header>

          <ol className="problems">
            {CHALLENGES.map((c, i) => (
              <li key={c.title} className="problem reveal" style={vars({ '--delay': `${i * 70}ms` })}>
                <span className="problem__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="fit on-dark reveal" aria-labelledby="fit-title">
          <figcaption className="fit__cap">
            <p className="eyebrow">Where we fit</p>
            <p id="fit-title" className="fit__title">
              The team between your brand and your partners.
            </p>
          </figcaption>

          <ol className="flow">
            {FLOW.map((step, i) => (
              <li key={step.label} className={`flow__step flow__step--${step.tone}`}>
                <span className="flow__dot" aria-hidden="true" />
                <div className="flow__text">
                  <strong>{step.label}</strong>
                  <span>{step.note}</span>
                </div>
                {i === 1 && (
                  <ul className="flow__handoff" aria-label="What we hand to partners">
                    {FLOW_HANDOFF.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  )
}
