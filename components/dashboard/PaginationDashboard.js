import { memo } from 'react'
import Icon from '../ui/icons/Icon'

import {
  pagination__container,
  pagination__button,
  pagination__icon,
} from '../../styles/components/dashboard/pagination.module.scss'

const PaginationDashBoard = memo(({ backwards, forward, disable }) => {
  return (
    <div className={pagination__container}>
      <button
        className={`${pagination__button} btn`}
        onClick={() => backwards()}
        disabled={disable?.backwards}
      >
        <Icon
          className={pagination__icon}
          href="/images/sprite.svg#icon-chevron-thin-left"
        />
      </button>
      <button
        className={`${pagination__button} btn`}
        onClick={() => forward()}
        disabled={disable?.forward}
      >
        <Icon
          className={pagination__icon}
          href="/images/sprite.svg#icon-chevron-thin-right"
        />
      </button>
    </div>
  )
})

export default PaginationDashBoard
