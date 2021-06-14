import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import slugify from 'slugify'
import Swal from 'sweetalert2'

import client from '../../config/apollo'
import { REGISTER } from '../../queries/authQueries'
import { signUpInit } from '../../utils/formInit'
import LayoutAccess from '../../components/Layout/LayoutAccess'
import {
  form,
  form__container,
  form__title,
  form__input,
  form__button,
} from '../../styles/components/accessForm.module.scss'
import FormGroup from '../../components/FormGroup'

const SignUp = () => {
  const router = useRouter()
  //user register mutation
  const [createUser] = useMutation(REGISTER)

  const formik = useFormik({
    ...signUpInit,
    onSubmit: async () => {
      try {
        Swal.showLoading()
        const slug = slugify(username)
        const { data } = await createUser({
          variables: {
            input: {
              username,
              jobTitle,
              email,
              password,
              slug,
            },
          },
        })

        localStorage.setItem('token', data.createUser.token)
        await client.resetStore()
        Swal.close()

        router.replace('/')
      } catch ({ message }) {
        Swal.fire('error', message, 'error')
      }
    },
  })

  const { username, jobTitle, email, password, password2 } = formik.values
  const { errors } = formik
  const { touched } = formik

  return (
    <LayoutAccess>
      <div className={form__container}>
        <form className={form} onSubmit={formik.handleSubmit}>
          <div className={form__title}>
            <h1>Sign Up</h1>
          </div>
          <FormGroup
            id="username"
            type="text"
            placeholder="username"
            value={username}
            icon={`../images/sprite.svg#icon-user`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={errors.username}
            touched={touched.username}
          />
          <FormGroup
            id="jobTitle"
            type="text"
            placeholder="profession"
            value={jobTitle}
            icon={`../images/sprite.svg#icon-graduation-cap`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={errors.jobTitle}
            touched={touched.jobTitle}
          />
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
          <FormGroup
            className={form__input}
            id="password2"
            type="password"
            placeholder="repeact password"
            value={password2}
            icon={`../images/sprite.svg#icon-lock`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={errors.password2}
            touched={touched.password2}
          />
          <button
            className={`${form__button} btn`}
            type="submit"
            disabled={loading}
          >
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

export default SignUp
