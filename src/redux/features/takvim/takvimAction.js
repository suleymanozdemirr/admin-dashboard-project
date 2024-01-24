import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

const POST_URL = "http://localhost:8000"

export const fetchEvents = createAsyncThunk(
  "fetchEvents",
  async (newEvents) => {
    try {
      const response = await axios.post(`${POST_URL}/events`, newEvents)
      console.log(response.data)
      return response.data
    } catch (error) {
      return isRejectedWithValue(error.response)
    }
  }
)

export const deleteEvents = createAsyncThunk("deleteEvents", async (id) => {
  try {
    const response = await axios.delete(`${POST_URL}/events/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return isRejectedWithValue(error.response)
  }
})
