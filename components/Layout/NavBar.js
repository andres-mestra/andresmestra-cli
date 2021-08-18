import { NavBarItem } from './NavBarItem'
import { navigationList } from '../../utils/navigationsList'
import sty from '../../helpers/styles/StyleNavBar'

export const NavBar = ({ change }) => {
  return (
    <nav className={sty.nav_bar} onClick={change}>
      {navigationList.map(({ text, to }) => (
        <NavBarItem key={text} to={to} text={text} />
      ))}
    </nav>
  )
}
