import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'

import client from '../../config/apollo'
import { LOGIN } from '../../queries/authQueries'
import { loginInit } from '../../utils/formInit'
import LayoutAccess from '../../components/Layout/LayoutAccess'
import FormGroup from '../../components/FormGroup'
import {
  form,
  form__container,
  form__title,
  form__input,
  form__button,
} from '../../styles/components/accessForm.module.scss'

const Login = () => {
  const router = useRouter()
  const [login] = useMutation(LOGIN)

  const formik = useFormik({
    ...loginInit,
    onSubmit: async () => {
      try {
        Swal.showLoading()

        const { data } = await login({
          variables: { email, password },
        })

        localStorage.setItem('token', data.login.token)
        await client.resetStore()
        Swal.close()

        router.replace('/admin')
      } catch ({ message }) {
        Swal.fire('error', message, 'error')
      }
    },
  })

  const { email, password } = formik.values
  const { errors } = formik
  const { touched } = formik

  return (
    <LayoutAccess>
      <div className={form__container}>
        <form className={form} onSubmit={formik.handleSubmit}>
          <div className={form__title}>
            <h1>Login</h1>
          </div>
          <FormGroup
            id="email"
            type="email"
            placeholder="email"
            value={email}
            icon={`../images/sprite.svg#icon-email`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <FormGroup
            className={form__input}
            id="password"
            type="password"
            placeholder="password"
            value={password}
            icon={`../images/sprite.svg#icon-lock`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={errors.password}
            touched={touched.password}
          />
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
