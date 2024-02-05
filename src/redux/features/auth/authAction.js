import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

const POST_URL = "http://localhost:5000"

// login user
export const login = createAsyncThunk("auth/login", async (values) => {
  try {
    const response = await axios.post(`${POST_URL}/users/signin`, values)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

// register user

export const register = createAsyncThunk("auth/register", async (values) => {
  try {
    const response = await axios.post(`${POST_URL}/users/signup`, values)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
