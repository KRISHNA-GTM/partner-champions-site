import { PROCESS } from '../../data/content'
import { vars } from '../../utils/style'
import { SectionHeading } from '../ui/SectionHeading'
import './Approach.css'

export function Approach() {
  return (
    <section id="approach" className="approach section" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeading
          id="approach-title"
          eyebrow="How we work"
          layout="split"
          title={
            <>
              Four stages, <span className="hl">one team</span> from plan to launch.
            </>
          }
          lead="You work with the same people from the first review to the campaign results. Each stage ends with something you can use."
        />

        <ol className="process">
          {PROCESS.map((p, i) => (
            <li key={p.num} className="process__step reveal" style={vars({ '--delay': `${i * 90}ms` })}>
              <div className="process__rail" aria-hidden="true">
                <span className="process__dot">{p.num}</span>
              </div>
              <div className="process__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p className="process__label">You get</p>
                <ul>
                  {p.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p className="process__loop reveal">
          <span aria-hidden="true">↻</span> What we learn in Optimize becomes the starting point for the next round.
        </p>
      </div>
    </section>
  )
}
