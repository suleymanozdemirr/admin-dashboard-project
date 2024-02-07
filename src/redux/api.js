import axios from 'axios'

const API_URL = 'http://localhost:5000'

const register = async (values) => {
  const response = await axios.post(`${API_URL}/users/signup`, values)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const api = {
  register,
}

export default api
