import { FiMoreVertical } from "react-icons/fi"
import TrendingUp from "mdi-material-ui/TrendingUp"
import CurrencyUsd from "mdi-material-ui/CurrencyUsd"
import CellphoneLink from "mdi-material-ui/CellphoneLink"
import AccountOutline from "mdi-material-ui/AccountOutline"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Cards() {
  return (
    <div className='flex flex-col p-5'>
      <div className='bg-white rounded-xl p-2'>
        <div className='flex items-center justify-between p-4'>
          <div className='flex flex-col'>
            <span className='font-medium text-xl'>İstatistik Kart</span>
            <p className='font-normal text-sm mt-3'>
              Bu ay toplam %48.5 büyüme
            </p>
          </div>
          <button className='p-1 rounded-full border-2 hover:bg-slate-200'>
            <FiMoreVertical className='w-6 h-6' />
          </button>
        </div>
        <div className='p-4 flex items-center'>
          <div className='flex items-center justify-between'>
            <div className='w-full flex items-center mr-8'>
              <Avatar
                variant='rounded'
                sx={{
                  mr: 2,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: "#9155FD",
                }}
              >
                <TrendingUp sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='caption'>Sales</Typography>
                <Typography variant='h6'>245k</Typography>
              </Box>
            </div>
            <div className='w-full flex items-center mr-8'>
              <Avatar
                variant='rounded'
                sx={{
                  mr: 2,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: "#56CA00",
                }}
              >
                <AccountOutline sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='caption'>Customers</Typography>
                <Typography variant='h6'>12.5k</Typography>
              </Box>
            </div>
            <div className='w-full flex items-center mr-8'>
              <Avatar
                variant='rounded'
                sx={{
                  mr: 2,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: "#FFB400",
                }}
              >
                <CellphoneLink sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='caption'>Products</Typography>
                <Typography variant='h6'>1.54k</Typography>
              </Box>
            </div>
            <div className='w-full flex items-center'>
              <Avatar
                variant='rounded'
                sx={{
                  mr: 2,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: "#16B1FF",
                }}
              >
                <CurrencyUsd sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='caption'>Revenue</Typography>
                <Typography variant='h6'>$88k</Typography>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
