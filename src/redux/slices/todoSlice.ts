import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: string;
  title: string;
  priority: string;
  isCompleted: boolean;
}

interface ITodos {
  todos: ITodo[];
  editId: string | null;
}

const initialState: ITodos = {
  todos: [],
  editId: null
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // add todo
    addTodo: (state, { payload }: PayloadAction<ITodo>) => {
      state.todos.push(payload);
    },
    // update todo
    updateTodo: (state, { payload }: PayloadAction<{ id: string; todo: Partial<ITodo> }>) => {
      const todoToUpdate = state.todos.find(todo => todo.id === payload.id);
      if (todoToUpdate) {
        Object.assign(todoToUpdate, payload.todo);
      }
    },
    // mark as done todo
    markTodo: (state, { payload }: PayloadAction<{ id: string; checked: boolean }>) => {
      const todoToMark = state.todos.find(todo => todo.id === payload.id);
      if (todoToMark) {
        todoToMark.isCompleted = payload.checked;
      }
    },
    // delete todo
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    // set edit id
    setEditId: (state, { payload }: PayloadAction<string | null>) => {
      state.editId = payload;
    }
  }
});

export const { addTodo, deleteTodo, markTodo, setEditId, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
