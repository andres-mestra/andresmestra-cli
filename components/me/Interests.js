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
            <CardIcon key={name} text={name} icon={figure} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .interests_list {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          justify-content: space-around;
          grid-row-gap: 1rem;
        }
      `}</style>
    </>
  )
}
