import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { AdminContext } from './AdminContext'
import paginateState from '../utils/paginateState'

export const PaginateMenuContext = createContext()

export const PaginateMenuProvider = ({ children }) => {
  const {
    editorNav: { active },
  } = useContext(AdminContext)
  const [paginateMenu, setPaginateMenu] = useState(paginateState[active.text])

  const paginatePosts = useCallback(
    (type, index) => {
      setPaginateMenu(({ paginate, menus }) => {
        const [_, value] = menus[type][index]
        if (value === null) {
          delete paginate[type]
          return {
            paginate,
            menus,
          }
        }

        paginate[type] = value
        return {
          paginate,
          menus,
        }
      })
    },
    [setPaginateMenu]
  )

  return (
    <PaginateMenuContext.Provider
      value={{
        posts: [paginateMenu, paginatePosts],
      }}
    >
      {children}
    </PaginateMenuContext.Provider>
  )
}
