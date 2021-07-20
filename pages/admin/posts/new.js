import { useState } from 'react'
import dynamic from 'next/dynamic'
import MarkdownIt from 'markdown-it'
import * as ReactMarkdown from 'react-markdown'
import EditorHeader from '../../../components/editor/EditorHeader'
import EditorTitle from '../../../components/editor/EditorTitle'

import 'react-markdown-editor-lite/lib/index.css'
import { editor__container } from '../../../styles/components/editor/editorpost.module.scss'
import SettingsMenu from '../../../components/settings/SettingsMenu'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
})

const mdParser = new MarkdownIt()

const NewPost = () => {
  const [text, setText] = useState('')

  const handleRender = (text) => {
    return mdParser.render(text)
  }

  const handleChange = ({ text, html }) => {
    setText(text)
  }

  return (
    <div className={editor__container}>
      <EditorHeader text="posts" status="Draft" url="/admin/posts" />
      <SettingsMenu />
      <EditorTitle title={'(Untitled)'} />
      <MdEditor
        style={{ height: '500px' }}
        renderHTML={handleRender}
        onChange={handleChange}
        onBlur={(a) => console.log(a)}
        onImageUpload={(img) => console.log({ img })}
      />
      {/* <div>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div> */}
    </div>
  )
}

export default NewPost
