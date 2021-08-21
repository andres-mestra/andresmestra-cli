import { useMenu } from '../../hooks/useMenu'
import Icon from '../Icon'
import { MyName } from './MyName'
import { NavBar } from './NavBar'
import sty from '../../styles/layout/movilBar.module.scss'

export const MovilBar = () => {
  const { active, handleActive } = useMenu()

  return (
    <>
      <button className={sty.button} onClick={handleActive}>
        <Icon className={sty.icon} href="images/sprite.svg#icon-menu" />
      </button>

      <div className={`${sty.menu} ${active && sty.menu_view}`}>
        <MyName />
        <NavBar mobile={true} />
      </div>
      <div
        onClick={handleActive}
        className={`${sty.overlay} ${active && sty.overlay_view}`}
      ></div>
    </>
  )
}
