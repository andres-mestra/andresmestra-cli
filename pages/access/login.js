import Link from 'next/link'
import { useFormik } from 'formik'
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
  const formik = useFormik({
    ...loginInit,
    onSubmit: (values) => {
      //TODO: Login con backend
      console.log(values)
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
