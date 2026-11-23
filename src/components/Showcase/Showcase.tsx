import type { ReactNode } from 'react'
import { CAMPAIGN } from '../../data/content'
import { CoBrand, Email, LandingPage, SalesKit, SocialPost, Webinar } from '../mockups/Mockups'
import { SectionHeading } from '../ui/SectionHeading'
import './Showcase.css'

type Asset = { key: string; name: string; text: string; art: ReactNode }

/* Every asset on screen at once: no tabs, nothing to click to understand the offer. */
const ASSETS: Asset[] = [
  { key: 'lp', name: 'Co-branded landing page', text: 'Lead capture routed straight to the partner’s reps.', art: <LandingPage /> },
  { key: 'em', name: 'Three-email sequence', text: 'Written in the partner’s voice, ready to send.', art: <Email /> },
  { key: 'so', name: 'Social posts', text: 'Copy and graphics reps can publish as is.', art: <SocialPost /> },
  { key: 'kt', name: 'Sales talk track', text: 'What reps say on the call, objections included.', art: <SalesKit /> },
  { key: 'wb', name: 'Joint webinar', text: 'Slides, promotion and hosting, handled.', art: <Webinar /> },
]

export function Showcase() {
  return (
    <section id="work" className="work section on-dark" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading id="work-title" title={CAMPAIGN.headline} lead={CAMPAIGN.lead} layout="split" />

        <div className="camp">
          <ol className="camp__steps">
            <li className="camp__step">
              <span className="camp__n" aria-hidden="true">1</span>
              <h3>The offer</h3>
              <div className="camp__offer">
                <CoBrand />
                <strong>{CAMPAIGN.offer.name}</strong>
                <p>{CAMPAIGN.offer.detail}</p>
              </div>
            </li>
            <li className="camp__step">
              <span className="camp__n" aria-hidden="true">2</span>
              <h3>The plan</h3>
              <ul className="camp__plan">
                {CAMPAIGN.plan.map((p) => (
                  <li key={p.when}>
                    <b>{p.when}</b>
                    <span>{p.what}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li className="camp__step">
              <span className="camp__n" aria-hidden="true">3</span>
              <h3>The assets</h3>
              <p className="camp__note">Five pieces, all co-branded and approved before they reach a partner.</p>
            </li>
          </ol>

          <div className="camp__assets">
            {ASSETS.map((a) => (
              <figure key={a.key} className={`asset asset--${a.key}`}>
                <div className="asset__stage" aria-hidden="true">{a.art}</div>
                <figcaption>
                  <b>{a.name}</b> {a.text}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p className="camp__job">{CAMPAIGN.partnerJob}</p>
      </div>
    </section>
  )
}
