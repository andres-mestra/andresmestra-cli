import { memo } from 'react'
import { filter__item } from '../../styles/components/editor/contentPag.module.scss'

const ContentFilterItem = memo(({ text, handleClick }) => {
  return (
    <li key={text} className={filter__item} onClick={handleClick}>
      {text}
    </li>
  )
})

export default ContentFilterItem
