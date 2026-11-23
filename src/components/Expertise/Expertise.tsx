import { EXPERTISE_AREAS, EXPERTISE_PILLARS } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import './Expertise.css'

/**
 * Why Partner Champions: our strongest differentiator.
 * Shows why partner marketing requires a dedicated execution engine rather than a general demand-gen agency.
 */
export function Expertise() {
  return (
    <section id="expertise" className="expertise section" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeading
          id="expertise-title"
          eyebrow="Why Partner Champions"
          title={
            <>
              Partner marketing isn't standard demand gen. It requires a{' '}
              <span className="hl">dedicated execution engine.</span>
            </>
          }
          lead="General marketing agencies treat partner programs like direct corporate outbound. We specialize 100% in the three-way partner ecosystem, delivering turn-key execution that aligns vendors, partners, and buyers without channel conflict."
        />

        <div className="expertise__pillars">
          {EXPERTISE_PILLARS.map((p) => (
            <article key={p.num} className="expertise__card reveal">
              <span className="expertise__num" aria-hidden="true">
                {p.num}
              </span>
              <h3 className="expertise__card-title">{p.title}</h3>
              <p className="expertise__card-text">{p.summary}</p>
            </article>
          ))}
        </div>

        <div className="expertise__bar reveal">
          <div className="expertise__bar-head">
            <span className="expertise__tag">Specialized Channel Focus</span>
            <p className="expertise__bar-lead">Where our execution delivers immediate leverage for your alliance team:</p>
          </div>
          <ul className="expertise__areas" aria-label="Partner marketing capabilities">
            {EXPERTISE_AREAS.map((area) => (
              <li key={area}>
                <span className="expertise__dot" aria-hidden="true" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
