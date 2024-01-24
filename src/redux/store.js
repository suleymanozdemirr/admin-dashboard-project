import { configureStore } from "@reduxjs/toolkit"
import taskSlice from "./features/task/taskSlice"
// import takvimSlice from "./features/takvim/takvimSlice"

export const store = configureStore({
  reducer: {
    task: taskSlice,
    // takvim: takvimSlice,
  },
})
