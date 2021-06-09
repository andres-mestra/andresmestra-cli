import {
  navList,
  navList__items,
  navList__title,
} from '../../styles/layout/navList.module.scss'
import NavListItem from './NavListItem'

const NavList = ({ title, items }) => {
  return (
    <div className={navList}>
      <div className={navList__title}>
        <p>{title}</p>
      </div>
      <ul className={navList__items}>
        {items.map((item) => {
          return <NavListItem {...item} key={item.text} />
        })}
      </ul>
    </div>
  )
}

export default NavList
