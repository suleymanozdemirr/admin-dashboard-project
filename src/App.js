import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'

import Projeler from './pages/Projeler'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Dashboard from './pages/Home'
import SingleTask from './pages/SingleTask'
import Takvim from './pages/Takvim'

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-[#F2EDF3]">
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/projeler',
          element: <Projeler />,
          children: [
            {
              path: '/projeler/:id',
              element: <SingleTask />,
            },
          ],
        },
        {
          path: '/takvim',
          element: <Takvim />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
