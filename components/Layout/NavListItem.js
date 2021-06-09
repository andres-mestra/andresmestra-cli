import Link from 'next/link'
import {
  navList__item,
  navList__icon,
  navList__link,
  navList__item_active,
} from '../../styles/layout/navList.module.scss'

const NavListItem = ({ text, icon, active }) => {
  return (
    <li className={`${navList__item} ${active && navList__item_active}`}>
      <svg className={navList__icon}>
        <use xlinkHref={`images/sprite.svg#${icon}`}></use>
      </svg>
      <Link href={`#${text}`}>
        <a className={navList__link}>{text}</a>
      </Link>
    </li>
  )
}

export default NavListItem
