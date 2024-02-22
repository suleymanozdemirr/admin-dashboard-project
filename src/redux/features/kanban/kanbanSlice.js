import { createSlice } from "@reduxjs/toolkit"
const kanbanSlice = createSlice({
  name: "kanban",
  initialState: {
    kanban: [],
  },
  reducers: {
    addList: (state, action) => {
      state.kanban.push(action.payload)
    },
  },
})

export const { addList } = kanbanSlice.actions
export default kanbanSlice.reducer
