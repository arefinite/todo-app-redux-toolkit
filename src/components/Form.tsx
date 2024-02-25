import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setEditId, updateTodo } from '../redux/slices/todoSlice';
import { RootState } from '../redux/store';

const Form = () => {
  const dispatch = useDispatch();
  const { todos, editId } = useSelector((state: RootState) => state.todos);

  const [formData, setFormData] = useState({
    title: '',
    priority: 'high',
  });

  useEffect(() => {
    if (editId) {
      const todo = todos.find(t => t.id === editId);
      if (todo) {
        setFormData({
          title: todo.title,
          priority: todo.priority,
        });
      }
    }
  }, [editId, todos]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateTodo({ id: editId, todo: formData }));
      dispatch(setEditId(null));
    } else {
      const todoData = {
        id: crypto.randomUUID(),
        isCompleted: false,
        ...formData,
      };
      dispatch(addTodo(todoData));
    }
    setFormData({
      title: '',
      priority: 'high',
    });
  };
  const { title, priority } = formData
  return (
    <form
      className='flex flex-col gap-2 md:gap-0 md:flex-row mt-4'
      onSubmit={handleSubmit}
    >
      <div className='flex'>
        <input
          type='text'
          className='flex-1 px-3 py-2 outline-none'
          name='title'
          value={title}
          onChange={handleChange}
        />
        <select
          className='px-3 py-2 outline-none'
          name='priority'
          onChange={handleChange}
          value={priority}
        >
          <option value='high'>High</option>
          <option value='medium'>Medium</option>
          <option value='low'>Low</option>
        </select>
      </div>
      <input
        type='submit'
        value='Add Todo'
        className='px-3 py-2 bg-green-500 text-white md:ml-2 rounded cursor-pointer md:flex-1'
      />
    </form>
  )
}
export default Form
