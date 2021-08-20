import { NavBarItem } from './NavBarItem'
import { navigationList } from '../../utils/navigationsList'
import sty from '../../helpers/styles/StyleNavBar'

export const NavBar = ({ mobile }) => {
  return (
    <nav className={sty.nav_bar}>
      {navigationList.map((route) => (
        <NavBarItem key={route?.text} mobile={mobile} {...route} />
      ))}
    </nav>
  )
}
