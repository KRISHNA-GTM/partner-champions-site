import campaignStudio from '../../assets/campaign-studio.webp'
import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { ArrowRight } from '../ui/Icons'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__field" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow hero__in" style={vars({ '--d': '0ms' })}>Partner marketing execution</p>
          <h1 id="hero-title" className="hero__title hero__in" style={vars({ '--d': '70ms' })}>
            Partners don’t market on their own.
          </h1>
          <p className="hero__lead hero__in" style={vars({ '--d': '150ms' })}>
            We plan, build, and run the campaigns your partners can take straight to market.
          </p>
          <div className="hero__actions hero__in" style={vars({ '--d': '230ms' })}>
            <BookingCta>
              Book a Partner Marketing Consultation <ArrowRight />
            </BookingCta>
            <a href="#work" className="hero__text-link">See a campaign <span aria-hidden="true">↘</span></a>
          </div>
        </div>

        <figure className="hero__visual hero__in" style={vars({ '--d': '140ms' })}>
          <img src={campaignStudio} alt="A coordinated partner campaign shown across digital and printed marketing materials" fetchPriority="high" />
          <figcaption>
            <span>Campaign strategy</span><i /><span>Creative</span><i /><span>Partner launch</span>
          </figcaption>
        </figure>
      </div>

      <div className="container hero__footnote hero__in" style={vars({ '--d': '300ms' })}>
        <span>For technology brands</span>
        <span>Channel marketing · Alliances · Partner programs</span>
      </div>
    </section>
  )
}
