import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Projeler from "./pages/Projeler"
import Dashboard from "./pages/Home"
import SingleTask from "./pages/SingleTask"
import Takvim from "./pages/Takvim"
import Layout from "./layout/homeLayout"
import Login from "./pages/SigninPage"
import Register from "./pages/SignupPage"
import Kanban from "./pages/Kanban"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/home/projeler",
        element: <Projeler />,
        children: [
          {
            path: "/home/projeler/:id",
            element: <SingleTask />,
          },
        ],
      },
      {
        path: "/home/takvim",
        element: <Takvim />,
      },
      {
        path: "/home/kanban",
        element: <Kanban />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
