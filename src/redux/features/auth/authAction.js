import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import api from "../../api"

// login user
export const login = createAsyncThunk("auth/login", async (values) => {
  try {
    const response = await api.signIn(values)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

// register user

export const register = createAsyncThunk("auth/register", async (values) => {
  try {
    const response = await api.signUp(values)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
