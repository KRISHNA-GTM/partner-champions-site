import { vars } from '../../utils/style'
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

function Email() {
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

function Webinar() {
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

const KIT = [
  { name: 'Partner email sequence', meta: '3 emails', type: 'DOC' },
  { name: 'Social posts and images', meta: '6 posts', type: 'IMG' },
  { name: 'Co-branded landing page', meta: 'Template', type: 'WEB' },
  { name: 'Sales one-pager', meta: '1 page', type: 'PDF' },
  { name: 'Call script and follow-up', meta: 'Talk track', type: 'DOC' },
]

function CampaignKit() {
  return (
    <div className="mk mk-kit">
      <div className="mk-kit__head">
        <span className="mk-kit__folder" />
        <div>
          <p className="mk-kit__t">Partner Campaign Kit</p>
          <p className="mk-kit__s">Cloud cost review · Q3</p>
        </div>
      </div>
      <ul className="mk-kit__files">
        {KIT.map((f) => (
          <li key={f.name}>
            <span className={`mk-file mk-file--${f.type.toLowerCase()}`}>{f.type}</span>
            <b>{f.name}</b>
            <small>{f.meta}</small>
            <span className="mk-check" />
          </li>
        ))}
      </ul>
      <div className="mk-kit__foot">
        <span className="mk-pill">Ready to co-brand</span>
        <span className="mk-btn mk-btn--sm">Download kit</span>
      </div>
    </div>
  )
}

const ACCOUNTS = [
  { a: 'Account 01', seg: 'Healthcare', owner: 'Partner A', angle: 'Compliance costs', tier: 1 },
  { a: 'Account 02', seg: 'Retail', owner: 'Partner B', angle: 'Seasonal scaling', tier: 1 },
  { a: 'Account 03', seg: 'Financial services', owner: 'Partner A', angle: 'Renewal timing', tier: 2 },
  { a: 'Account 04', seg: 'Manufacturing', owner: 'Partner C', angle: 'Usage audit', tier: 2 },
]

function AbmBrief() {
  return (
    <div className="mk mk-abm">
      <div className="mk-abm__head">
        <p className="mk-abm__t">ABM brief · Wave 1</p>
        <span className="mk-pill mk-pill--blue">4 target accounts</span>
      </div>
      <div className="mk-abm__table" role="presentation">
        <div className="mk-abm__row mk-abm__row--h">
          <span>Account</span>
          <span>Segment</span>
          <span>Partner owner</span>
          <span>Message angle</span>
        </div>
        {ACCOUNTS.map((r) => (
          <div key={r.a} className="mk-abm__row">
            <span>
              <i className={`mk-tier mk-tier--${r.tier}`}>T{r.tier}</i>
              {r.a}
            </span>
            <span>{r.seg}</span>
            <span>{r.owner}</span>
            <span>{r.angle}</span>
          </div>
        ))}
      </div>
      <ol className="mk-abm__plan">
        <li>
          <small>Wk 1</small>Email
        </li>
        <li>
          <small>Wk 2</small>LinkedIn
        </li>
        <li>
          <small>Wk 3</small>Event invite
        </li>
        <li>
          <small>Wk 4</small>Partner call
        </li>
      </ol>
    </div>
  )
}

const CHAPTERS = ['Who to target', 'Key messages', 'Handling objections', 'Campaign calendar']

function Playbook() {
  return (
    <div className="mk mk-book">
      <div className="mk-book__cover">
        <CoBrand />
        <span className="mk-kicker mk-kicker--light">Partner playbook</span>
        <p>Selling the cloud cost review</p>
        <small>For partner sales teams · v1.0</small>
      </div>
      <div className="mk-book__page">
        <p className="mk-book__h">Contents</p>
        <ol>
          {CHAPTERS.map((c, i) => (
            <li key={c}>
              <span>0{i + 1}</span>
              {c}
              <i>{4 + i * 3}</i>
            </li>
          ))}
        </ol>
        <div className="mk-book__quote">
          <span className="mk-kicker">Talk track</span>
          <p>"When is your next cloud renewal? We can show you where the spend goes before then."</p>
        </div>
      </div>
    </div>
  )
}

const PIECES = [
  { key: 'lp', label: 'Co-branded landing page', service: 'Co-Marketing & Content', art: <LandingPage /> },
  { key: 'wb', label: 'Webinar promotion', service: 'Webinars & Events', art: <Webinar /> },
  { key: 'em', label: 'Partner email campaign', service: 'Partner Campaigns', art: <Email /> },
  { key: 'li', label: 'LinkedIn campaign', service: 'Co-Marketing & Content', art: <SocialPost /> },
  { key: 'kit', label: 'Partner campaign kit', service: 'Partner Enablement', art: <CampaignKit /> },
  { key: 'abm', label: 'ABM campaign brief', service: 'Account-Based Marketing', art: <AbmBrief /> },
  { key: 'pb', label: 'Partner playbook', service: 'Partner Enablement', art: <Playbook /> },
]

export function Showcase() {
  return (
    <section id="work" className="work section on-dark" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow="What execution looks like"
          layout="split"
          title={
            <>
              Campaigns partners can <span className="hl">put to work.</span>
            </>
          }
          lead="One campaign, built out across the assets partners actually use. These are illustrative examples of the work we produce, made for this site. They are not client campaigns."
        />

        <ul className="work__grid">
          {PIECES.map((p, i) => (
            <li key={p.key} className={`piece piece--${p.key} reveal`} style={vars({ '--delay': `${(i % 3) * 80}ms` })}>
              <figure>
                <div className="piece__stage" aria-hidden="true">
                  {p.art}
                </div>
                <figcaption>
                  <b>{p.label}</b>
                  <span>{p.service}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="work__hint" aria-hidden="true">
          Swipe to see more
        </p>
      </div>
    </section>
  )
}
