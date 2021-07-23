import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { postInit } from '../utils/formInit'

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false)
  const newPost = useFormik({ ...postInit })
  const { values, ...actions } = newPost

  const router = useRouter()

  return (
    <PostsContext.Provider
      value={{
        showSettings,
        setShowSettings,
        post: values,
        actions,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
