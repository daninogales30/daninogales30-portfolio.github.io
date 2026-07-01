import './ExperienceCard.css'

export default function ExperienceCard({ date, title, desc }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <time>{date}</time>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
