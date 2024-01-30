import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

const POST_URL = "http://localhost:5000/project"

// create User
export const createTask = createAsyncThunk("createTask", async (formData) => {
  try {
    const response = await axios.post(`${POST_URL}/create`, formData)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getAllTask = createAsyncThunk("getAllTask", async () => {
  try {
    const response = await axios.get(`${POST_URL}/getall`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const getTask = createAsyncThunk("getTask", async (id) => {
  try {
    const response = await axios.get(`${POST_URL}/get/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

export const updateTask = createAsyncThunk(
  "updateTask",
  async (updatedData) => {
    console.log(updatedData)
    try {
      const response = await axios.put(
        `${POST_URL}/update/${updatedData.id}`,
        updatedData
      )
      console.log(response.data)
      return response.data
    } catch (error) {
      return isRejectedWithValue(error.response)
    }
  }
)

export const deleteTask = createAsyncThunk("deleteTask", async (id) => {
  try {
    const response = await axios.delete(`${POST_URL}/delete/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
