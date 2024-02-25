import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const Statistics = () => {

  const { todos } = useSelector((state: RootState) => state.todos)
  
  const totalTodos = todos.length 
  const completedTodos = todos.filter(t => t.isCompleted).length
  const remainingTodos = totalTodos - completedTodos

  return (
    <div className='flex justify-end mt-8 text-right'>
      <ul>
        <li>
          Total Todo: <strong>{totalTodos}</strong>
        </li>
        <li>

          Complete Todo: <strong>{completedTodos}</strong>
        </li>
        <li>

          Remaining Todo: <strong>{remainingTodos}</strong>
        </li>
      </ul>
    </div>
  )
}
export default Statistics
