import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useState } from "react"
import CreateTask from "./CreateTask"

export default function List() {
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <div className='flex items-center justify-between pt-5 px-5 border-b-2'>
      <Box sx={{ width: "100%" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label='Tabs where each tab needs to be selected manually'
        >
          <Tab label='Hepsi' />
          <Tab label='Başlamış' />
          <Tab label='Bekleyen' />
          <Tab label='Tamamlanmış' />
        </Tabs>
      </Box>
      {open ? <CreateTask open={open} setOpen={setOpen} /> : ""}
      <button
        className='px-6 py-2 bg-blue-600 text-slate-50 rounded-lg hover:bg-blue-500 cursor-pointer'
        type='button'
        onClick={handleClickOpen}
      >
        Ekle
      </button>
    </div>
  )
}
