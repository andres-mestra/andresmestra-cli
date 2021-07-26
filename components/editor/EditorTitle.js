import { useContext, useState } from 'react'
import { PostsContext } from '../../context/PostsContext'
import { slugCreate } from '../../helpers/slugCreate'
import {
  editor__title,
  editor__title_textarea,
} from '../../styles/components/editor/editorpost.module.scss'

const EditorTitle = () => {
  const { post, actions } = useContext(PostsContext)
  const handleChange = (e) => {
    const { value } = e.target
    actions.setValues((values) => ({
      ...values,
      title: value.trim(),
      slug: slugCreate(value),
    }))
  }

  return (
    <section className={editor__title}>
      <textarea
        id="title"
        className={editor__title_textarea}
        type="text"
        placeholder="Post title"
        value={post.title}
        onChange={handleChange}
      />
    </section>
  )
}

export default EditorTitle
