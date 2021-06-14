import * as Yup from 'yup'

export const signUpInit = {
  initialValues: {
    username: 'hola',
    jobTitle: 'job hola',
    email: 'hola@mail.com',
    password: 'holamundo',
    password2: 'holamundo',
  },
  validationSchema: Yup.object({
    username: Yup.string().required('Username requerido'),
    jobTitle: Yup.string().required('Profession requerido'),
    email: Yup.string().required('Email requerido').email('Email no valido'),
    password: Yup.string()
      .required('Password requerido')
      .min(6, 'El password debe ser de al menos 6 carapteres'),
    password2: Yup.string()
      .required('Repeact password requerido')
      .oneOf([Yup.ref('password')], 'Passwords deben coincider'),
  }),
}

export const loginInit = {
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: Yup.object({
    email: Yup.string().required('Email requerido').email('Email no valido'),
    password: Yup.string().required('Password requerido'),
  }),
}
