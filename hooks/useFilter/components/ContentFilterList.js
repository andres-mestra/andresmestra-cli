import ContentFilterItem from './ContentFilterItem'
import {
  filter__dropdowm_active,
  filter__menu,
} from '../styles/contentPag.module.scss'
const ContentFilterList = ({ options, handleClick }) => {
  return (
    <div className={filter__dropdowm_active}>
      <ul className={filter__menu}>
        {options.map(([text], index) => (
          <ContentFilterItem
            key={text}
            handleClick={() => handleClick(index)}
            text={text}
          />
        ))}
      </ul>
    </div>
  )
}

export default ContentFilterList
