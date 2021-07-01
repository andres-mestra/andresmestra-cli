import { useCallback, useContext, useState } from 'react'
import { PaginateMenuContext } from '../../context/PaginateMenuContext'
import ContentFilterButton from './ContentFilterButton'
import ContentFilterList from './ContentFilterList'
import { filter } from '../../styles/components/editor/contentPag.module.scss'

const ContentFilter = ({ type, options, rootType, handleView, view }) => {
  const context = useContext(PaginateMenuContext)
  const [_, handleChange] = context[rootType]
  const [select, setSelect] = useState(0)

  const handleClick = useCallback(
    (index) => {
      setSelect(index)
      handleView(type)
      handleChange(type, index)
    },
    [setSelect, handleChange, handleView]
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
