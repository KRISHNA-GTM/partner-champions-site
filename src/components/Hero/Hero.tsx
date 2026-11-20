import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { ArrowDown, ArrowRight } from '../ui/Icons'
import { HeroNetwork } from './HeroNetwork'
import './Hero.css'

const PILLARS = ['Strategy', 'Campaigns', 'Enablement', 'Partner Engagement']

export function Hero() {
  return (
    <section id="top" className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <HeroNetwork />

      <div className="container hero__inner">
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
          We help technology companies turn partner ecosystems into growth engines through strategic marketing,
          engagement, and demand generation.
        </p>
        <div className="hero__ctas hero__in" style={vars({ '--d': '480ms' })}>
          <BookingCta>
            Let's Build Your Growth <ArrowRight />
          </BookingCta>
          <a href="#services" className="btn btn--ghost-dark">
            Explore Our Services
          </a>
        </div>
      </div>

      <div className="container hero__strip hero__in" style={vars({ '--d': '700ms' })}>
        <p className="visually-hidden">Strategy. Campaigns. Enablement. Partner Engagement.</p>
        <ol aria-hidden="true">
          {PILLARS.map((p, i) => (
            <li key={p}>
              <span>0{i + 1}</span>
              {p}
            </li>
          ))}
        </ol>
        <a href="#about" className="hero__scroll">
          <span>Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  )
}
