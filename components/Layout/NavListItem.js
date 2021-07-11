import Link from 'next/link'
import {
  navList__item,
  navList__icon,
  navList__item_active,
} from '../../styles/layout/navList.module.scss'

const NavListItem = ({ item }) => {
  return (
    <li>
      <Link href={`/admin/${item.text}`}>
        <a className={`${navList__item}`}>
          <svg className={navList__icon}>
            <use xlinkHref={`/images/sprite.svg#${item.icon}`}></use>
          </svg>
          <span>{item.text}</span>
        </a>
      </Link>
    </li>
  )
}

export default NavListItem
