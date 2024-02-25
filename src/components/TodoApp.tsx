import Form from './Form'
import Header from './Header'
import Statistics from './Statistics'
import TodoLists from './TodoLists'

const TodoApp = () => {
  return (
    <div className='flex justify-center py-4  '>
      <div className='w-full md:max-w-[500px] shadow-lg bg-stone-100 p-4'>
        <Header />
        <Form />
        <TodoLists />
        <Statistics />
      </div>
    </div>
  )
}
export default TodoApp
