import { timestamp, signature } from '../../cloudinary'

export default (req, res) => {
  return res.status(200).json({ timestamp, signature })
}
