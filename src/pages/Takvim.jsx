import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import allLocales from '@fullcalendar/core/locales-all'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

const events = [
  {
    id: 1,
    title: 'All Day Event',
    allDay: true,
    start: '2024-01-26T12:07',
    end: '2024-01-26T12:07',
  },
]

export default function Takvim() {
  const [newEvents, setNewEvents] = useState({
    title: '',
    start: new Date().toISOString().slice(0, 16),
    end: new Date().toISOString().slice(0, 16),
  })
  const [allEvents, setAllEvents] = useState(events)
  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setAllEvents([...allEvents, newEvents])
    setNewEvents({
      title: '',
      start: new Date().toISOString().slice(0, 16),
      end: new Date().toISOString().slice(0, 16),
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEvents({
      ...newEvents,
      [name]: value,
    })
  }
  const deleteEvent = (eventId) => {
    const updatedEvents = allEvents.filter((event) => event.id !== eventId)
    setAllEvents(updatedEvents)
  }

  const handleEventClick = (info) => {
    if (window.confirm('Etkinliği silmek istediğinizden emin misiniz?')) {
      deleteEvent(info.event.id)
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className="min-h-screen p-12 text-sm mt-2">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={allEvents}
        eventClick={handleEventClick}
        selectMirror={true}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        droppable={true}
        weekends={true}
        locales={allLocales}
        firstDay={1}
        locale={'tr'}
        buttonText={{
          day: 'Gün',
          prev: 'Önceki',
          next: 'Sonraki',
          today: 'Bugün',
          month: 'Ay',
          week: 'Hafta',
          nextYear: 'Sonraki Yıl',
          prevYear: 'Önceki Yıl',
        }}
      />
      <div className="absolute top-[84px]">
        <button
          className="px-6 py-2 bg-blue-500 text-slate-50 rounded-lg hover:bg-blue-400 cursor-pointer"
          type="button"
          onClick={handleClickOpen}
        >
          Taslak Ekle
        </button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <Stack
                sx={{
                  width: '470px',
                }}
                spacing={2}
                direction="column"
              >
                <TextField
                  name="title"
                  variant="outlined"
                  label="Konu"
                  value={newEvents.title}
                  onChange={handleInputChange}
                />
                <div className="flex items-center justify-between">
                  <TextField
                    name="start"
                    label="Start Date"
                    value={newEvents.start}
                    onChange={handleInputChange}
                    type="datetime-local"
                    InputProps={{ style: { borderRadius: '10px' } }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    name="end"
                    label="End Date"
                    value={newEvents.end}
                    onChange={handleInputChange}
                    type="datetime-local"
                    InputProps={{ style: { borderRadius: '10px' } }}
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
                <button
                  className="py-2 bg-blue-600 text-slate-50 rounded-lg hover:bg-blue-500 cursor-pointer"
                  type="submit"
                  onClick={handleClose}
                >
                  Ekle
                </button>
              </Stack>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
