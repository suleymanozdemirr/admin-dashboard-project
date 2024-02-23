import { GoProjectSymlink } from "react-icons/go"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import logo from "../../assets/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"

const menuItem = [
  {
    icon: <GoProjectSymlink />,
    title: "Dashboard",
    path: "/home",
  },
  {
    icon: <GoProjectSymlink />,
    title: "Projeler",
    path: "/home/projeler",
  },
  {
    icon: <GoProjectSymlink />,
    title: "Takvim",
    path: "/home/takvim",
  },
  {
    icon: <GoProjectSymlink />,
    title: "Kanban",
    path: "/home/kanban",
  },
  {
    icon: <GoProjectSymlink />,
    title: "Kullanıcı İşlemleri",
    path: "#",
  },
]

export default function Sidebar() {
  const location = useLocation()
  return (
    <div className='w-64 min-h-screen border-r-2'>
      <div className='flex items-center justify-flex mt-6 mb-4 ml-5 cursor-pointer max-lg:w-56'>
        <img
          className='rounded-full object-cover'
          src={logo}
          alt='logo'
          width={50}
          height={50}
        />
        <span className='text-lg font-bold ml-2 text-blue-900'>FAWDASH</span>
      </div>
      <div className='flex flex-col'>
        {menuItem.map((cat, i) => (
          <div key={i}>
            <Link
              to={cat.path}
              className={`flex items-center space-x-3 p-4 cursor-pointer ${
                location.pathname === cat.path &&
                "border-l-4 border-blue-600 bg-[#EEF5FF] text-blue-600"
              }`}
            >
              <span className='text-lg'>{cat.icon}</span>
              <span className='text-base'>{cat.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
