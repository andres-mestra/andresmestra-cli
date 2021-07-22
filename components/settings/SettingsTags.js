import SettingsBadge from './SettingsBadge'
import {
  setting__subtitle,
  setting__group,
  setting__group_wrap,
  setting__input,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsTags = () => {
  //TODO: crear categories
  //TODO: slug categories
  return (
    <div>
      <p className={setting__subtitle}>Categories</p>
      <div className={`${setting__group} ${setting__group_wrap}`}>
        <SettingsBadge text="Science" />
        <SettingsBadge text="economy" />
        <SettingsBadge text="present" />
        <SettingsBadge text="latin america" />
        <input className={setting__input} />
      </div>
    </div>
  )
}

export default SettingsTags
