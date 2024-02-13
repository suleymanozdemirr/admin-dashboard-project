import axios from "axios"

const API_URL = "http://localhost:5000"

//register user
const signUp = async (values) => {
  const response = await axios.post(`${API_URL}/users/signup`, values)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

//google register user
const googleSignIn = async (result) => {
  const response = await axios.post(`${API_URL}/users/googleSignIn`, result)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

//login user
const signIn = async (values) => {
  const response = await axios.post(`${API_URL}/users/signin`, values)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

//logout user
const logout = async () => {
  localStorage.removeItem("user")
}

const api = {
  signUp,
  signIn,
  googleSignIn,
  logout,
}

export default api
