import List from "../components/task/List"
import CardTask from "../components/task/CardTask"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserTask } from "../redux/features/task/taskAction"

export default function Projeler() {
  const { user } = useSelector((state) => ({ ...state.auth }))
  const { userTask } = useSelector((state) => ({ ...state.task })) || []
  const userId = user?.result?.id
  const dispatch = useDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(getUserTask(userId))
    }
  }, [userId, dispatch])

  return (
    <div>
      <List />
      <div className='flex items-center flex-wrap p-2'>
        {Array.isArray(userTask) && userTask.length === 0 && (
          <h1>Henüz bir proje yok</h1>
        )}
        {Array.isArray(userTask) &&
          userTask
            .map((item, i) => <CardTask key={item.id} task={item} {...item} />)
            .reverse()}
      </div>
    </div>
  )
}
