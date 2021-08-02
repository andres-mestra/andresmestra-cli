import { v2 } from 'cloudinary'

const cloudinary = v2

export const useCloudinary = () => {
  const upload = (event) => {
    const file = event.target?.files[0] ?? false

    if (file) {
    }
  }
}
