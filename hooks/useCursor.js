import { useCallback, useState } from 'react'

export const useCursor = (initialState = { backwards: {}, forward: {} }) => {
  const [cursors, setCursors] = useState(initialState)
  const [cursor, setCursor] = useState(null)
  const [disable, setDisable] = useState({ backwards: false, forward: false })
  const [lastCLicked, setLastCLicked] = useState('forward')

  const changeCursors = useCallback(
    ({ array = [], paginate = {} }) => {
      if (array.length) {
        setDisable({ backwards: false, forward: false })
        setCursors({
          backwards: {
            ...paginate,
            take: paginate?.take * -1,
            skip: 1,
            cursor: {
              id: parseInt(array[0]?.id),
            },
          },
          forward: {
            ...paginate,
            skip: 1,
            cursor: {
              id: parseInt(array[array.length - 1]?.id),
            },
          },
        })
      } else {
        setCursors(() => {
          cursors[lastCLicked].take *= -1
          delete cursors[lastCLicked].skip
          return {
            backwards: cursors[lastCLicked],
            forward: cursors[lastCLicked],
          }
        })
        setDisable((disable) => {
          disable[lastCLicked] = true
          return { ...disable }
        })
      }
    },
    [lastCLicked, disable]
  )

  const backwards = useCallback(() => {
    setLastCLicked('backwards')
    if (!disable.backwards) setCursor({ ...cursors.backwards })
  })

  const forward = useCallback(() => {
    setLastCLicked('forward')
    if (!disable.forward) setCursor({ ...cursors.forward })
  })

  return {
    cursor,
    changeCursors,
    backwards,
    forward,
    disable,
  }
}
