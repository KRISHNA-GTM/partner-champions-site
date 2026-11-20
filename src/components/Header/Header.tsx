import { useEffect, useRef, useState, type CSSProperties } from 'react'
import logoColor from '../../assets/logo-color.png'
import logoWhite from '../../assets/logo-white.png'
import { NAV_ITEMS } from '../../data/content'
import { useScrollSpy } from '../../hooks/usePageEffects'
import { BookingCta } from '../contact/BookingCta'
import { CopyEmail } from '../contact/CopyEmail'
import { ArrowRight } from '../ui/Icons'
import './Header.css'

const NAV_IDS = NAV_ITEMS.map((n) => n.id)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(NAV_IDS)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: lock scroll, close on Esc, keep Tab inside the header, close on resize to desktop.
  useEffect(() => {
    if (!menuOpen) return
    document.body.classList.add('is-locked')

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !headerRef.current) return
      const focusables = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((el) => el.offsetParent !== null)
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const mql = window.matchMedia('(min-width: 961px)')
    const onWide = () => mql.matches && setMenuOpen(false)

    document.addEventListener('keydown', onKey)
    mql.addEventListener('change', onWide)
    return () => {
      document.body.classList.remove('is-locked')
      document.removeEventListener('keydown', onKey)
      mql.removeEventListener('change', onWide)
    }
  }, [menuOpen])

  const solid = scrolled && !menuOpen

  return (
    <header
      ref={headerRef}
      className={`site-header ${solid ? 'is-solid' : ''} ${menuOpen ? 'is-open' : ''}`}
    >
      <div className="site-header__bar container">
        <a href="#top" className="site-header__logo" aria-label="Partner Champions, back to top" onClick={() => setMenuOpen(false)}>
          <img src={logoWhite} alt="" className="logo logo--white" width={751} height={204} />
          <img src={logoColor} alt="" className="logo logo--color" width={751} height={204} />
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : ''}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <BookingCta className="btn btn--primary btn--small site-header__cta">Let's Talk</BookingCta>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Mobile">
          <ol>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id} style={{ '--i': i } as CSSProperties}>
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  <span className="mobile-menu__num">0{i + 1}</span>
                  {item.label}
                  <ArrowRight size={22} />
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu__foot">
          <BookingCta className="btn btn--primary">
            Let's Talk <ArrowRight />
          </BookingCta>
          <CopyEmail tone="dark" />
        </div>
      </div>
    </header>
  )
}
