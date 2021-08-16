import { CardProject } from '../ui/cards/CardProject'
import { HeaderLarge } from '../ui/headers/HeaderLarge'
import { projects } from '../../utils/projects'

import sty from '../../styles/components/me/projects.module.scss'

export const Projects = () => {
  return (
    <section className="container_grid" id="projects">
      <div className={sty.projects_header}>
        <HeaderLarge title="Proyectos" />
      </div>
      <div className={sty.projects_content}>
        {projects.map((project) => (
          <CardProject key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
