// import { Stack, TextField, Paper } from "@mui/material"
// import Dialog from "@mui/material/Dialog"
// import DialogContent from "@mui/material/DialogContent"
// import DialogTitle from "@mui/material/DialogTitle"
// import { useEffect, useState } from "react"
// import Profil from "./Profil"
// import { updateTask } from "../../redux/features/task/taskAction"
// import { useDispatch } from "react-redux"

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.onload = () => {
//       resolve(fileReader.result)
//     }
//     fileReader.onerror = (err) => {
//       reject(err)
//     }
//   })
// }

// export default function UpdateTask({ open, setOpen, task }) {
//   const [avatar, setAvatar] = useState("")
//   const dispatch = useDispatch()
//   const [updateData, setUpdateData] = useState({
//     projectName: task.projectName,
//     avatar: task.avatar,
//     description: task.description,
//     fieldManager: task.fieldManager,
//     starTime: task.starTime,
//     endTime: task.endTime,
//   })

//   useEffect(() => {
//     dispatch(updateTask())
//   }, [dispatch, updateData])

//   const handleClickClose = () => {
//     setOpen(false)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(updateData)
//     dispatch(updateTask(task.id, { ...updateData, id: task.id }))
//   }

//   const handleInputChange = (e) => {
//     setUpdateData({ ...updateData, [e.target.name]: e.target.value })
//   }

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0]
//     const base64 = await convertToBase64(file)
//     setUpdateData({
//       ...updateData,
//       avatar: base64,
//     })
//     console.log(file)
//     setAvatar(file && URL.createObjectURL(file))
//   }

//   return (
//     <Paper>
//       <Dialog open={open} onClose={handleClickClose}>
//         <DialogTitle sx={{ fontWeight: "500", fontSize: "20px" }}>
//           Yeni Proje Ekle
//         </DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <Stack
//               sx={{
//                 width: "470px",
//                 height: "490px",
//               }}
//               spacing={2}
//               direction='column'
//             >
//               <Profil avatar={avatar} handleFileUpload={handleFileUpload} />

//               <TextField
//                 name='projectName'
//                 defaultValue={updateData.projectName}
//                 onChange={handleInputChange}
//                 variant='outlined'
//                 label='Project Name'
//               />
//               <TextField
//                 name='fieldManager'
//                 defaultValue={updateData.fieldManager}
//                 onChange={handleInputChange}
//                 variant='outlined'
//                 label='Saha Sorumlusu'
//               />
//               <TextField
//                 maxRows={2}
//                 minRows={2}
//                 name='description'
//                 defaultValue={updateData.description}
//                 onChange={handleInputChange}
//                 variant='outlined'
//                 label='Project Details'
//               />
//               <div className='flex items-center justify-between'>
//                 <TextField
//                   name='starTime'
//                   label='Start Date'
//                   defaultValue={updateData.starTime}
//                   onChange={handleInputChange}
//                   type='datetime-local'
//                   InputProps={{ style: { borderRadius: "10px" } }}
//                   format='YYYY-MM-DDTHH:mm'
//                   InputLabelProps={{ shrink: true }}
//                 />
//                 <TextField
//                   name='endTime'
//                   label='End Date'
//                   defaultValue={updateData.endTime}
//                   onChange={handleInputChange}
//                   type='datetime-local'
//                   InputProps={{ style: { borderRadius: "10px" } }}
//                   format='YYYY-MM-DDTHH:mm'
//                   InputLabelProps={{ shrink: true }}
//                 />
//               </div>
//               <button
//                 className='py-2 px-5 bg-blue-600 text-slate-50 rounded-lg hover:bg-blue-500 cursor-pointer'
//                 type='submit'
//               >
//                 Güncelle
//               </button>
//             </Stack>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </Paper>
//   )
// }
