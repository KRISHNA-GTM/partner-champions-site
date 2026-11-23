import { CAPABILITIES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import './Services.css'

export function Services() {
  const { featured, pillars, support } = CAPABILITIES

  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow={CAPABILITIES.eyebrow}
          title={<>One team to <span className="hl">get partner marketing moving.</span></>}
          lead="We plan, build, and run the campaigns alongside your partners. Start with one campaign or build an ongoing program."
          layout="split"
        />

        <div className="capabilities">
          <article className="capability-feature reveal">
            <p className="capability-feature__tag">{featured.tag}</p>
            <div className="capability-feature__content">
              <div>
                <h3>{featured.title}</h3>
                <p>{featured.summary}</p>
              </div>
              <span className="capability-feature__index" aria-hidden="true">01</span>
            </div>
            <ul className="capability-feature__list">
              {featured.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <div className="capability-pillars">
            {pillars.map((item, index) => (
              <article className="capability-pillar reveal" key={item.title}>
                <span className="capability-pillar__index">0{index + 2}</span>
                <p className="capability-pillar__tag">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="capability-support reveal">
          <p className="capability-support__label">More ways we can help</p>
          <ul>
            {support.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
