import { Stack, TextField, Paper, Avatar, MenuList } from "@mui/material"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { SlPencil } from "react-icons/sl"
import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useEffect, useState } from "react"
import {
  createTask,
  getAllTask,
  updateTask,
} from "../../redux/features/task/taskAction"
import { useDispatch, useSelector } from "react-redux"

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
})

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

export default function AddEditTask({ id, open, setOpen, task }) {
  const [avatar, setAvatar] = useState("")
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    projectName: "",
    avatar: "",
    description: "",
    fieldManager: "",
    startTime: new Date(),
    endTime: new Date(),
  })
  const [anchorEl, setAnchorEl] = useState(null)
  const openEl = Boolean(anchorEl)
  const tasks = useSelector((state) =>
    id ? state.task.find((item) => item.id === id) : null
  )

  useEffect(() => {
    if (task) {
      // Form verilerini güncelle
      setFormData({
        projectName: task.projectName || "",
        avatar: task.avatar || "",
        description: task.description || "",
        fieldManager: task.fieldManager || "",
        startTime: task.startTime || new Date(),
        endTime: task.endTime || new Date(),
      })
      setAvatar(task.avatar && URL.createObjectURL(new Blob([task.avatar])))
    }
  }, [task])

  const handleClickClose = () => {
    setOpen(false)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const getAllTasks = () => {
    dispatch(getAllTask())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      console.log(`create: ${formData}`)
      dispatch(updateTask({ id: tasks.id, updatedData: formData }))
    } else {
      console.log(`update: ${formData} and ${id}`)
      dispatch(createTask(formData))
    }
    setFormData({
      projectName: "",
      avatar: avatar,
      description: "",
      fieldManager: "",
      startTime: new Date(),
      endTime: new Date(),
    })
    setAvatar(null)
    handleClickClose()
    getAllTasks()
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setFormData({
      ...formData,
      avatar: base64,
    })
    setAvatar(file && URL.createObjectURL(file))
  }

  return (
    <Paper>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle sx={{ fontWeight: "500", fontSize: "20px" }}>
          {task ? "" : "Yeni Proje Ekle"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack
              sx={{
                width: "470px",
                height: "540px",
              }}
              spacing={2}
              direction='column'
            >
              <div className='flex justify-center'>
                <div className='relative border-dotted border-2 border-slate-300 rounded-full h-32 w-32 flex items-center justify-center '>
                  <Avatar
                    id='file-button'
                    src={formData.avatar || ""}
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                  />

                  <div className='absolute left-24 bottom-1 border-2 w-7 h-7 bg-slate-50 rounded-full flex items-center justify-center'>
                    <button
                      id='basic-button'
                      type='button'
                      aria-controls={openEl ? "basic-menu" : undefined}
                      aria-haspopup='true'
                      aria-expanded={openEl ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <SlPencil />
                    </button>
                    <Menu
                      id='basic-menu'
                      anchorEl={anchorEl}
                      open={openEl}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuList>
                        <MenuItem onClick={handleClose}>
                          <label htmlFor='file-upload'>Fotoğraf Yükle</label>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Fotoğraf Sil</MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                  <VisuallyHiddenInput
                    type='file'
                    name='avatar'
                    onChange={handleFileUpload}
                    id='file-upload'
                    accept='image/*'
                  />
                </div>
              </div>

              <TextField
                name='projectName'
                value={formData.projectName || ""}
                onChange={handleInputChange}
                variant='outlined'
                label='Proje Adı'
              />
              <TextField
                name='fieldManager'
                value={formData.fieldManager || ""}
                onChange={handleInputChange}
                variant='outlined'
                label='Saha Sorumlusu'
              />
              <TextField
                rows={4}
                multiline
                name='description'
                value={formData.description || ""}
                onChange={handleInputChange}
                variant='outlined'
                label='Proje Detayı'
              />
              <div className='flex items-center justify-between'>
                <TextField
                  name='startTime'
                  label='Başlangıç Tarihi'
                  value={formData.startTime || ""}
                  onChange={handleInputChange}
                  type='datetime-local'
                  InputProps={{ style: { borderRadius: "10px" } }}
                  format='YYYY-MM-DDTHH:mm'
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  name='endTime'
                  label='Bitiş Tarihi'
                  value={formData.endTime || ""}
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
                {task ? "Güncelle" : "Ekle"}
              </button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </Paper>
  )
}
