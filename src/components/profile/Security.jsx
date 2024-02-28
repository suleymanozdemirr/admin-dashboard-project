import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material"

export default function Security() {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <div className='mb-4 shadow-sm first:rounded-md border-2'>
          <div className='font-semibold py-4 px-5 mb-0 bg-[#F8F8F9] border-b-[1px] border-b-gray-400'>
            Parolayı Değiştir
          </div>
          <form>
            <Stack spacing={3} direction='column' sx={{ m: "30px" }}>
              <TextField
                name='gecerli'
                variant='outlined'
                label='Geçerli Parola'
                fullWidth
                sx={{ mr: 2 }}
              />
              <TextField
                name='password'
                variant='outlined'
                label='Yeni Parola'
                fullWidth
              />
              <TextField
                name='confirmPassword'
                variant='outlined'
                label='Parolayı Onayla'
                fullWidth
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
      <div>
        <div className='col-span-2 ml-10'>
          <div className='mb-4 shadow-sm first:rounded-md border-2'>
            <div className='font-semibold py-4 px-5 mb-0 bg-[#F8F8F9] border-b-[1px] border-b-gray-400'>
              İki Faktörlü Kimlik Doğrulama
            </div>
            <div className='h-[350px] p-4'>
              <p className='text-base'>
                İki faktörlü kimlik doğrulamayı etkinleştirerek hesabınıza başka
                bir güvenlik düzeyi ekleyin. Tanınmayan cihazlarda ve
                tarayıcılarda oturum açma girişimlerinizi doğrulamak için size
                bir kısa mesaj göndereceğiz.
              </p>
              <form>
                <div className='mt-3'>
                  <RadioGroup defaultValue='off' name='radio-buttons-group'>
                    <FormControlLabel
                      value='on'
                      control={<Radio />}
                      label='Açık'
                    />
                    <FormControlLabel
                      value='off'
                      control={<Radio />}
                      label='Kapalı'
                    />
                  </RadioGroup>
                  <TextField
                    name='sms'
                    type='number'
                    variant='outlined'
                    label='SMS Numarası'
                    fullWidth
                    sx={{ marginTop: "1rem" }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
