import slugify from 'slugify'

export const slugCreate = (text) => {
  return slugify(text, {
    lower: true,
    strict: true,
  })
}
