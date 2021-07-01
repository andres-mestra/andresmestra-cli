import { memo } from 'react'
import Icon from '../Icon'
import {
  filter__button,
  filter__icon,
} from '../../styles/components/editor/contentPag.module.scss'

const ContentFilterButton = memo(({ text, handleClick }) => {
  return (
    <button className={filter__button} onClick={handleClick}>
      <span>{text}</span>
      <Icon
        href="images/sprite.svg#icon-chevron-small-down"
        className={filter__icon}
      />
    </button>
  )
})

export default ContentFilterButton
