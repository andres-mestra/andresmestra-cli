import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'

import Logo from '../Logo'
import NavList from './NavList'
import {
  nav,
  nav__header,
  nav__body,
} from '../../styles/layout/NavAdmin.module.scss'

const NavAdmin = () => {
  const { editorNav, setEditorNav } = useContext(AdminContext)
  return (
    <nav className={nav}>
      <header className={nav__header}>
        <div>
          <Logo />
        </div>
      </header>
      <section className={nav__body}>
        <NavList
          title={editorNav.title}
          items={editorNav.items}
          active={editorNav.active}
          setActive={setEditorNav}
        />
      </section>
    </nav>
  )
}

export default NavAdmin
