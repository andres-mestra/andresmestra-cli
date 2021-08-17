import { CardProject } from '../ui/cards/CardProject'
import { HeaderLarge } from '../ui/headers/HeaderLarge'
import { projects } from '../../utils/projects'

import sty from '../../styles/components/me/projects.module.scss'

export const Projects = () => {
  return (
    <section className={sty.projects} id="projects">
      <HeaderLarge title="Proyectos" align="center" />
      <div className="container_grid">
        <div className={sty.projects_content}>
          {projects.map((project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
