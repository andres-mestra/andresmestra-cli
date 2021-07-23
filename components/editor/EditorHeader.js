import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'

import Link from 'next/link'
import Icon from '../Icon'
import {
  editor__header,
  editor__return,
  editor__link,
  editor__link_icon,
  editor__status,
  editor__action,
  editor__setting,
  editor__setting_icon,
} from '../../styles/components/editor/editorpost.module.scss'

const EditorHeader = ({ text, status, url }) => {
  const { setShowSettings } = useContext(PostsContext)

  return (
    <header className={editor__header}>
      <div className={editor__return}>
        <Link href={url}>
          <a className={editor__link}>
            <Icon
              className={editor__link_icon}
              href={'/images/sprite.svg#icon-chevron-thin-left'}
            />
            <span>{text}</span>
          </a>
        </Link>
        <span className={editor__status}>{status}</span>
      </div>
      <div className={editor__action}>
        <button
          className={`btn ${editor__setting}`}
          onClick={() => setShowSettings(true)}
        >
          <Icon
            className={editor__setting_icon}
            href={'/images/sprite.svg#icon-list'}
          />
        </button>
      </div>
    </header>
  )
}

export default EditorHeader
