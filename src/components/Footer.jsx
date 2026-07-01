import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Footer.css'

const links = [
  { href: 'https://www.instagram.com/daniiinogaleees/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/daniel-nogales-mateos-896a18370', icon: FaLinkedin, label: 'Linkedin' },
  { href: 'https://github.com/daninogales30', icon: FaGithub, label: 'Github' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2024 daninogales30. Casi todos los derechos reservados</span>
        <ul className="footer-socials">
          {links.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
