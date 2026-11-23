import { DOMINANT_CTA } from '../../config/site'
import { vars } from '../../utils/style'
import { BookingCta } from '../contact/BookingCta'
import { ArrowRight } from '../ui/Icons'
import './Hero.css'

/*
 * Hero visual: one offer in the middle, the five assets we build from it around it.
 * Coordinates are in "kit units": the kit is 100 units wide (1u = 1cqw), so left/top/width
 * are percentages of width/height and cx/cy are the tile centres used for the connector lines.
 */
const KIT_H = 96 // kit height in units (aspect-ratio 100 / 96)
const HUB = { x: 49, y: 54 }

type Tile = { key: string; label: string; l: number; t: number; w: number; cx: number; cy: number; d: number }

const TILES: Tile[] = [
  { key: 'lp', label: 'Landing page', l: 0, t: 3, w: 46, cx: 23, cy: 20, d: 240 },
  { key: 'em', label: '3-email sequence', l: 57, t: 0, w: 41, cx: 77, cy: 20, d: 340 },
  { key: 'kt', label: 'Sales talk track', l: 0, t: 55, w: 27, cx: 13, cy: 66, d: 440 },
  { key: 'so', label: 'Social posts', l: 73, t: 52, w: 27, cx: 86, cy: 68, d: 540 },
  { key: 'wb', label: 'Joint webinar', l: 31, t: 77, w: 37, cx: 49, cy: 86, d: 640 },
]

const Lines = () => <span className="kt__lines" aria-hidden="true"><i /><i /><i /></span>
const Marks = () => (
  <span className="kt__marks">
    <i className="kt__sq" />Your Brand<em>×</em><i className="kt__ci" />Partner
  </span>
)

function TileBody({ k }: { k: string }) {
  switch (k) {
    case 'lp':
      return (
        <>
          <span className="kt__bar"><i /><i /><i /><b>partners.yourbrand.com</b></span>
          <span className="kt__pad">
            <Marks />
            <span className="kt__lp">
              <span>
                <strong>Cut cloud waste before your next renewal.</strong>
                <Lines />
                <span className="kt__btn">Get your review</span>
              </span>
              <span className="kt__form"><i /><i /><i /><span className="kt__btn kt__btn--block">Submit</span></span>
            </span>
          </span>
        </>
      )
    case 'em':
      return (
        <span className="kt__pad">
          <span className="kt__subject"><small>Subject</small>A 90-day plan for lower cloud costs</span>
          <span className="kt__banner">Spend less on cloud. Keep the performance.</span>
          <Lines />
          <span className="kt__btn">Reserve your review</span>
          <span className="kt__seq"><b>Email 1</b><span>Follow-up</span><span>Last call</span></span>
        </span>
      )
    case 'kt':
      return (
        <>
          <span className="kt__dochead">Talk track</span>
          <span className="kt__pad kt__doc">
            <span><b>Opener</b><Lines /></span>
            <span><b>Discovery</b><Lines /></span>
            <span><b>Objections</b><Lines /></span>
          </span>
        </>
      )
    case 'so':
      return (
        <span className="kt__pad">
          <span className="kt__who"><i>P</i>Partner</span>
          <Lines />
          <span className="kt__img">Is your cloud bill ready for renewal?</span>
        </span>
      )
    default:
      return (
        <span className="kt__pad">
          <span className="kt__live">Live webinar</span>
          <strong>Cloud cost control: a 90‑day plan</strong>
          <span className="kt__speakers"><i>YB</i><i className="is-partner">P</i></span>
        </span>
      )
  }
}

function CampaignMap() {
  return (
    <div className="kit" aria-hidden="true">
      <svg className="kit__links" viewBox={`0 0 100 ${KIT_H}`} preserveAspectRatio="none">
        {TILES.map((t) => (
          <line key={t.key} x1={HUB.x} y1={HUB.y} x2={t.cx} y2={t.cy} />
        ))}
      </svg>

      <div className="kt kt--offer" style={vars({ '--l': 30, '--t': 44, '--w': 38, '--fx': 0, '--fy': 0, '--d': '80ms' })}>
        <span className="kt__in">
          <span className="kt__pad">
            <small className="kt__kicker">The offer</small>
            <strong>Free cloud cost review</strong>
            <Marks />
          </span>
        </span>
      </div>

      {TILES.map((t) => (
        <div
          key={t.key}
          className={`kt kt--${t.key}`}
          style={vars({
            '--l': t.l,
            '--t': (t.t / KIT_H) * 100,
            '--w': t.w,
            '--fx': HUB.x - t.cx,
            '--fy': HUB.y - t.cy,
            '--d': `${t.d}ms`,
          })}
        >
          <span className="kt__label">{t.label}</span>
          <span className="kt__in">
            <TileBody k={t.key} />
          </span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero on-dark" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            Partner marketing that drives revenue, not just activity.
          </h1>
          <p className="hero__lead">
            Partners don’t market on their own. So we do it for them: we plan, build and launch complete co‑branded
            campaigns, from emails and landing pages to webinars and sales kits.
          </p>
          <div className="hero__actions">
            <BookingCta>
              {DOMINANT_CTA} <ArrowRight />
            </BookingCta>
            <a href="#work" className="hero__text-link">See a full campaign</a>
          </div>
        </div>

        <figure className="hero__visual">
          <CampaignMap />
          <figcaption className="visually-hidden">
            One partner offer, a free cloud cost review, turned into a landing page, a three-email sequence, a sales
            talk track, social posts and a joint webinar.
          </figcaption>
        </figure>
      </div>

      <p className="container hero__footnote">
        Built for channel, alliance and partner marketing teams at technology companies.
      </p>
    </section>
  )
}
