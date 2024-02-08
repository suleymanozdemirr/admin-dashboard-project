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

//login user
const signIn = async (values) => {
  const response = await axios.post(`${API_URL}/users/signin`, values)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const api = {
  signUp,
  signIn,
}

export default api
