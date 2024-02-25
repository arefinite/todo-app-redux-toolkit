
import TodoList from './TodoList'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const TodoLists = () => {
  const {todos} = useSelector((state: RootState) => state.todos) 

  
  

  return (
    <main className='mt-8 flex flex-col gap-4'>
      {todos.length > 0 ? (
        todos.map(todo => <TodoList key={todo.id} todo={todo} />)
      ) : (
        <p>There is no todo added yet</p>
      )}
    </main>
  )
}
export default TodoLists
