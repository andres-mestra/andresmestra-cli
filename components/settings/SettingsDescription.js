import {
  setting__subtitle,
  setting__group,
  setting__textarea,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsDescription = () => {
  return (
    <div>
      <p className={setting__subtitle}>Description</p>
      <div className={setting__group}>
        <textarea className={setting__textarea} />
      </div>
    </div>
  )
}

export default SettingsDescription
