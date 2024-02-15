import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = "http://localhost:5000/users"

// login user
export const login = createAsyncThunk("auth/login", async (values) => {
  try {
    const response = await axios.post(`${API_URL}/login`, values)
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

// register user
export const register = createAsyncThunk("auth/register", async (values) => {
  try {
    const response = await axios.post(`${API_URL}/register`, values)
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

// google register user
export const googleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async (result) => {
    try {
      const response = await axios.post(`${API_URL}/googleSignIn`, result)
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    } catch (error) {
      return isRejectedWithValue(error.response)
    }
  }
)

// logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.removeItem("user")
    return null
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
