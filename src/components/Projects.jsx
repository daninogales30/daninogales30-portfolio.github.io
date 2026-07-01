import { FaBook } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import { projects } from '../conts.js'
import './Projects.css'



export default function Projects() {
  return (
    <section className="projects">
      <h2 id="proyectos">Proyectos <FaBook className="section-icon" /></h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
