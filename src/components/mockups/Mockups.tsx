import './Mockups.css'

/* Placeholder co-brand marks. Deliberately generic: no real or invented client logos. */
export const BrandMark = () => (
  <span className="mk-brand">
    <i className="mk-brand__sq" />
    Your Brand
  </span>
)
export const PartnerMark = () => (
  <span className="mk-brand mk-brand--partner">
    <i className="mk-brand__ci" />
    Partner
  </span>
)
export const CoBrand = () => (
  <span className="mk-cobrand">
    <BrandMark />
    <span className="mk-x">×</span>
    <PartnerMark />
  </span>
)

export function LandingPage() {
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
      <p className="mk-webinar__h">Cloud cost control: a 90‑day plan</p>
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

export function SocialPost() {
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

export function SalesKit() {
  return (
    <div className="mk mk-kit-doc">
      <div className="mk-kit-doc__head">
        <b>Partner talk track</b>
        <span>Cloud Cost Review</span>
      </div>
      <ol>
        <li>
          <b>Opener</b>
          <span>“Renewal is coming up. Do you know where your cloud spend goes today?”</span>
        </li>
        <li>
          <b>Discovery</b>
          <span>Monthly spend, number of accounts, who owns the bill.</span>
        </li>
        <li>
          <b>If they say “we already track it”</b>
          <span>Offer the review as a second opinion with a 90-day plan.</span>
        </li>
        <li>
          <b>Next step</b>
          <span>Book the free review or invite them to the webinar.</span>
        </li>
      </ol>
    </div>
  )
}
