import { CardProject } from '../ui/cards/CardProject'
import { HeaderLarge } from '../ui/headers/HeaderLarge'
import { projects } from '../../utils/projects'

export const Projects = () => {
  return (
    <section className="container_grid" id="projects">
      <div className="projects_header">
        <HeaderLarge title="Proyectos" />
      </div>
      <div className="projects_content">
        {projects.map((project) => (
          <CardProject key={project.name} {...project} />
        ))}
      </div>
      <style jsx>{`
        #projects {
          padding: 5rem 0;
        }

        .projects_header {
          grid-column: center-start / center-end;
          text-align: center;
        }

        .projects_content {
          grid-column: center-start / center-end;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
          grid-gap: 7rem;
        }
      `}</style>
    </section>
  )
}
