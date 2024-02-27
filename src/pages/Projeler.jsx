import List from "../components/task/List"
import CardTask from "../components/task/CardTask"
// import { useDispatch, useSelector } from "react-redux"
// import { useEffect } from "react"
// import { getAllTask } from "../redux/features/task/taskAction"

export const allTasks = [
  {
    id: 1,
    projectName: "Örnek Proje 1",
    description: "Bu bir örnek görev açıklaması 1.",
    fieldManager: "Ayşe Yılmaz",
    progres: 50,
    avatar: "https://example.com/avatar6.jpg",
    startTime: "2024-01-29T14:03:33.640Z",
    endTime: "2024-02-10T18:45:00.000Z",
  },
  {
    id: 2,
    projectName: "Örnek Proje 2",
    description: "Bu bir örnek görev açıklaması 2.",
    fieldManager: "Ahmet Kaya",
    progres: 70,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcBKbVWpDeov7HmURWS9IppzAG_YcTPlQ9Q",
    startTime: "2024-02-05T08:30:00.000Z",
    endTime: "2024-02-20T16:20:00.000Z",
  },
  {
    id: 3,
    projectName: "Örnek Proje 3",
    description: "Bu bir örnek görev açıklaması 3.",
    fieldManager: "Fatma Demir",
    progres: 80,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeRPJ6Cu_cdiLiDb_ffrn6r0oi09bJXoGyA",
    startTime: "2024-02-12T11:15:00.000Z",
    endTime: "2024-03-05T12:10:00.000Z",
  },
  {
    id: 4,
    projectName: "Örnek Proje 4",
    description: "Bu bir örnek görev açıklaması 4.",
    fieldManager: "Mehmet Yıldız",
    progres: 60,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVSkmNOQ6abMCc5e6R2r7VwRZDkBHFTyzAg",
    startTime: "2024-02-18T13:45:00.000Z",
    endTime: "2024-03-10T14:30:00.000Z",
  },
  {
    id: 5,
    projectName: "Örnek Proje 5",
    description: "Bu bir örnek görev açıklaması 5.",
    fieldManager: "Zeynep Can",
    progres: 90,
    avatar:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    startTime: "2024-02-25T09:20:00.000Z",
    endTime: "2024-03-15T10:45:00.000Z",
  },
  {
    id: 6,
    projectName: "Örnek Proje 6",
    description: "Bu bir örnek görev açıklaması 6.",
    fieldManager: "Mustafa Korkmaz",
    progres: 75,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcBKbVWpDeov7HmURWS9IppzAG_YcTPlQ9Q",
    startTime: "2024-01-29T14:03:33.640Z",
    endTime: "2024-01-29T14:03:33.640Z",
  },
]

export default function Projeler() {
  // const { allTask } = useSelector((state) => ({ ...state.task })) || []
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getAllTask())
  // }, [dispatch])

  return (
    <div>
      <List />
      <div className='flex items-center flex-wrap p-2'>
        {allTasks &&
          allTasks
            .map((item) => <CardTask key={item.id} task={item} {...item} />)
            .reverse()}
      </div>
    </div>
  )
}
