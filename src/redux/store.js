import { configureStore } from "@reduxjs/toolkit"
import taskSlice from "./features/task/taskSlice"
import authSlice from "./features/auth/authSlice"
import kanbanSlice from "./features/kanban/kanbanSlice"
// import takvimSlice from "./features/takvim/takvimSlice"

export const store = configureStore({
  reducer: {
    task: taskSlice,
    auth: authSlice,
    kanban: kanbanSlice,
    // takvim: takvimSlice,
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => {
      console.log(action.type)
    })
  },
})
