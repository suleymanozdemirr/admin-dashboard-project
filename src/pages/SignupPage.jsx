import Layout from "../layout/auth"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { signUpSchema } from "../schema/yup"
import { useDispatch } from "react-redux"
import { register } from "../redux/features/auth/authAction"

const initialValues = {
  username: "",
  email: "",
  password: "",
  cpassword: "",
}

export default function SignupPage() {
  const [show, setShow] = useState({ password: false, cpassword: false })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        dispatch(register(values))
        navigate("/")
      },
    })
  console.log(values)

  return (
    <Layout>
      <div className='flex flex-col justify-center p-8 md:p-14'>
        <span className='mb-5 text-3xl font-bold'>Hesabınızı Oluşturun</span>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <TextField
                type='text'
                name='username'
                label='Adınız Soyadınız'
                variant='outlined'
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.username && errors.username)}
                helperText={touched.username && errors.username}
                sx={{ width: "100%", maxWidth: "300px" }}
              />

              <TextField
                type='email'
                name='email'
                label='Email'
                variant='outlined'
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                sx={{ width: "100%", maxWidth: "300px" }}
              />

              <TextField
                type={show.password ? "text" : "password"}
                name='password'
                label='Şifre'
                variant='outlined'
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                sx={{ width: "100%", maxWidth: "300px" }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() =>
                        setShow({ ...show, password: !show.password })
                      }
                    >
                      {show.password ? (
                        <MdVisibility size={20} />
                      ) : (
                        <MdVisibilityOff size={20} />
                      )}
                    </IconButton>
                  ),
                }}
              />

              <TextField
                type={show.cpassword ? "text" : "password"}
                name='cpassword'
                label='Şifre Tekrarı'
                variant='outlined'
                value={values.cpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.cpassword && errors.cpassword)}
                helperText={touched.cpassword && errors.cpassword}
                sx={{ width: "100%", maxWidth: "300px" }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() =>
                        setShow({ ...show, cpassword: !show.cpassword })
                      }
                    >
                      {show.cpassword ? (
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
              type='submit'
              variant='contained'
              sx={{
                maxWidth: "300px",
                padding: "10px",
                bgcolor: "black",
                fontSize: "13px",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
            >
              Kayıt Ol
            </Button>
          </Stack>
        </form>
      </div>
    </Layout>
  )
}
