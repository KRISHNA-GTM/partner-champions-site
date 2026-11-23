import { PROBLEM_DIAGNOSIS, SOLUTION_BRIDGE } from '../../data/content'
import { vars } from '../../utils/style'
import { SectionHeading } from '../ui/SectionHeading'
import './Challenge.css'

export function Challenge() {
  return (
    <section id="challenge" className="challenge section" aria-labelledby="challenge-title">
      <div className="container">
        <div className="challenge__intro">
          <SectionHeading
            id="challenge-title"
            eyebrow={PROBLEM_DIAGNOSIS.eyebrow}
            title={
              <>
                Your partners signed up. <span className="hl">So why aren’t they marketing?</span>
              </>
            }
          />
          <div className="challenge__context reveal">
            <p className="challenge__situation">{PROBLEM_DIAGNOSIS.situation}</p>
            <p>{PROBLEM_DIAGNOSIS.detail}</p>
          </div>
        </div>

        <ol className="problems" aria-label="Common partner marketing bottlenecks">
          {PROBLEM_DIAGNOSIS.points.map((point, i) => (
            <li key={point.num} className="problem reveal" style={vars({ '--delay': `${i * 70}ms` })}>
              <span className="problem__num" aria-hidden="true">{point.num}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="bridge reveal" aria-labelledby="bridge-title">
          <div className="bridge__head">
            <p className="eyebrow">{SOLUTION_BRIDGE.eyebrow}</p>
            <h3 id="bridge-title">{SOLUTION_BRIDGE.headline}</h3>
            <p>{SOLUTION_BRIDGE.sub}</p>
          </div>
          <ol className="flow" aria-label="How partner marketing execution works">
            {SOLUTION_BRIDGE.flow.map((step) => (
              <li key={step.step} className={`flow__step flow__step--${step.type}`}>
                <span className="flow__num">{step.step}</span>
                <strong>{step.role}</strong>
                <b>{step.focus}</b>
                <span>{step.detail}</span>
                {'handoffs' in step && (
                  <ul className="flow__handoff" aria-label="Campaign work handled by Partner Champions">
                    {(step.handoffs ?? []).map((handoff) => <li key={handoff}>{handoff}</li>)}
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
