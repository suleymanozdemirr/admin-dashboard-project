import React from "react"

export default function KanbanCard({ props }) {
  return <div className='p-7 bg-[#212121] rounded-xl'>{props.children}</div>
}
