export const unique = ({ list = [], value, key }) => {
  if (list.length === 0) return list

  const newList = list.filter((item) => item[key] != value)
  return [...newList, { [key]: value }]
}
