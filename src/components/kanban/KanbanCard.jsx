import React from "react"

export default function KanbanCard(props) {
  return (
    <div className='p-7 bg-slate-200 rounded-xl mt-3'>{props.children}</div>
  )
}
