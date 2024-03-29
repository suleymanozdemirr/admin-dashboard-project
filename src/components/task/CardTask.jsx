import Card from "@mui/material/Card"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import Tooltip from "@mui/material/Tooltip"
import { FiMoreHorizontal } from "react-icons/fi"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import { useState } from "react"
import ProgressBar from "./ProgressBar"
import { useDispatch } from "react-redux"
import { deleteTask } from "../../redux/features/task/taskAction"
import AddEditTask from "./AddEditTask"

export default function CardTask({
  projectName,
  description,
  fieldManager,
  progres,
  avatar,
  task,
}) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const openEl = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleDate = (startTime, endTime) => {
    console.log(startTime, endTime)
    const diffMilliseconds = Date.parse(endTime) - Date.parse(startTime)
    const differenceInDays = Math.floor(
      diffMilliseconds / (1000 * 60 * 60 * 24)
    )
    const differenceInWeeks = Math.floor(differenceInDays / 7)
    if (differenceInDays <= 0) {
      return "Bitim Onayı"
    } else if (differenceInDays < 7) {
      return `${differenceInDays} gün kaldı`
    } else {
      return `${differenceInWeeks} hafta kaldı`
    }
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: "20px",
        margin: "10px",
        "@media (min-width: 800px)": {
          maxWidth: 390,
        },
      }}
    >
      {open ? <AddEditTask task={task} open={open} setOpen={setOpen} /> : ""}

      <div className='flex items-center p-7 space-x-3'>
        <div className='border-dashed border-2 p-1 rounded-xl'>
          <Avatar
            src={avatar}
            alt=''
            sx={{ width: "45px", height: "45px" }}
            variant='rounded'
          />
        </div>
        <div className='w-2/3'>
          <h5 className='text-base font-semibold'>{projectName}</h5>
          <Tooltip title={fieldManager} placement='right-start'>
            <span className='text-sm font-normal cursor-pointer'>
              Saha Sorumlusu:{" "}
              {fieldManager.length > 10
                ? `${fieldManager.slice(0, 10)}...`
                : fieldManager}
            </span>
          </Tooltip>
        </div>
        <button
          id='basic-button'
          aria-controls={openEl ? "basic-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={openEl ? "true" : undefined}
          onClick={handleClick}
          className='p-3'
        >
          <FiMoreHorizontal size={20} className='-mr-3' />
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
            <MenuItem onClick={handleClickOpen}>Güncelle</MenuItem>
            <MenuItem onClick={() => handleDelete(task.id)}>Sil</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <CardContent sx={{ marginTop: "-15px" }}>
        <Typography
          variant='body2'
          color='text.primary'
          sx={{ height: "80px" }}
        >
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Typography>
        <div className='w-auto flex items-center justify-between flex-wrap'>
          <span className='text-sm'>İlerleme:</span>
          <span className='text-sm'>{progres}%</span>
          <ProgressBar progres={progres} />
        </div>
      </CardContent>
      <div className='flex items-center justify-between p-4'>
        <div className='h-9 w-32 flex items-center justify-center p-1 bg-slate-300 rounded-full'>
          {task.startTime &&
            task.endTime &&
            handleDate(task.startTime, task.endTime)}
        </div>
        <div className='flex items-center'>
          <Tooltip title='Süleyman Özdemir' arrow>
            <Stack direction='row' spacing={1}>
              <Avatar
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
                sx={{ width: 36, height: 36 }}
              />
              <Avatar
                alt='Travis Howard'
                src='/static/images/avatar/2.jpg'
                sx={{ width: 36, height: 36 }}
              />
            </Stack>
          </Tooltip>
        </div>
      </div>
    </Card>
  )
}
