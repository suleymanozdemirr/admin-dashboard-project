import { useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import data from "../utils/data"
import KanbanList from "../components/kanban/KanbanList"
import InputContainer from "../components/kanban/InputContainer"

export default function Kanban() {
  const [columns, setColumns] = useState(data.columns)
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId='app' type='list' direction='horizontal'>
          {(provided) => (
            <div className='wrapper' ref={provided.innerRef}>
              {columns.map((column, index) => {
                return (
                  <KanbanList column={column} key={column.id} index={index} />
                )
              })}
              <div>
                <InputContainer type='column' />
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
