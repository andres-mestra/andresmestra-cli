import { useState } from 'react'
import {
  editor__title,
  editor__title_textarea,
} from '../../styles/components/editor/editorpost.module.scss'

const EditorTitle = ({ title }) => {
  const [value, setvalue] = useState(title)
  const handleChange = ({ target }) => {
    setvalue(target.value)
    console.log(target.value)
  }

  return (
    <section className={editor__title}>
      <textarea
        className={editor__title_textarea}
        type="text"
        placeholder="Post title"
        value={value}
        onChange={handleChange}
      />
    </section>
  )
}

export default EditorTitle
