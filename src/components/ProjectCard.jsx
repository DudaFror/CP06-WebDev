import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ id, title, description, tech }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span><strong>Tecnologias:</strong> {tech}</span>
      <Link to={`/projetos/${id}`} className="details-btn">Ver mais</Link>
    </div>
  )
}

export default ProjectCard