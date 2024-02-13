import { useLocation, useNavigate } from "react-router-dom"
import { MdSearch, MdNotificationsNone, MdLogout } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import user1 from "../../assets/images.png"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/features/auth/authAction"

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({ ...state.auth }))

  const handleLogout = () => {
    dispatch(logout())
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
    <div className='p-5 h-16 flex items-center justify-between bg-white border-b-2'>
      <div className='flex items-center ml-3 text-slate-500 cursor-pointer'>
        <RxHamburgerMenu size={20} />
        <div className='pl-10 text-xl font-semibold capitalize'>
          {location.pathname.split("/").pop()}
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2 rounded-xl'>
          <input
            className='outline-none text-sm'
            type='text'
            placeholder='Search...'
          />
          <MdSearch size={20} className='text-slate-500 cursor-pointer' />
        </div>
        <MdNotificationsNone
          size={20}
          className='text-slate-500 cursor-pointer'
        />
        <button
          id='basic-button'
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {user?.result?.id ? (
            <div className='flex items-center gap-2 border-l pl-2 cursor-pointer'>
              <img src={user?.result?.imageUrl} alt='' width={45} height={45} />
              <span className='text-sm'>{user?.result?.name}</span>
              {anchorEl ? (
                <FaCaretUp size={18} className='text-slate-500' />
              ) : (
                <FaCaretDown size={18} className='text-slate-500' />
              )}
            </div>
          ) : (
            <div className='flex items-center gap-2 border-l pl-2 cursor-pointer'>
              <img src={user1} alt='' width={45} height={45} />
              <span className='text-sm'>Morphosium</span>
              {anchorEl ? (
                <FaCaretUp size={18} className='text-slate-500' />
              ) : (
                <FaCaretDown size={18} className='text-slate-500' />
              )}
            </div>
          )}
        </button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ position: "absolute", top: "7px", left: "10px" }}
        >
          <MenuList sx={{ width: "150px" }}>
            <MenuItem
              onClick={handleClose}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                fontWeight: "400",
                marginBottom: "5px",
                "&:hover": {
                  color: "#3BC1C1",
                  bgcolor: "white",
                },
              }}
            >
              <FiUser size={18} />
              Profil Sayfası
            </MenuItem>
            <MenuItem
              onClick={handleLogout}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                fontWeight: "400",
                "&:hover": { color: "#3BC1C1", bgcolor: "white" },
              }}
            >
              <MdLogout size={18} />
              Çıkış Yap
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}
