import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import Icon from '../Icon'
import {
  setting__header,
  setting__close,
  setting__close_icon,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsHeader = () => {
  const { setShowSettings } = useContext(PostsContext)

  return (
    <div className={setting__header}>
      <h2>Settings</h2>
      <button
        onClick={() => setShowSettings(false)}
        className={`btn ${setting__close}`}
      >
        <Icon
          href="/images/sprite.svg#icon-cross"
          className={setting__close_icon}
        />
      </button>
    </div>
  )
}

export default SettingsHeader
