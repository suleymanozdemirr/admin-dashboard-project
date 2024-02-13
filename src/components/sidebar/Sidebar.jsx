import { GoProjectSymlink } from "react-icons/go"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import logo from "../../assets/logo.png"

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
    title: "Satın Alma",
    path: "#",
  },
  {
    icon: <GoProjectSymlink />,
    title: "Envanter",
    path: "#",
  },
  {
    icon: <GoProjectSymlink />,
    title: "Muhasebe",
    path: "#",
  },
  {
    icon: <GoProjectSymlink />,
    title: "Kurumsal Hafıza",
    path: "#",
  },
]

export default function Sidebar() {
  const location = useLocation()
  return (
    <div className='w-64 md:w-64 min-h-screen border-r-2'>
      <div className='flex items-center justify-center -mt-7'>
        <img
          className='rounded-full object-cover'
          src={logo}
          alt=''
          width={200}
          height={200}
        />
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
