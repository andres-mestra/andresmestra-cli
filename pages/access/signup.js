import { useEffect } from 'react'
import { useFormik } from 'formik'
import Link from 'next/link'
import { signUpInit } from '../../utils/formInit'
import LayoutAccess from '../../components/Layout/LayoutAccess'
import Icon from '../../components/Icon'
import {
  form,
  form__container,
  form__title,
  form__control__group,
  form__input,
  form__icon,
  form__button,
} from '../../styles/components/accessForm.module.scss'

const SingUp = () => {
  const formik = useFormik({
    ...signUpInit,
    onSubmit: (values) => {
      //TODO: login con el backend
      console.log(values)
    },
  })

  const { username, jobTitle, email, password, password2 } = formik.values

  //TODO: mostra errores
  console.log(formik.errors)

  return (
    <LayoutAccess>
      <div className={form__container}>
        <form className={form} onSubmit={formik.handleSubmit}>
          <div className={form__title}>
            <h1>Sing Up</h1>
          </div>
          <div className={form__control__group}>
            <Icon
              className={form__icon}
              href={`../images/sprite.svg#icon-user`}
            />
            <input
              className={form__input}
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={form__control__group}>
            <Icon
              className={form__icon}
              href={`../images/sprite.svg#icon-graduation-cap`}
            />

            <input
              className={form__input}
              id="jobTitle"
              type="text"
              placeholder="profession"
              value={jobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={form__control__group}>
            <Icon
              className={form__icon}
              href={`../images/sprite.svg#icon-email`}
            />

            <input
              className={form__input}
              id="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={form__control__group}>
            <Icon
              className={form__icon}
              href={`../images/sprite.svg#icon-lock`}
            />

            <input
              className={form__input}
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={form__control__group}>
            <Icon
              className={form__icon}
              href={`../images/sprite.svg#icon-lock`}
            />

            <input
              className={form__input}
              id="password2"
              type="password"
              placeholder="repeact password"
              value={password2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <button className={`${form__button} btn`} type="submit">
            Sign up
          </button>

          <Link href="/access/login">
            <a>Sign In</a>
          </Link>
        </form>
      </div>
    </LayoutAccess>
  )
}

export default SingUp
