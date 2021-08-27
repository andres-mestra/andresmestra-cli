import Icon from '../ui/icons/Icon'
import {
  setting__badge,
  setting__badge_icon,
} from '../../styles/components/settingsMenu.module.scss'

const SettingsBadge = ({ text }) => {
  //TODO:falta evento click
  return (
    <div className={setting__badge}>
      <span>{text}</span>
      <Icon
        className={setting__badge_icon}
        href="/images/sprite.svg#icon-cross"
      />
    </div>
  )
}

export default SettingsBadge
