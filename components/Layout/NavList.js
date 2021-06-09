import sty from '../../styles/layout/navList.module.scss'
import NavListItem from './NavListItem'

const NavList = ({ title, items }) => {
  return (
    <div className={sty.navList}>
      <div className={sty.navList__title}>
        <p>{title}</p>
      </div>
      <ul className={sty.navList__items}>
        {items.map((item) => {
          return <NavListItem {...item} key={item.text} />
        })}
      </ul>
    </div>
  )
}

export default NavList
