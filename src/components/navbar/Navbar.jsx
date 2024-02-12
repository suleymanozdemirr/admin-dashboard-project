import { useLocation, useNavigate } from "react-router-dom"
import { MdSearch, MdNotificationsNone } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import user1 from "../../assets/images.png"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLogout } from "../../redux/features/auth/authSlice"

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({ ...state.auth }))

  const handleLogout = () => {
    dispatch(setLogout)
    navigate("/")
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const location = useLocation()
  return (
    <div className='p-5 h-20 flex items-center justify-between bg-white border-b-2'>
      <div className='flex items-center ml-3 text-slate-500 cursor-pointer'>
        <RxHamburgerMenu size={25} />
        <div className='pl-10 text-xl font-semibold capitalize'>
          {location.pathname.split("/").pop()}
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2 rounded-xl'>
          <input className='outline-none' type='text' placeholder='Search...' />
          <MdSearch size={25} className='text-slate-500 cursor-pointer' />
        </div>
        <MdNotificationsNone
          size={25}
          className='text-slate-500 cursor-pointer'
        />
        <button
          id='basic-button'
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div className='flex items-center gap-2 border-l pl-2 cursor-pointer'>
            <img src={user1} alt='' width={50} height={50} />
            <span>Morphosium</span>
            {anchorEl ? (
              <FaCaretUp size={20} className='text-slate-500' />
            ) : (
              <FaCaretDown size={20} className='text-slate-500' />
            )}
          </div>
        </button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Profil</MenuItem>
          <MenuItem onClick={handleClose}>Çıkış Yap</MenuItem>
        </Menu>
      </div>
    </div>
  )
}
