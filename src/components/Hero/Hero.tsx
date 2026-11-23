import { AUDIENCE } from '../../data/content'
import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { CampaignKit } from '../Showcase/Showcase'
import { ArrowRight } from '../ui/Icons'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__field" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow hero__in" style={vars({ '--d': '0ms' })}>
            <span /> Partner marketing execution
          </p>
          <h1 id="hero-title" className="hero__title hero__in" style={vars({ '--d': '70ms' })}>
            Partners don’t market on their own.
          </h1>
          <p className="hero__lead hero__in" style={vars({ '--d': '150ms' })}>
            We execute the campaigns that turn partner activity into revenue. From the offer and co-branded assets to partner outreach and follow-up, we make the work happen.
          </p>
          <div className="hero__actions hero__in" style={vars({ '--d': '230ms' })}>
            <BookingCta>
              Book a Partner Marketing Consultation <ArrowRight />
            </BookingCta>
            <a href="#services" className="hero__text-link">Explore our services <span aria-hidden="true">↘</span></a>
          </div>
        </div>

        <figure className="hero__visual hero__in" style={vars({ '--d': '180ms' })} aria-label="Example partner campaign execution pack">
          <div className="hero__visual-top">
            <span>Campaign in motion</span>
            <span className="hero__visual-count">01 / 05</span>
          </div>
          <div className="hero__campaign">
            <CampaignKit />
          </div>
          <figcaption>
            <span className="hero__caption-mark" aria-hidden="true">↗</span>
            One coordinated campaign, ready for partners to take to market.
          </figcaption>
        </figure>
      </div>

      <div className="container hero__audience hero__in" style={vars({ '--d': '300ms' })}>
        <span>For</span>
        <ul>
          {AUDIENCE.map((audience) => <li key={audience}>{audience}</li>)}
        </ul>
      </div>
    </section>
  )
}
