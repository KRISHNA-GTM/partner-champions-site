import logoWhite from '../../assets/logo-white.png'
import { COMPANY_NAME, SOCIAL_LINKS, TAGLINE } from '../../config/site'
import { NAV_ITEMS } from '../../data/content'
import { BookingCta } from '../contact/BookingCta'
import { CopyEmail } from '../contact/CopyEmail'
import { ArrowRight } from '../ui/Icons'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  const socials = SOCIAL_LINKS.filter((s) => s.href.trim())

  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" aria-label="Partner Champions, back to top">
              <img src={logoWhite} alt="Partner Champions LLC" width={751} height={204} className="footer__logo" />
            </a>
            <p className="footer__tagline">{TAGLINE}</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <p className="footer__heading">Explore</p>
            <ul>
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`}>{n.label}</a>
                </li>
              ))}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="footer__col">
            <p className="footer__heading">Contact</p>
            <CopyEmail tone="dark" />
            <BookingCta className="text-link footer__talk">
              <span>Let's talk</span> <ArrowRight size={16} />
            </BookingCta>
            {socials.length > 0 && (
              <ul className="footer__social">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {COMPANY_NAME}. All rights reserved.
          </p>
          <a href="#top" className="footer__top-link">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
