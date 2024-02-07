import Layout from '../layout/auth'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from '../schema/yup'
import { useDispatch } from 'react-redux'
import { login } from '../redux/features/auth/authAction'
import { useFormik } from 'formik'
import { useState } from 'react'

const initialValues = {
  email: '',
  password: '',
}

export default function SigninPage() {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        dispatch(login(values))
        navigate('/home')
      },
    })
  return (
    <Layout>
      <div className="flex flex-col justify-center p-8 md:p-20">
        <span className="mb-5 text-3xl font-bold">Oturum Aç</span>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <TextField
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                sx={{ width: '100%', maxWidth: '300px' }}
              />

              <TextField
                type={show ? 'text' : 'password'}
                name="password"
                label="Şifre"
                variant="outlined"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                sx={{ width: '100%', maxWidth: '300px' }}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShow(!show)}>
                      {show ? (
                        <MdVisibility size={20} />
                      ) : (
                        <MdVisibilityOff size={20} />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Stack>

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                padding: '10px',
                bgcolor: 'black',
                fontSize: '13px',
                '&:hover': {
                  bgcolor: 'black',
                },
              }}
            >
              Giriş Yap
            </Button>
            <Button
              size="medium"
              sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                padding: '12px',
                border: '1px solid #222',
                fontSize: '13px',
                color: '#222',
              }}
            >
              <FcGoogle className="w-6 h-6 inline mr-2" />
              Google ile Giriş Yap
            </Button>
          </Stack>
        </form>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: 'gray',
            }}
          >
            Hesabınız yok mu?
          </Typography>
          <Typography
            sx={{
              fontSize: '13px',
              fontWeight: 'bold',
              cursor: 'pointer',
              color: '#222',
            }}
          >
            <Link to={'/register'}>Kayıt Ol</Link>
          </Typography>
        </Stack>
      </div>
    </Layout>
  )
}
