import { FaMoon, FaSun } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className="nav-header">
      <nav className="nav">
        <a href="#soydani">Inicio</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#sobremii">Sobre mí</a>
        <a href="mailto:danielnogalesmateos2005@gmail.com" className="nav-contact">Contacto</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar modo">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  )
}
