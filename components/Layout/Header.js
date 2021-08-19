import { NavBar } from './NavBar'
import { MyName } from './MyName'
import sty from '../../styles/layout/header.module.scss'

export const Header = () => {
  return (
    <>
      <header className={sty.header}>
        <MyName />
        <NavBar />
      </header>
    </>
  )
}
