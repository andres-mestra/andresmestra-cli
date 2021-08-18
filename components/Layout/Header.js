import { useState } from 'react'
import { NavBar } from './NavBar'
import { MovilBar } from './MovilBar'
import sty from '../../styles/layout/header.module.scss'

export const Header = () => {
  const [active, setActive] = useState(false)

  const handleChange = () => {
    setActive(!active)
  }

  return (
    <>
      <header className={`${sty.header} ${active && sty.header_view}`}>
        <div>
          <h2>AndresMestra</h2>
        </div>
        <NavBar />
      </header>
      <MovilBar change={handleChange} />
      <div
        onClick={handleChange}
        className={`${sty.overlay} ${active && sty.overlay_view}`}
      ></div>
    </>
  )
}
