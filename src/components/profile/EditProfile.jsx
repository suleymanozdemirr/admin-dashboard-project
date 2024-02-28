import { Avatar, Stack, TextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { useState } from "react"

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

export default function EditProfile() {
  const [valueData, setValueData] = useState({
    profile: "",
    adı: "",
    soyadı: "",
    sirket: "",
    location: "",
    email: "",
    telefon: "",
    dogumTarihi: new Date(),
  })
  const [profile, setProfile] = useState("")
  function handleImage(e) {
    const file = e.target.files[0]
    setProfile(file && URL.createObjectURL(file))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValueData({
      profile: profile,
      adı: "",
      soyadı: "",
      sirket: "",
      location: "",
      email: "",
      telefon: "",
      dogumTarihi: new Date(),
    })
    setProfile(null)
  }
  const handleInputChange = (e) => {
    setValueData({ ...valueData, [e.target.name]: e.target.value })
  }
  return (
    <div className='grid grid-cols-3'>
      <div>
        <div className='mb-4 shadow-sm first:rounded-md border-2'>
          <div className='font-semibold py-4 px-5 mb-0 bg-[#F8F8F9] border-b-[1px] border-b-gray-400'>
            Kullanıcı Fotoğrafı
          </div>
          <div className='flex items-center flex-col p-3'>
            <Avatar
              src={profile}
              sx={{
                width: 150,
                height: 150,
                marginBottom: "16px",
              }}
            />

            <Button
              component='label'
              role={undefined}
              variant='contained'
              tabIndex={-1}
            >
              Fotoğraf Yükle
              <VisuallyHiddenInput
                onChange={handleImage}
                type='file'
                accept='image/*'
                name='profile'
              />
            </Button>
          </div>
        </div>
      </div>
      <div className='col-span-2 ml-10'>
        <div className='mb-4 shadow-sm first:rounded-md border-2'>
          <div className='font-semibold py-4 px-5 mb-0 bg-[#F8F8F9] border-b-[1px] border-b-gray-400'>
            Kullanıcı Detayı
          </div>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} direction='column' sx={{ m: "30px" }}>
              <div className='flex items-center justify-between'>
                <TextField
                  name='adı'
                  value={valueData.adı}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Adınız'
                  fullWidth
                  sx={{ mr: 2 }}
                />
                <TextField
                  name='soyadı'
                  value={valueData.soyadı}
                  onChange={handleInputChange}
                  variant='outlined'
                  label='Soyadınız'
                  fullWidth
                />
              </div>
              <TextField
                name='sirket'
                value={valueData.sirket}
                onChange={handleInputChange}
                variant='outlined'
                label='Şirket Adı'
                fullWidth
              />
              <TextField
                name='location'
                value={valueData.location}
                onChange={handleInputChange}
                variant='outlined'
                label='Location'
                fullWidth
              />
              <TextField
                name='email'
                value={valueData.email}
                onChange={handleInputChange}
                type='email'
                variant='outlined'
                label='Email Adresi'
                fullWidth
              />
              <TextField
                name='telefon'
                value={valueData.telefon}
                onChange={handleInputChange}
                variant='outlined'
                label='Telefon Numarası'
                fullWidth
              />
              <TextField
                name='startTime'
                value={valueData.dogumTarihi}
                onChange={handleInputChange}
                label='Doğum Tarihi'
                type='datetime-local'
                format='YYYY-MM-DDTHH:mm'
                InputLabelProps={{ shrink: true }}
              />
              <div>
                <button
                  className='py-2 px-10 bg-blue-600 text-slate-50 rounded-lg hover:bg-blue-500 cursor-pointer'
                  type='submit'
                >
                  Kaydet
                </button>
              </div>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  )
}
