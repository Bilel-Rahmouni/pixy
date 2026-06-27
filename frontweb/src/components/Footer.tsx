import { Logo } from './Logo'
import './Footer.css'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Twitter', href: '#' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#" className="footer__logo">
            <span className="footer__logo-mark">◆</span>
            PIXY
          </a>
          <nav className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer__social">
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Pixy Studio</span>
          <p className="footer__credit">
            Site by <Logo />
          </p>
        </div>
      </div>
    </footer>
  )
}
