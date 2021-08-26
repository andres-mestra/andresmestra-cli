import { useMenu } from '../../hooks/useMenu'
import { MyName } from './MyName'
import { NavBar } from './NavBar'
import sty from '../../styles/layout/movilBar.module.scss'

export const MovilBar = () => {
  const { active, handleActive } = useMenu()

  return (
    <>
      <input
        checked={active}
        onChange={handleActive}
        type="checkbox"
        className={sty.checkbox}
        id="nav-toggle"
      />
      <label htmlFor="nav-toggle" className={sty.button}>
        <span className={sty.icon}></span>
      </label>
      <div className={`${sty.menu}`}>
        <MyName />
        <NavBar mobile={true} />
      </div>
      <div onClick={handleActive} className={`${sty.overlay}`}></div>
    </>
  )
}
