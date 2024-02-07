import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  username: Yup.string()
    .min(3)
    .max(30)
    .required('Lütfen adınızı ve soyadınızı girin'),
  email: Yup.string().email().required('Lütfen geçerli bir email adresi girin'),
  password: Yup.string()
    .min(6)
    .required('Şifre en az 6 karakterden oluşmalıdır'),
  cpassword: Yup.string()
    .required('Lütfen şifrenizi tekrar girin')
    .min(6, 'Şifre en az 6 karakterden oluşmalıdır')
    .oneOf([Yup.ref('password')], 'Şifreler eşleşmiyor'),
})

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçerli bir email adresi girin')
    .required('Lütfe email adresinizi girin'),
  password: Yup.string()
    .min(6, 'Şifre en az 6 karakterden oluşmalıdır')
    .required('Lütfen şifrenizi girin'),
})
