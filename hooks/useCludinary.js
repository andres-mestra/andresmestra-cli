import { useState } from 'react'

export const useCloudinary = () => {
  const [image, setImage] = useState({
    url: null,
    error: null,
  })

  const uploadImage = (file) => {
    if (file.length) {
      const urlUpload = process.env.NEXT_PUBLIC_IMAGE_URL

      const formData = new FormData()
      formData.append('file', file[0])
      formData.append('folder', 'miblog')
      formData.append('api_key', process.env.NEXT_PUBLIC_IMAGE_KEY)
      formData.append('upload_preset', 'andresmestra')

      fetch(urlUpload, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then(({ secure_url }) => {
          setImage((state) => ({ ...state, url: secure_url }))
        })
        .catch(({ message }) => {
          setImage((state) => ({ ...state, error: message }))
        })
    } else {
      setState((state) => ({ ...state, error: 'Undefined image' }))
    }
  }

  return {
    image,
    uploadImage,
  }
}
