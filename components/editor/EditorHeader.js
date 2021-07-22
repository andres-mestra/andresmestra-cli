import Link from 'next/link'
import Icon from '../Icon'
import {
  editor__header,
  editor__return,
  editor__link,
  editor__link_icon,
  editor__status,
} from '../../styles/components/editor/editorpost.module.scss'

const EditorHeader = ({ text, status, url }) => {
  //TODO:integrar mostrar menu de settings
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
    </header>
  )
}

export default EditorHeader
