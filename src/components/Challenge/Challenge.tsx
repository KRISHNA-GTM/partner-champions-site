import { CHALLENGES, FLOW, FLOW_HANDOFF } from '../../data/content'
import { vars } from '../../utils/style'
import { SectionHeading } from '../ui/SectionHeading'
import './Challenge.css'

export function Challenge() {
  return (
    <section id="challenge" className="challenge section" aria-labelledby="challenge-title">
      <div className="container">
        {/* Part A: help the visitor recognise their own program */}
        <SectionHeading
          id="challenge-title"
          eyebrow="Why partner programs stall"
          title={
            <>
              Your partners signed up. So why aren't they <span className="hl">marketing?</span>
            </>
          }
          lead="Recruiting partners is easy. But getting independent partner organizations to actively promote and sell your products requires hands-on execution, not just a portal full of assets."
        />

        <ol className="problems">
          {CHALLENGES.map((c, i) => (
            <li key={c.title} className="problem reveal" style={vars({ '--delay': `${i * 70}ms` })}>
              <span className="problem__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>

        {/* Part B: relief. Who does what once we are in. */}
        <div className="bridge reveal">
          <div className="bridge__head">
            <p className="bridge__lead">
              That's where <strong>Partner Champions</strong> comes in.
            </p>
            <p className="bridge__sub">We act as your partner marketing execution engine. We do the actual work so campaigns launch and drive revenue.</p>
          </div>
          <ol className="flow" aria-label="Who does what">
            {FLOW.map((step) => (
              <li key={step.label} className={`flow__step flow__step--${step.tone}`}>
                <strong>{step.label}</strong>
                <span>{step.note}</span>
                {step.tone === 'hub' && (
                  <ul className="flow__handoff" aria-label="What we take off your plate">
                    {FLOW_HANDOFF.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
