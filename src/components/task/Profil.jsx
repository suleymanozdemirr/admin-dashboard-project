import { Avatar, MenuList } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { SlPencil } from 'react-icons/sl'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export default function Profil({ avatar, handleFileUpload }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const openEl = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex justify-center">
      <div className="relative border-dotted border-2 border-slate-300 rounded-full h-32 w-32 flex items-center justify-center ">
        <Avatar
          id="file-button"
          src={avatar}
          sx={{
            width: 100,
            height: 100,
          }}
        />

        <div className="absolute left-24 bottom-1 border-2 w-7 h-7 bg-slate-50 rounded-full flex items-center justify-center">
          <button
            id="basic-button"
            type="button"
            aria-controls={openEl ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openEl ? 'true' : undefined}
            onClick={handleClick}
          >
            <SlPencil />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openEl}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuList>
              <MenuItem onClick={handleClose}>
                <label htmlFor="file-upload">Fotoğraf Yükle</label>
              </MenuItem>
              <MenuItem onClick={handleClose}>Fotoğraf Sil</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <VisuallyHiddenInput
          type="file"
          name="avatar"
          onChange={handleFileUpload}
          id="file-upload"
          accept="image/*"
        />
      </div>
    </div>
  )
}
