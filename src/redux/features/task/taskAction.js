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
// bütün taskları getir
export const getAllTask = createAsyncThunk("getAllTask", async () => {
  try {
    const response = await axios.get(`${POST_URL}getall`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

// tek bir task getir
export const getTask = createAsyncThunk("getTask", async (id) => {
  try {
    const response = await axios.get(`${POST_URL}/get/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})

// //user task getir
// export const getUserTask = createAsyncThunk("getUserTask", async (userId) => {
//   try {
//     const response = await axios.get(`${POST_URL}/get/${userId}`)
//     console.log(response.data)
//     return response.data
//   } catch (error) {
//     return isRejectedWithValue(error.response)
//   }
// })

// task güncelle
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

// task sil
export const deleteTask = createAsyncThunk("deleteTask", async (id) => {
  try {
    const response = await axios.delete(`${POST_URL}/delete/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
