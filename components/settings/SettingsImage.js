import { setting__image } from '../../styles/components/settingsMenu.module.scss'

const SettingsImage = () => {
  return (
    <div className={setting__image}>
      <input type="file" id="upload_img" />
      <label htmlFor="upload_img">Upload image</label>
    </div>
  )
}

export default SettingsImage
