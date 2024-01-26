import { Stack, TextField, Paper } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useEffect, useState } from "react"
import Profil from "./Profil"
import { createTask, updateTask } from "../../redux/features/task/taskAction"
import { useDispatch } from "react-redux"

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (err) => {
      reject(err)
    }
  })
}

export default function CreateTask({ id, open, setOpen, task }) {
  const [avatar, setAvatar] = useState("")
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    projectName: "",
    avatar: "",
    description: "",
    fieldManager: "",
    starTime: new Date(),
    endTime: new Date(),
  })

  useEffect(() => {
    if (task) {
      setFormData({
        projectName: task.projectName || "",
        avatar: task.avatar || "",
        description: task.description || "",
        fieldManager: task.fieldManager || "",
        starTime: task.starTime || new Date(),
        endTime: task.endTime || new Date(),
      })
      setAvatar(task.avatar && URL.createObjectURL(new Blob([task.avatar])))
    }
  }, [task])

  const handleClickClose = () => {
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task) {
      dispatch(updateTask({ id: task.id, updateData: formData }))
    } else {
      dispatch(createTask(formData))
    }
    setFormData({
      projectName: "",
      avatar: avatar,
      description: "",
      fieldManager: "",
      starTime: new Date(),
      endTime: new Date(),
    })
    setAvatar(null)
    handleClickClose()
  }
  console.log(formData)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
      avatar: avatar,
    })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setFormData({
      ...formData,
      avatar: base64,
    })
    console.log(file)
    setAvatar(file && URL.createObjectURL(file))
  }

  return (
    <Paper>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle sx={{ fontWeight: "500", fontSize: "20px" }}>
          Yeni Proje Ekle
        </DialogTitle>
        <DialogContent>
          <form method='post' onSubmit={handleSubmit}>
            <Stack
              sx={{
                width: "470px",
                height: "490px",
              }}
              spacing={2}
              direction='column'
            >
              <Profil avatar={avatar} handleFileUpload={handleFileUpload} />

              <TextField
                name='projectName'
                value={id || formData.projectName}
                onChange={handleInputChange}
                variant='outlined'
                label='Project Name'
              />
              <TextField
                name='fieldManager'
                value={formData.fieldManager}
                onChange={handleInputChange}
                variant='outlined'
                label='Saha Sorumlusu'
              />
              <TextField
                maxRows={2}
                minRows={2}
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                variant='outlined'
                label='Project Details'
              />
              <div className='flex items-center justify-between'>
                <TextField
                  name='starTime'
                  label='Start Date'
                  value={formData.starTime}
                  onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='YYYY-MM-DDTHH:mm'
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  name='endTime'
                  label='End Date'
                  value={formData.endTime}
                  onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='YYYY-MM-DDTHH:mm'
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <button
                className='py-2 px-5 bg-blue-600 text-slate-50 rounded-lg hover:bg-blue-500 cursor-pointer'
                type='submit'
              >
                Ekle
              </button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </Paper>
  )
}
