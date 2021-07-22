import Icon from '../Icon'
import {
  setting__header,
  setting__close,
  setting__close_icon,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsHeader = () => {
  //TODO: función para ocultar menu
  return (
    <div className={setting__header}>
      <h2>Settings</h2>
      <button className={`btn ${setting__close}`}>
        <Icon
          href="/images/sprite.svg#icon-cross"
          className={setting__close_icon}
        />
      </button>
    </div>
  )
}

export default SettingsHeader
