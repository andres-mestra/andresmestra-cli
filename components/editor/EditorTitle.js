import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import {
  editor__title,
  editor__title_textarea,
} from '../../styles/components/editor/editorpost.module.scss'

const EditorTitle = () => {
  const { post, actions } = useContext(PostsContext)

  return (
    <section className={editor__title}>
      <textarea
        id="title"
        className={editor__title_textarea}
        type="text"
        placeholder="Post title"
        value={post.title}
        onChange={actions.handleChange}
      />
    </section>
  )
}

export default EditorTitle
