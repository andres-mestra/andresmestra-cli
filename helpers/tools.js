export const unique = ({ list = [], value, key }) => {
  if (list.length === 0) return list

  let found = false
  return list.filter((item) => {
    if (item[key] !== value) {
      return item
    } else if (!found) {
      found = true
      return item
    }
  })
}
