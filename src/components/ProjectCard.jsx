import { FaAngleDoubleRight } from 'react-icons/fa'
import './ProjectCard.css'

export default function ProjectCard({ title, desc, img, url }) {
  return (
    <article className="project-card">
      <div className="project-img">
        <img src={img} alt={title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={url} className="btn" target="_blank" rel="noopener noreferrer">
          <span>Ver más</span>
          <FaAngleDoubleRight />
        </a>
      </div>
    </article>
  )
}
