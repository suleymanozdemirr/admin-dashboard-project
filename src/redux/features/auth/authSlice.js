import { createSlice } from "@reduxjs/toolkit"
import { googleSignIn, login, register } from "./authAction"

const user = JSON.parse(localStorage.getItem("user"))

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user ? user : null,
    loading: false,
    error: "",
  },
  reducer: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLogout: (state) => {
      localStorage.removeItem("user")
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
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
      state.user = action.payload
    })
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    builder.addCase(googleSignIn.pending, (state) => {
      state.loading = true
    })
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(googleSignIn.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const { setUser, setLogout } = authSlice.actions
export default authSlice.reducer
