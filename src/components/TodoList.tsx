import { Edit, Trash } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { ITodo, deleteTodo, markTodo, setEditId } from '../redux/slices/todoSlice'

const TodoList = ({
  todo: { id, title, isCompleted, priority },
}: {
  todo: ITodo
}) => {
  const dispatch = useDispatch()

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(markTodo({ id, checked: e.target.checked }))
  }
  return (
    <div
      className={`bg-slate-200 p-2 rounded flex justify-between items-center ${
        isCompleted && 'opacity-50'
      }`}
    >
      <div className='flex items-center gap-2 flex-1'>
        <input
          type='checkbox'
          className='mt-1'
          id='check'
          checked={isCompleted}
          onChange={handleChecked}
        />
        <label htmlFor='check'>
          {title} [{priority}]
        </label>
      </div>
      <div className='flex items-center gap-3'>
        {!isCompleted && (
          <Edit size={16} className='text-green-600 cursor-pointer' onClick={()=>dispatch(setEditId(id))} />
        )}
        {!isCompleted && (
          <Trash
            size={16}
            className='text-red-600 cursor-pointer'
            onClick={() => dispatch(deleteTodo(id))}
          />
        )}
      </div>
    </div>
  )
}
export default TodoList
