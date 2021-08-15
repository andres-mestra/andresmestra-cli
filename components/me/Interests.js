import React from 'react'
import { TitleSmall } from '../text/TitleSmall'
import { CardIcon } from '../ui/cards/CardIcon'

import { interests } from '../../utils/interests'

export const Interests = () => {
  return (
    <>
      <div>
        <TitleSmall>Mis intereses</TitleSmall>
        <div className="interests_list">
          {interests.map(({ name, figure }) => (
            <CardIcon text={name} icon={figure} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .interests_list {
          margin-top: 2rem;
          display: grid;
          grid-auto-flow: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}
