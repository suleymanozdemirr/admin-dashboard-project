import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./authAction"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
      state.user = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(register.pending, (state) => {
      state.loading = true
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
      state.user = action.payload
    })
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export default authSlice.reducer