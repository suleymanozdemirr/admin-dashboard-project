import List from '../components/task/List'
import CardTask from '../components/task/CardTask'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllTask } from '../redux/features/task/taskAction'

export default function Projeler() {
  const tasks = useSelector((state) => state.task.tasks)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTask())
  }, [dispatch])
  return (
    <div>
      <List />
      <div className="flex items-center flex-wrap p-2">
        {tasks &&
          tasks
            .map((item) => <CardTask key={item.id} task={item} {...item} />)
            .reverse()}
      </div>
    </div>
  )
}
