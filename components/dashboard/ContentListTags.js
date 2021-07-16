import React from 'react'

const ContentListTags = ({ list }) => {
  return (
    <>
      {list?.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  )
}

export default ContentListTags
