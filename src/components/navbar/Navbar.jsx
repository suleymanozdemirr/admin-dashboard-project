import { useLocation } from "react-router-dom"
import { MdSearch, MdNotificationsNone } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaCaretDown } from "react-icons/fa"
import user from "../../assets/images.png"

export default function Navbar() {
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
        <div className='flex items-center gap-2 border-l pl-2 cursor-pointer'>
          <img src={user} alt='' width={50} height={50} />
          <span>Morphosium</span>
          <FaCaretDown size={20} className='text-slate-500' />
        </div>
      </div>
    </div>
  )
}
