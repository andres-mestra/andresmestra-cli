import Link from 'next/link'
import { useFormik } from 'formik'
import { loginInit } from '../../utils/formInit'
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

const Login = () => {
  const formik = useFormik({
    ...loginInit,
    onSubmit: (values) => {
      //TODO: Login con backend
      console.log(values)
    },
  })

  const { email, password } = formik.values

  //TODO: mostra errores
  console.log(formik.errors)

  return (
    <LayoutAccess>
      <div className={form__container}>
        <form className={form} onSubmit={formik.handleSubmit}>
          <div className={form__title}>
            <h1>Login</h1>
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
              values={email}
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
              values={password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <button className={`${form__button} btn`} type="submit">
            Sign in
          </button>

          <Link href="/access/signup">
            <a>Sign Up</a>
          </Link>
        </form>
      </div>
    </LayoutAccess>
  )
}

export default Login
