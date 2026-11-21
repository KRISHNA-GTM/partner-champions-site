import { AUDIENCE } from '../../data/content'
import { mailtoHref } from '../../utils/contact'
import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { CampaignKit } from '../Showcase/Showcase'
import { ArrowRight } from '../ui/Icons'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__in" style={vars({ '--d': '0ms' })}>
            Partner Marketing Services
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line hero__in" style={vars({ '--d': '80ms' })}>
              Partner marketing
            </span>{' '}
            <span className="hero__line hero__in" style={vars({ '--d': '160ms' })}>
              that drives <span className="hero__accent">revenue</span>,
            </span>{' '}
            <span className="hero__line hero__dim hero__in" style={vars({ '--d': '240ms' })}>
              not just activity.
            </span>
          </h1>
          <p className="hero__lead hero__in" style={vars({ '--d': '380ms' })}>
            Partner Champions is the partner marketing team for technology brands. We plan, build and run the campaigns
            your partners use to sell.
          </p>
          <div className="hero__ctas hero__in" style={vars({ '--d': '480ms' })}>
            <BookingCta>
              Let's Talk About Your Partner Marketing <ArrowRight />
            </BookingCta>
            <a href={mailtoHref()} className="btn btn--ghost-dark">
              Email Us
            </a>
          </div>
        </div>

        {/* What partners receive from us: a ready-to-launch campaign kit. Desktop only. */}
        <figure className="hero__visual hero__in" style={vars({ '--d': '420ms' })} aria-label="Example partner campaign">
          <div className="hv hv--kit" aria-hidden="true">
            <CampaignKit />
          </div>
          <figcaption className="hero__visual-cap">What a partner receives from us. Illustrative example.</figcaption>
        </figure>
      </div>

      <div className="container hero__strip hero__in" style={vars({ '--d': '700ms' })}>
        <p className="hero__strip-label">Built for</p>
        <ul>
          {AUDIENCE.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
