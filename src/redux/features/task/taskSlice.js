import { createSlice } from "@reduxjs/toolkit"
import {
  createTask,
  deleteTask,
  getTask,
  getAllTask,
  updateTask,
} from "./taskAction"

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: {},
    tasks: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(createTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(getAllTask.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getAllTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
      console.log(state.tasks)
    })
    builder.addCase(getAllTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(getTask.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload
    })
    builder.addCase(getTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(deleteTask.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(updateTask.pending, (state) => {
      state.loading = true
    })
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = state.tasks.map((element) =>
        element.id === action.payload.id ? action.payload : element
      )
    })
    builder.addCase(updateTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default taskSlice.reducer
