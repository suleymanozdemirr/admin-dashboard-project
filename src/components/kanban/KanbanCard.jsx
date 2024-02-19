import TextareaAutosize from "react-textarea-autosize"
import React, { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { MdDeleteOutline } from "react-icons/md"

export default function KanbanCard({ card, index, columnId }) {
  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(card.title)

  const handleOnBlur = (cardId) => {
    setOpen((prev) => !prev)
  }
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className='min-h-10 flex justify-between items-start mt-2 mb-0 mx-0 bg-white rounded-sm border border-b-2 border-stone-300 relative'>
            {open ? (
              <TextareaAutosize
                type='text'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur(card.id)
                  }
                  return
                }}
                autoFocus
              />
            ) : (
              <div
                className='w-full h-full flex items-start justify-center text-base transition duration-100 ease-in-out'
                onClick={() => setOpen((prev) => !prev)}
              >
                <p className='mt-3 mx-2 mb-2'>{card.title}</p>
                <button>
                  <MdDeleteOutline />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  )
}
