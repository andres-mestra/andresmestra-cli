import { Picture } from '../images/Picture'
import sty from '../../../styles/components/ui/cardProjects.module.scss'

export const CardProject = ({ images, name, description, github, url }) => {
  return (
    <a href={url} target="_blank">
      <div className={sty.content}>
        <Picture className={sty.image} images={images} />
        <h4 className={sty.title}>{name}</h4>
        <p className={sty.description}>{description}</p>

        <a href={github} target="_blank" className={sty.link}>
          <svg className={sty.icon}>
            <use xlinkHref="images/sprite.svg#icon-github"></use>
          </svg>
          <span>Github</span>
        </a>
        <a href={url} target="_blank" className={sty.view}>
          <svg className={sty.icon}>
            <use xlinkHref="images/sprite.svg#icon-new-tab"></use>
          </svg>
        </a>
      </div>
    </a>
  )
}
