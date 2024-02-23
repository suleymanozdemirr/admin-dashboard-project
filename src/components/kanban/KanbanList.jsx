import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import mockData from "../../data/mockData"
import { useState } from "react"
import KanbanCard from "./KanbanCard"
export default function KanbanList() {
  const [data, setData] = useState(mockData)

  const onDragEnd = (result) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId)
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      )

      const sourceCol = data[sourceColIndex]
      const destinationCol = data[destinationColIndex]

      const sourceTask = [...sourceCol.tasks]
      const destinationTask = [...destinationCol.tasks]

      const [removed] = sourceTask.splice(source.index, 1)
      destinationTask.splice(source.index, 0, removed)

      data[sourceColIndex].tasks = sourceTask
      data[destinationColIndex].tasks = destinationTask

      setData(data)
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='flex items-start p-3'>
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className='w-96 bg-slate-300 p-3 rounded-lg ml-2'
                ref={provided.innerRef}
              >
                <div className='text-base font-bold mx-0 mb-5'>
                  {section.title}
                </div>
                <div className='mt-3'>
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? ".5" : "1",
                          }}
                        >
                          <KanbanCard>{task.title}</KanbanCard>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  )
}
