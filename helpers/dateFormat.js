import { DateTime } from 'luxon'

export const dateLarge = (date) => {
  return DateTime.fromMillis(parseInt(date)).toLocaleString(
    DateTime.DATETIME_MED
  )
}

export const dateShort = (date) => {
  return DateTime.fromMillis(parseInt(date)).toLocaleString(
    DateTime.DATETIME_SHORT
  )
}
