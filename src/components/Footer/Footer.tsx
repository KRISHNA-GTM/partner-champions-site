import logoWhite from '../../assets/logo-white.png'
import { COMPANY_NAME, CONTACT_EMAIL, DOMINANT_CTA, SOCIAL_LINKS } from '../../config/site'
import { NAV_ITEMS } from '../../data/content'
import { BookingCta } from '../contact/BookingCta'
import { mailtoHref } from '../../utils/contact'
import { ArrowRight } from '../ui/Icons'
import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

/** The page ending: closing call to action and footer in one block. */
export function Footer() {
  const socials = SOCIAL_LINKS.filter((s) => s.href.trim())

  return (
    <footer id="contact" className="footer on-dark" aria-labelledby="closing-title">
      <div className="container">
        <div className="footer__cta">
          <h2 id="closing-title" className="footer__title">Let’s talk about your partner marketing.</h2>
          <div className="footer__cta-side">
            <p>
              Tell us where your partner marketing needs help. We’ll talk through your goals, your partners and what you
              need to get moving.
            </p>
            <div className="footer__actions">
              <BookingCta>
                {DOMINANT_CTA} <ArrowRight />
              </BookingCta>
              <a href="#work" className="footer__link">
                See a campaign
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <a href="#top" className="footer__brand" aria-label="Partner Champions, back to top">
            <img src={logoWhite} alt="Partner Champions LLC" width={751} height={204} className="footer__logo" />
          </a>
          <nav aria-label="Footer">
            <ul className="footer__nav">
              {NAV_ITEMS.filter((n) => n.id !== 'contact').map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`}>{n.label}</a>
                </li>
              ))}
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={mailtoHref()} className="footer__email">
            {CONTACT_EMAIL}
          </a>
          <p className="footer__legal">
            © {CURRENT_YEAR} {COMPANY_NAME}
          </p>
        </div>
      </div>
    </footer>
  )
}
