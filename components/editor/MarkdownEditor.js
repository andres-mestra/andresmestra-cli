import { useState } from 'react'
import dynamic from 'next/dynamic'
import MarkdownIt from 'markdown-it'
import 'react-markdown-editor-lite/lib/index.css'
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
})

const mdParser = new MarkdownIt()

const MarkdownEditor = () => {
  const [text, setText] = useState('')

  const handleRender = (text) => {
    return mdParser.render(text)
  }

  const handleChange = ({ text, html }) => {
    setText(text)
  }

  return (
    <MdEditor
      style={{ height: '500px' }}
      renderHTML={handleRender}
      onChange={handleChange}
      onBlur={(a) => console.log(a)}
      onImageUpload={(img) => console.log({ img })}
    />
  )
}

export default MarkdownEditor
