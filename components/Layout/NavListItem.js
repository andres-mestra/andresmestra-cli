import Link from 'next/link'
import sty from '../../styles/layout/navList.module.scss'

const NavListItem = ({ text, icon, active }) => {
  return (
    <li
      className={`${sty.navList__item} ${active && sty.navList__item_active}`}
    >
      <svg className={sty.navList__icon}>
        <use xlinkHref={`images/sprite.svg#${icon}`}></use>
      </svg>
      <Link href={`#${text}`}>
        <a className={sty.navList__link}>{text}</a>
      </Link>
    </li>
  )
}

export default NavListItem
