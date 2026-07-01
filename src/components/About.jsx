import { FaUser } from 'react-icons/fa'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <h2 id="sobremii">Sobre mi <FaUser className="section-icon" /></h2>
      <div className="about-container">
        <div className="about-text">
          <p>Me llamo Daniel Nogales Mateos pero me gusta que me llamen directamente Dani. Empecé estudiando bachillerato con las ganas de poder estudiar desarrollo web.</p>
          <p>Actualmente, he cursado el <abbr title="Ciclo Formativo de Grado Superior">CFGS</abbr> de <abbr title="Desarrollo de Aplicaciones Web">DAW</abbr> en Jerez de la Frontera, y estoy con más ganas que nunca de aprender más lenguajes y progresar tanto como en conocimientos, como en experiencia.</p>
          <p>Desde pequeño me ha apasionado este mundo, siempre he sido un amante de la informatica y de la mayoría de sus campos, por lo que me encanta todo este mundillo y estoy dispuesto a aprender y a seguir disfrutando.</p>
        </div>
        <div className="about-img">
          <img src="/imgs/foto-carne.ico" alt="Foto de Dani" />
        </div>
      </div>
    </section>
  )
}
