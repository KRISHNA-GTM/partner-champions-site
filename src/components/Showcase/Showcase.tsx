import type { ReactNode } from 'react'
import { CAMPAIGN } from '../../data/content'
import { Email, LandingPage, SalesKit, SocialPost } from '../mockups/Mockups'
import { SectionHeading } from '../ui/SectionHeading'
import './Showcase.css'

type Asset = { key: string; name: string; text: string; art: ReactNode }

/* One large piece of work, three supporting pieces. Readable at full size, nothing to click. */
const SUPPORTING: Asset[] = [
  { key: 'em', name: 'Partner email', text: 'Written in the partner’s voice, ready to send.', art: <Email /> },
  { key: 'so', name: 'Social content', text: 'Posts and graphics reps can publish as is.', art: <SocialPost /> },
  { key: 'kt', name: 'Sales talk track', text: 'What reps say on the call, objections included.', art: <SalesKit /> },
]

export function Showcase() {
  return (
    <section id="work" className="work section on-dark" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading id="work-title" title={CAMPAIGN.headline} lead={CAMPAIGN.lead} layout="split" />

        <ol className="camp__steps">
          {CAMPAIGN.steps.map((s, i) => (
            <li key={s.title} className="camp__step">
              <span className="camp__n" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="camp__lead">
          <div className="camp__lead-stage" aria-hidden="true">
            <LandingPage />
          </div>
          <figcaption>
            <b>Co-branded landing page</b> Lead capture routed straight to the partner’s reps.
          </figcaption>
        </figure>

        <div className="camp__support">
          {SUPPORTING.map((a) => (
            <figure key={a.key} className={`asset asset--${a.key}`}>
              <div className="asset__stage" aria-hidden="true">{a.art}</div>
              <figcaption>
                <b>{a.name}</b> {a.text}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
