import { useState } from 'react'

export const useFetchMail = () => {
  const url = 'http://localhost:3001/api/sendmail'
  const [state, setState] = useState({
    data: null,
    error: null,
  })

  const sendMail = (payload) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setState((state) => ({ ...state, data }))
      })
      .catch((error) => {
        setState((state) => ({ ...state, error: true }))
      })
  }

  return { ...state, sendMail }
}
