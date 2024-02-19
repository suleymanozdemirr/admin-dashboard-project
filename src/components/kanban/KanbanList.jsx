import { Droppable, Draggable } from "react-beautiful-dnd"
import InputContainer from "./InputContainer"
import KanbanCard from "./KanbanCard"

export default function KanbanList({ column, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <div className='' {...provided.dragHandleProps}>
            <div className=''>{/* Title*/}</div>
            <div className=''>
              <Droppable droppableId={column.id} type='task-kanban'>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className=''
                  >
                    {column.cards.map((card, index) => (
                      <KanbanCard
                        key={card.id}
                        card={card}
                        index={index}
                        columnId={column.id}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <InputContainer columnId={column.id} type='card' />
          </div>
        </div>
      )}
    </Draggable>
  )
}
