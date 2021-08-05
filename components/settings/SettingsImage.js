import { useCloudinary } from '../../hooks/useCludinary'
import {
  setting__image,
  setting__image_prev,
} from '../../styles/components/settingsMenu.module.scss'

const SettingsImage = () => {
  const { image, uploadImage } = useCloudinary()

  const handleChange = (e) => {
    const file = e.target.files
    uploadImage(file)
  }

  return (
    //TODO: Mostrar la imagen
    //TODO: Permitir borrar la imagen
    <div className={setting__image}>
      {image.url ? (
        <img src={image.url} className={setting__image_prev} />
      ) : (
        <>
          <input type="file" id="upload_img" onChange={handleChange} />
          <label htmlFor="upload_img">Upload image</label>
        </>
      )}
    </div>
  )
}

export default SettingsImage
