import { FaInstagram, FaLinkedin, FaGithub, FaFile, FaCode } from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="soydani">
      <div className="hero-content">
        <h1>Soy Dani!!</h1>
        <h2>Desarrollador web <FaCode className="hero-icon" /></h2>
        <p>Soy Daniel Nogales Mateos y me encanta el desarrollo web y espero que mi perfil sea el adecuado.</p>
        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/daniiinogaleees/" className="btn" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/daniel-nogales-mateos-896a18370" className="btn" target="_blank" rel="noopener noreferrer">
              <span>Linkedin</span>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/daninogales30" className="btn" target="_blank" rel="noopener noreferrer">
              <span>Github</span>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="/docs/Daniel%20Nogales%20Mateos%20CV%20actualizado.pdf" download className="btn">
              <span>Descargar CV</span>
              <FaFile />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
