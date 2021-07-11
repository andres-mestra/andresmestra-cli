import React from 'react'

const PaginateMenuContext = () => {
  return <div></div>
}

export default PaginateMenuContext

/* import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { AdminContext } from './AdminContext'
import paginateState from '../utils/paginations'

export const PaginateMenuContext = createContext()

export const PaginateMenuProvider = ({ children }) => {
  const [paginateMenu, setPaginateMenu] = useState(paginateState[active.text])

  const paginatePosts = useCallback(
    (type, index) => {
      setPaginateMenu(({ paginate, menus }) => {
        const [_, value] = menus[type][index]
        if (value === null) {
          delete paginate[type]
          return {
            paginate: { ...paginate },
            menus: { ...menus },
          }
        }

        paginate[type] = value
        return {
          paginate: { ...paginate },
          menus: { ...menus },
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
 */
