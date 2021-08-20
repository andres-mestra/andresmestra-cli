import { Link } from 'react-scroll'
import { useMenu } from '../../hooks/useMenu'
import sty from '../../helpers/styles/StyleNavBar'

export const NavBarItem = ({ to, text, route, mobile }) => {
  const { handleActive } = useMenu()
  const props = {
    to,
    href: route,
    smooth: true,
    spy: true,
    duration: 500,
    onClick: mobile ? handleActive : () => {},
  }

  return (
    <Link className={sty.nav_bar__link} {...props}>
      {text}
    </Link>
  )
}
