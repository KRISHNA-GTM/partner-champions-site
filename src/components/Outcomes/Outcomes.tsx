import { AFTER, BEFORE } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import './Outcomes.css'

export function Outcomes() {
  return (
    <section id="outcomes" className="outcomes section" aria-labelledby="outcomes-title">
      <div className="container">
        <SectionHeading
          id="outcomes-title"
          eyebrow="What changes"
          title={
            <>
              From scattered activity to <span className="hl">partner momentum.</span>
            </>
          }
        />

        <div className="shift reveal">
          <div className="shift__col shift__col--before">
            <p className="shift__tag">Before</p>
            <h3>Disconnected activity</h3>
            <ul>
              {BEFORE.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="shift__arrow" aria-hidden="true">
            <svg viewBox="0 0 48 24" width="48" height="24">
              <path d="M2 12h40M34 4l8 8-8 8" />
            </svg>
          </div>
          <div className="shift__col shift__col--after">
            <p className="shift__tag">After</p>
            <h3>Coordinated execution</h3>
            <ul>
              {AFTER.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
