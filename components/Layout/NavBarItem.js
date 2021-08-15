import { Link } from 'react-scroll'
import sty from '../../helpers/styles/StyleNavBar'

export const NavBarItem = ({ text, to, active }) => {
  return (
    <li>
      <Link
        className={sty.nav_bar__link}
        to={to}
        smooth={true}
        spy={true}
        duration={500}
      >
        {text}
      </Link>
    </li>
  )
}
