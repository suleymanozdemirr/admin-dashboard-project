import React from "react"
import KanbanCard from "./KanbanCard"
import AddNew from "./AddNew"

export default function KanbanList() {
  return (
    <div className='p-3 bg-white w-1/3'>
      <div>To Do</div>
      <KanbanCard />
      <AddNew />
    </div>
  )
}
