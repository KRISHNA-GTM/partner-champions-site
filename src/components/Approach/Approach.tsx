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
          eyebrow="Our approach"
          title={
            <>
              A clear process. <span className="hl">You won't have to figure it out yourself.</span>
            </>
          }
          lead="Four stages, one team, from first review to the next campaign."
        />

        <ol className="process">
          {PROCESS.map((p, i) => (
            <li key={p.num} className="process__step reveal" style={vars({ '--delay': `${i * 90}ms` })}>
              <div className="process__rail" aria-hidden="true">
                <span className="process__dot">{p.num}</span>
              </div>
              <div className="process__body">
                <p className="process__label">{p.verb}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
