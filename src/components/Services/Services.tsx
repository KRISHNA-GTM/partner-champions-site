import { CAPABILITIES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import './Services.css'

export function Services() {
  const offerings = [
    { ...CAPABILITIES.featured, number: '01' },
    { ...CAPABILITIES.pillars[0], number: '02' },
    { ...CAPABILITIES.pillars[1], number: '03' },
  ]

  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title={<>Partner marketing, <span className="hl">put into motion.</span></>}
          lead="A hands-on team to plan it, build it, and get it into partners’ hands."
          layout="split"
        />

        <ol className="capabilities">
          {offerings.map((item, index) => (
            <li key={item.title} className={`capability reveal ${index === 0 ? 'capability--featured' : ''}`}>
              <span className="capability__number">{item.number}</span>
              <p className="capability__tag">{item.tag}</p>
              <h3>{item.title}</h3>
              <p className="capability__summary">{item.summary}</p>
            </li>
          ))}
        </ol>

        <div className="capability-support reveal">
          <p className="capability-support__label">Also in the mix</p>
          <p>{CAPABILITIES.support.map((item) => item.title).join('  ·  ')}</p>
        </div>
      </div>
    </section>
  )
}
