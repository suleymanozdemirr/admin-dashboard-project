import Avatar from '@mui/material/Avatar'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: '#9155FF',
    icon: <TrendingUp sx={{ fontSize: '1.5rem' }} />,
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: '#56CA00',
    icon: <AccountOutline sx={{ fontSize: '1.5rem' }} />,
  },
  {
    stats: '1.54k',
    color: '#FFB400',
    title: 'Products',
    icon: <CellphoneLink sx={{ fontSize: '1.5rem' }} />,
  },
  {
    stats: '$88k',
    color: '#16B1FF',
    title: 'Revenue',
    icon: <CurrencyUsd sx={{ fontSize: '1.5rem' }} />,
  },
]

export default function Wrapper() {
  return (
    <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
      {salesData.map((item, index) => (
        <div
          key={index}
          className={`h-24 rounded-lg bg-white border-l-4 border-[${item.color}] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out`}
        >
          <div>
            <h2 className="text-base leading-7 font-normal">{item.title}</h2>
            <h1 className="text-lg leading-7 font-bold">{item.stats}</h1>
          </div>
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 40,
              height: 40,
              boxShadow: 3,
              color: 'white',
              backgroundColor: `${item.color}`,
            }}
          >
            {item.icon}
          </Avatar>
        </div>
      ))}
    </div>
  )
}
