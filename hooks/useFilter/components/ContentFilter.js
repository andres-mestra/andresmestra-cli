import { useCallback, useState } from 'react'
import ContentFilterButton from './ContentFilterButton'
import ContentFilterList from './ContentFilterList'

import { filter } from '../styles/contentPag.module.scss'

const ContentFilter = ({
  type,
  options,
  view,
  handleView,
  changeSelection,
}) => {
  const [select, setSelect] = useState(0)
  const handleClick = useCallback(
    (index) => {
      setSelect(index)
      changeSelection({ type, index })
    },
    [setSelect, changeSelection]
  )

  return (
    <div className={filter}>
      <ContentFilterButton
        text={options[select][0]}
        handleClick={() => handleView(type)}
      />
      {view === type && (
        <ContentFilterList options={options} handleClick={handleClick} />
      )}
    </div>
  )
}

export default ContentFilter
