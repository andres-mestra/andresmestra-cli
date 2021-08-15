import { NavBarItem } from './NavBarItem'
import { navigationList } from '../../utils/navigationsList'
import sty from '../../helpers/styles/StyleNavBar'

export const NavBar = () => {
  return (
    <nav>
      <ul className={sty.nav_bar}>
        {navigationList.map(({ text, to }) => (
          <NavBarItem key={text} to={to} text={text} />
        ))}
      </ul>
    </nav>
  )
}
