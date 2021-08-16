import { CardProject } from '../ui/cards/CardProject'
import { HeaderLarge } from '../ui/headers/HeaderLarge'
const projects = ['1p', '2p', '3p,', '4p', '5p', '6p']
export const Projects = () => {
  return (
    <section className="container_grid" id="projects">
      <div className="projects_header">
        <HeaderLarge title="Proyectos" />
      </div>
      <div className="projects_content">
        {projects.map((project, index) => (
          <CardProject key={index} />
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
