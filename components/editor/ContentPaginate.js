import { useCallback, useContext, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { PaginateMenuContext } from '../../context/PaginateMenuContext'
import ContentFilter from './ContentFilter'
import { container } from '../../styles/components/editor/contentPag.module.scss'

const ContentPaginate = () => {
  const {
    editorNav: { active },
  } = useContext(AdminContext)
  const [{ menus }] = useContext(PaginateMenuContext)[active.text]
  const keyMenus = Object.keys(menus)
  const [view, setView] = useState('')

  const handleView = useCallback(
    (type) => {
      setView((view) => (type === view ? '' : type))
    },
    [setView]
  )

  return (
    <section className={container}>
      {keyMenus.map((type) => (
        <ContentFilter
          key={type}
          type={type}
          options={menus[type]}
          rootType={active.text}
          handleView={handleView}
          view={view}
        />
      ))}
    </section>
  )
}

export default ContentPaginate
