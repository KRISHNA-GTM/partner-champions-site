import { useRef, useState, type KeyboardEvent } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import './Showcase.css'

/* Placeholder co-brand marks. Deliberately generic: no real or invented client logos. */
const BrandMark = () => (
  <span className="mk-brand">
    <i className="mk-brand__sq" />
    Your Brand
  </span>
)
const PartnerMark = () => (
  <span className="mk-brand mk-brand--partner">
    <i className="mk-brand__ci" />
    Partner
  </span>
)
const CoBrand = () => (
  <span className="mk-cobrand">
    <BrandMark />
    <span className="mk-x">×</span>
    <PartnerMark />
  </span>
)

function LandingPage() {
  return (
    <div className="mk mk-browser">
      <div className="mk-browser__bar">
        <span className="mk-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mk-url">partners.yourbrand.com/cloud-cost-review</span>
      </div>
      <div className="mk-lp">
        <div className="mk-lp__nav">
          <CoBrand />
          <span className="mk-btn mk-btn--sm">Book a review</span>
        </div>
        <div className="mk-lp__hero">
          <div>
            <span className="mk-kicker">Joint offer</span>
            <p className="mk-lp__h">Cut cloud waste before your next renewal.</p>
            <p className="mk-lp__p">
              A free cost review from Your Brand and Partner, with a 90-day plan your team can act on.
            </p>
            <div className="mk-lp__ctas">
              <span className="mk-btn">Get your review</span>
              <span className="mk-btn mk-btn--ghost">See how it works</span>
            </div>
          </div>
          <div className="mk-form">
            <p className="mk-form__t">Request a cost review</p>
            <span className="mk-input">Work email</span>
            <span className="mk-input">Company</span>
            <span className="mk-input">Monthly cloud spend</span>
            <span className="mk-btn mk-btn--block">Submit</span>
          </div>
        </div>
        <ul className="mk-lp__feats">
          <li>
            <b>Usage audit</b>Where spend goes today
          </li>
          <li>
            <b>Rightsizing plan</b>What to change first
          </li>
          <li>
            <b>Partner rollout</b>Who makes it happen
          </li>
        </ul>
      </div>
    </div>
  )
}

export function Email() {
  return (
    <div className="mk mk-email">
      <div className="mk-email__meta">
        <p>
          <span>From</span> Partner team
        </p>
        <p>
          <span>Subject</span> <b>A 90-day plan for lower cloud costs</b>
        </p>
      </div>
      <div className="mk-email__body">
        <div className="mk-email__brand">
          <CoBrand />
        </div>
        <div className="mk-email__banner">
          <span className="mk-kicker mk-kicker--light">Free cost review</span>
          <p>Spend less on cloud. Keep the performance.</p>
        </div>
        <p className="mk-email__text">Hi Jordan,</p>
        <p className="mk-email__text">
          Renewal season is a good time to check what you are paying for. Together with Your Brand, we are offering a
          free review of your cloud usage, with a clear plan for what to change first.
        </p>
        <span className="mk-btn">Reserve your review</span>
        <p className="mk-email__text mk-email__sign">The Partner team</p>
      </div>
      <div className="mk-email__seq">
        <span className="is-on">Email 1</span>
        <span>Follow-up</span>
        <span>Last call</span>
      </div>
    </div>
  )
}

export function Webinar() {
  return (
    <div className="mk mk-webinar">
      <span className="mk-live">Live webinar</span>
      <p className="mk-webinar__h">Cloud cost control: a 90-day plan</p>
      <p className="mk-webinar__d">Thursday, 11:00 ET · 45 minutes</p>
      <div className="mk-webinar__speakers">
        <span>
          <i>YB</i>Your Brand
        </span>
        <span>
          <i className="is-partner">P</i>Partner
        </span>
      </div>
      <span className="mk-btn mk-btn--light">Register now</span>
    </div>
  )
}

function SocialPost() {
  return (
    <div className="mk mk-post">
      <div className="mk-post__head">
        <i className="mk-post__avatar">P</i>
        <span>
          <b>Partner</b>
          <small>Sponsored</small>
        </span>
      </div>
      <p className="mk-post__text">Most teams overpay for cloud without knowing where. We are running free cost reviews with Your Brand this quarter.</p>
      <div className="mk-post__img">
        <CoBrand />
        <p>Is your cloud bill ready for renewal?</p>
        <span className="mk-btn mk-btn--sm">Book a free review</span>
      </div>
      <div className="mk-post__bar">
        <span>Like</span>
        <span>Comment</span>
        <span>Repost</span>
      </div>
    </div>
  )
}

const CAMPAIGN_ASSETS = [
  {
    role: 'STRATEGY',
    name: 'Joint Cloud Cost Review Offer',
    desc: 'Target account criteria, joint value prop & 90-day calendar',
    status: 'Planned',
  },
  {
    role: 'EMAILS',
    name: '3-Part Outbound Email Cadence',
    desc: 'Written in partner’s voice, co-branded & ready to dispatch',
    status: 'Written',
  },
  {
    role: 'PAGE',
    name: 'Co-Branded Conversion Landing Page',
    desc: 'Custom registration copy & lead capture routed to reps',
    status: 'Live',
  },
  {
    role: 'EVENT',
    name: 'Live Webinar Deck & Promotion',
    desc: 'Slide deck, abstracts, speaker prep & hosting management',
    status: 'Scheduled',
  },
  {
    role: 'SALES KIT',
    name: 'Partner Sales Enablement Kit',
    desc: 'Rep talk tracks, objection handling & customer leave-behind',
    status: 'Delivered',
  },
]

export function CampaignKit() {
  return (
    <div className="mk mk-kit">
      <div className="mk-kit__head">
        <div className="mk-kit__status-pill">
          <span className="mk-kit__dot" />
          <span>Managed Partner Campaign</span>
        </div>
        <div className="mk-kit__title-wrap">
          <p className="mk-kit__t">Cloud Cost Review Campaign Pack</p>
          <p className="mk-kit__s">Fully planned, produced & coordinated for your partners</p>
        </div>
      </div>
      <ul className="mk-kit__files">
        {CAMPAIGN_ASSETS.map((f) => (
          <li key={f.name}>
            <span className={`mk-file mk-file--${f.role.toLowerCase().replace(/[^a-z]/g, '')}`}>{f.role}</span>
            <div className="mk-kit__file-info">
              <b>{f.name}</b>
              <small>{f.desc}</small>
            </div>
            <span className="mk-kit__badge-status">{f.status}</span>
            <span className="mk-check" />
          </li>
        ))}
      </ul>
      <div className="mk-kit__foot">
        <span className="mk-pill">Zero Partner Marketing Burden</span>
        <span className="mk-kit__exec-tag">
          <span className="mk-kit__check-icon">✓</span> Executed by Partner Champions
        </span>
      </div>
    </div>
  )
}

const PIECES = [
  {
    key: 'kit',
    title: 'Campaign execution pack',
    text: 'The complete turn-key campaign: strategy, co-branded assets, event and sales kit, ready for partners to run.',
    art: <CampaignKit />,
  },
  {
    key: 'em',
    title: 'Partner emails',
    text: "Outbound campaign messaging and follow-up cadences, written in the partner's voice.",
    art: <Email />,
  },
  {
    key: 'lp',
    title: 'Co-branded landing page',
    text: 'A dedicated conversion asset designed to capture leads directly for partner reps.',
    art: <LandingPage />,
  },
  {
    key: 'wb',
    title: 'Joint webinar',
    text: 'Turn-key event promotion, presentation slides and co-hosting coordination handled end to end.',
    art: <Webinar />,
  },
  {
    key: 'li',
    title: 'Social promotion',
    text: 'Ghostwritten posts and co-branded graphics ready for partner reps to publish.',
    art: <SocialPost />,
  },
]

export function Showcase() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const piece = PIECES[active]

  // Arrow keys move between deliverables (WAI-ARIA tabs pattern)
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (active + step + PIECES.length) % PIECES.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="work" className="work section on-dark" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow="What we deliver"
          title={
            <>
              Sample Campaign: <span className="hl">Cloud Cost Review</span>
            </>
          }
          lead="A turn-key co-marketing campaign planned, produced and coordinated for your partners. Ready to drive pipeline without asking them to build anything."
        />

        <div className="viewer reveal">
          <div className="viewer__tabs" role="tablist" aria-label="Campaign deliverables" onKeyDown={onKeyDown}>
            {PIECES.map((p, i) => (
              <button
                key={p.key}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`work-tab-${p.key}`}
                aria-selected={i === active}
                aria-controls="work-panel"
                tabIndex={i === active ? 0 : -1}
                className={`viewer__tab ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <b>{p.title}</b>
                <span>{p.text}</span>
              </button>
            ))}
          </div>

          <div id="work-panel" className="viewer__panel" role="tabpanel" aria-labelledby={`work-tab-${piece.key}`}>
            <p className="viewer__desc">{piece.text}</p>
            <div className={`viewer__stage viewer__stage--${piece.key}`} aria-hidden="true">
              <div key={piece.key} className="viewer__art">
                {piece.art}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
