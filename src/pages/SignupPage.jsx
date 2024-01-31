import Layout from "../layout/auth"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { signUpSchema } from "../schema/yup"
import axios from "axios"

const initialValues = {
  username: "",
  email: "",
  password: "",
  cpassword: "",
}

export default function SignupPage() {
  const [show, setShow] = useState({ password: false, cpassword: false })
  const navigate = useNavigate()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        axios
          .post("http://localhost:8000/users", values)
          .then((result) => {
            console.log("result")
            navigate("/")
          })
          .catch((err) => console.error(err))
        console.log(values)
      },
    })

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
                label='Username'
                variant='outlined'
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.username && errors.username)}
                helperText={touched.username && errors.username}
                sx={{
                  width: "40ch",
                }}
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
              />

              <TextField
                type={show.password ? "text" : "password"}
                name='password'
                label='Password'
                variant='outlined'
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.password && errors.password)}
                helperText={touched.password && errors.password}
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
                label='Confirm Password'
                variant='outlined'
                value={values.cpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!(touched.cpassword && errors.cpassword)}
                helperText={touched.cpassword && errors.cpassword}
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
              size='large'
              sx={{
                padding: "10px",
                bgcolor: "black",
                fontSize: "13px",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </form>
        <Stack
          direction='row'
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "gray",
            }}
          >
            Don't have an account?
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
              cursor: "pointer",
              color: "#222",
            }}
          >
            <Link to={"/"}>Sign In</Link>
          </Typography>
        </Stack>
      </div>
    </Layout>
  )
}
