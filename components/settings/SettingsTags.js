import { useState } from 'react'
import { usePost } from '../../hooks/usePost'
import { useMutation } from '@apollo/client'
import { insertCategory } from '../../queries/editorQueries'
import { slugCreate } from '../../helpers/slugCreate'
import { unique } from '../../helpers/tools'
import SettingsBadge from './SettingsBadge'

import {
  setting__subtitle,
  setting__group,
  setting__group_wrap,
  setting__input,
} from '../../styles/components/settingsMenu.module.scss'

const SettingsTags = () => {
  const [tag, setTag] = useState('')
  const { post, actions } = usePost()
  const [addCategory] = useMutation(insertCategory)

  const handleChange = (e) => {
    const { value } = e.target
    if (value.includes(',')) {
      const name = value.replace(',', '').trim().toLowerCase()
      const slug = slugCreate(name)

      addCategory({
        variables: { input: { name, slug } },
      }).then(({ data }) => {
        const rest = data.insertCategory
        actions.setValues((values) => {
          const categories = unique({
            list: [...values.categories, rest?.category],
            value: name,
            key: 'name',
          })

          return {
            ...values,
            categories,
          }
        })
      })

      setTag('')
    } else {
      setTag(value)
    }
  }

  return (
    <div>
      <p className={setting__subtitle}>Categories</p>
      <div className={`${setting__group} ${setting__group_wrap}`}>
        {post.categories.length !== 0 &&
          post.categories.map(({ id, name }) => (
            <SettingsBadge key={id} text={name} />
          ))}

        <input
          id="tag"
          className={setting__input}
          value={tag}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SettingsTags
