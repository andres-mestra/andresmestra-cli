import Logo from '../Logo'
import NavList from './NavList'
import { MenuEditor } from '../../utils/menus'
import {
  nav,
  nav__header,
  nav__body,
} from '../../styles/layout/NavAdmin.module.scss'

const NavAdmin = () => {
  return (
    <nav className={nav}>
      <header className={nav__header}>
        <div>
          <Logo />
        </div>
      </header>
      <section className={nav__body}>
        <NavList title={MenuEditor.title} items={MenuEditor.items} />
      </section>
    </nav>
  )
}

export default NavAdmin
