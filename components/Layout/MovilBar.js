import { useState } from 'react'
import Icon from '../Icon'
import { MyName } from './MyName'
import { NavBar } from './NavBar'
import sty from '../../styles/layout/movilBar.module.scss'

export const MovilBar = () => {
  const [active, setActive] = useState(false)
  const handleChange = () => {
    setActive(!active)
  }

  return (
    <>
      <div className={sty.bar}>
        <button className={sty.button} onClick={handleChange}>
          <Icon className={sty.icon} href="images/sprite.svg#icon-menu" />
        </button>
      </div>
      <div className={`${sty.menu} ${active && sty.menu_view}`}>
        <MyName />
        <NavBar />
      </div>
      <div
        onClick={handleChange}
        className={`${sty.overlay} ${active && sty.overlay_view}`}
      ></div>
    </>
  )
}
