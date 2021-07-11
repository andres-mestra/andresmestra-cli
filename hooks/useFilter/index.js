import { useMemo, useState } from 'react'
import ContentFilter from './components/ContentFilter'

import { container } from './styles/contentPag.module.scss'

const useFilter = ({ defaultValue }) => {
  const [filterState, setFilterState] = useState(defaultValue)

  const { menus } = filterState
  const keyMenus = Object.keys(menus)

  const Filter = useMemo(() => {
    return () => {
      const [view, setView] = useState('')

      const handleView = (type) => {
        setView((view) => (type === view ? '' : type))
      }

      const handleSelection = ({ type, index }) => {
        setFilterState((state) => {
          const [_, value] = state.menus[type][index]
          if (value === null) {
            delete state.paginate[type]
            return { ...state }
          }

          state.paginate[type] = value
          return { ...state }
        })
        handleView(type)
      }

      return (
        <section className={container}>
          {keyMenus.map((type) => (
            <ContentFilter
              key={type}
              type={type}
              options={menus[type]}
              view={view}
              handleView={handleView}
              changeSelection={handleSelection}
            />
          ))}
        </section>
      )
    }
  }, [menus])

  return {
    filterState,
    Filter,
  }
}

export default useFilter
