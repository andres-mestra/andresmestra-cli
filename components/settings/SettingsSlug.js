import {
  setting__subtitle,
  setting__group,
  setting__icon,
  setting__input,
} from '../../styles/components/settingsMenu.module.scss'
import Icon from '../Icon'

const SettingsSlug = () => {
  //TODO: función para generar slug
  return (
    <div>
      <p className={setting__subtitle}>URL</p>
      <div className={setting__group}>
        <Icon className={setting__icon} href="/images/sprite.svg#icon-link" />
        <input className={setting__input} />
      </div>
    </div>
  )
}

export default SettingsSlug
