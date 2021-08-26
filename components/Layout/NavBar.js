import { NavBarItem } from './NavBarItem'
import { navigationList } from '../../utils/navigationsList'
import sty from '../../helpers/styles/StyleNavBar'

export const NavBar = ({ mobile }) => {
  return (
    <nav className={sty.nav_bar}>
      {navigationList.map((route) => (
        <NavBarItem key={route?.text} mobile={mobile} {...route} />
      ))}
      <a
        className={sty.nav_bar__link}
        href="https://www.linkedin.com/in/jhon-andres-mestra-tapias-aa2318203/"
        target="_blank"
      >
        Contact
      </a>
    </nav>
  )
}
