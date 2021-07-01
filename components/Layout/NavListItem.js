import {
  navList__item,
  navList__icon,
  navList__item_active,
} from '../../styles/layout/navList.module.scss'

const NavListItem = ({ item, active, setActive }) => {
  const handleClick = () => {
    setActive((state) => {
      return {
        ...state,
        active: { ...item },
      }
    })
  }

  return (
    <li
      className={`${navList__item} ${
        active.text === item.text && navList__item_active
      }`}
      onClick={handleClick}
    >
      <svg className={navList__icon}>
        <use xlinkHref={`images/sprite.svg#${item.icon}`}></use>
      </svg>
      <span>{item.text}</span>
    </li>
  )
}

export default NavListItem
