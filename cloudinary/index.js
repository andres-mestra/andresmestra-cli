const cloudinary = require('cloudinary').v2

cloudinary.config({
  api_secret: process.env.CLOUDINARY_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
})

export const timestamp = Math.round(new Date().getTime() / 1000)
export const signature = cloudinary.utils.api_sign_request(
  {
    timestamp,
    public_id: 'sample_image',
  },
  process.env.CLOUDINARY_SECRET
)
