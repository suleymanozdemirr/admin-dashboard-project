// calendarSlice.js
import { createSlice } from "@reduxjs/toolkit"
// import { deleteEvents, fetchEvents } from "./takvimAction"

const takvimSlice = createSlice({
  name: "takvim",
  initialState: {
    events: [
      {
        id: 1,
        title: "All Day Event",
        start: "2024-01-01T00:00:00",
        end: "2024-01-01T23:59:59",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload)
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((event) => event.id !== action.payload)
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchEvents.pending, (state) => {
  //     state.status = "loading"
  //   })
  //   builder.addCase(fetchEvents.fulfilled, (state, action) => {
  //     state.status = "succeeded"
  //     state.events = action.payload
  //   })
  //   builder.addCase(fetchEvents.rejected, (state, action) => {
  //     state.status = "failed"
  //     state.error = action.error.message
  //   })
  //   builder.addCase(deleteEvents.pending, (state, action) => {
  //     state.loading = true
  //   })
  //   builder.addCase(deleteEvents.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.error = action.payload
  //   })
  //   builder.addCase(deleteEvents.rejected, (state, action) => {
  //     state.loading = false
  //     state.error = action.payload
  //   })
  // },
})

export const addEvent = (event) => {
  return {
    type: "addEvent",
    payload: event,
  }
}

export const deleteEvent = (eventId) => {
  return {
    type: "deleteEvent",
    payload: eventId,
  }
}

export default takvimSlice.reducer
