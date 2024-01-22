import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"

export default function Takvim() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='grid grid-cols-10'>
        <div className='col-span-8'>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,resourceTimeLineWook",
            }}
            events={{}}
            nowIndicator={true}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
            // dateClick={{}}
            // drop={}
            // eventClick={{}}
          />
        </div>
        <div
          id='draggable-el'
          className='ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50'
        ></div>
      </div>
    </div>
  )
}
