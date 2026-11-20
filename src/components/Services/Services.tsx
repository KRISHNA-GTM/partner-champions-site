import { SERVICES } from '../../data/content'
import { vars } from '../../utils/style'
import { useContact } from '../contact/ContactContext'
import { ArrowRight } from '../ui/Icons'
import { ServiceArt } from './ServiceVisuals'
import './Services.css'

export function Services() {
  const { openContact } = useContact()

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="container">
        <header className="services__head">
          <div className="reveal">
            <p className="eyebrow">What We Do</p>
            <h2 id="services-title" className="section-title">
              Marketing built for the <span className="hl">partner ecosystem.</span>
            </h2>
          </div>
          <p className="lead reveal" style={vars({ '--delay': '120ms' })}>
            From strategic planning to hands-on execution, we help brands make partner marketing work harder.
          </p>
        </header>

        <ul className="services__grid">
          {SERVICES.map((s, i) => (
            <li key={s.num} className={`svc svc--${s.visual} reveal`} style={vars({ '--delay': `${(i % 3) * 90}ms` })}>
              <article className="svc__inner" aria-labelledby={`svc-${s.num}`}>
                <div className="svc__art">
                  <ServiceArt visual={s.visual} />
                </div>
                <div className="svc__body">
                  <span className="svc__num" aria-hidden="true">
                    {s.num}
                  </span>
                  <h3 id={`svc-${s.num}`}>{s.title}</h3>
                  <p>{s.description}</p>
                  <button
                    type="button"
                    className="text-link svc__link"
                    aria-haspopup="dialog"
                    onClick={() => openContact(s.title)}
                  >
                    <span>{s.cta}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
