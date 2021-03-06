import { usePost } from '../../hooks/usePost'
import Icon from '../ui/icons/Icon'
import {
  setting__header,
  setting__close,
  setting__close_icon,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsHeader = () => {
  const { setShowSettings } = usePost()

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
