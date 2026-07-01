import { FaStar } from 'react-icons/fa'
import ExperienceCard from './ExperienceCard'
import './Experience.css'
import { experiences } from '../conts'



export default function Experience() {
  return (
    <section className="experience">
      <h2 id="experiencia">Experiencia <FaStar className="section-icon" /></h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  )
}
