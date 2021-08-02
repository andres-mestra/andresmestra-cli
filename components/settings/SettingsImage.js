import { setting__image } from '../../styles/components/settingsMenu.module.scss'

const SettingsImage = () => {
  //TODO: Pasar todo esto a un Hook
  const handleChange = (e) => {
    const file = e.target.files

    if (file.length) {
      const urlApi = process.env.NEXT_PUBLIC_API
      const urlUpload = process.env.NEXT_PUBLIC_IMAGE_URL

      const formData = new FormData()
      formData.append('file', file[0])
      formData.append('api_key', process.env.NEXT_PUBLIC_IMAGE_KEY)
      formData.append('upload_preset', 'andresmestra')

      fetch(`${urlApi}/signedimage`)
        .then((res) => res.json())
        .then(({ timestamp, signature }) => {
          formData.append('timestamp', timestamp)
          formData.append('signature', signature)
        })
        .catch((err) => console.log('Error signed auth image'))

      let image = null
      fetch(urlUpload, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          image = data
          console.log(image)
        })
        .catch((err) => {
          console.log('Error upload image')
          console.log(err)
        })
    }
  }

  return (
    //TODO: Mostrar la imagen
    //TODO: Permitir borrar la imagen
    <div className={setting__image}>
      <input type="file" id="upload_img" onChange={handleChange} />
      <label htmlFor="upload_img">Upload image</label>
    </div>
  )
}

export default SettingsImage
