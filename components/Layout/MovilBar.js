import Icon from '../Icon'
import sty from '../../styles/layout/movilBar.module.scss'

export const MovilBar = ({ change }) => {
  return (
    <div className={sty.bar}>
      <button className={sty.button} onClick={change}>
        <Icon className={sty.icon} href="images/sprite.svg#icon-menu" />
      </button>
    </div>
  )
}
