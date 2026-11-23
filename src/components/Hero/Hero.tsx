import { AUDIENCE } from '../../data/content'
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
          <div className="hero__badge-wrap hero__in" style={vars({ '--d': '0ms' })}>
            <span className="hero__badge">
              <span className="hero__badge-dot" /> Partner Marketing Execution
            </span>
          </div>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line hero__in" style={vars({ '--d': '80ms' })}>
              Partners don't market on their own.
            </span>{' '}
            <span className="hero__line hero__dim hero__in" style={vars({ '--d': '160ms' })}>
              We execute the campaigns that turn them into <span className="hero__accent">revenue.</span>
            </span>
          </h1>
          <p className="hero__lead hero__in" style={vars({ '--d': '380ms' })}>
            Recruiting partners is easy. Getting them to market is where programs stall. We plan, build and run the
            turn-key campaigns, co-marketing and sales kits your partners take to customers. That means real pipeline
            and revenue, not just partner badges.
          </p>
          <div className="hero__ctas hero__in" style={vars({ '--d': '480ms' })}>
            <BookingCta>
              Book a Partner Marketing Consultation <ArrowRight />
            </BookingCta>
            <a href="#services" className="btn btn--ghost-dark">
              Explore our services
            </a>
          </div>
        </div>

        {/* Done-for-you campaign pack delivered and managed for partners */}
        <figure className="hero__visual hero__in" style={vars({ '--d': '420ms' })} aria-label="Partner campaign execution pack">
          <div className="hv hv--kit" aria-hidden="true">
            <CampaignKit />
          </div>
          <figcaption className="hero__visual-cap">
            Done-for-you execution: a ready-to-launch campaign pack built and coordinated for your partners.
          </figcaption>
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
