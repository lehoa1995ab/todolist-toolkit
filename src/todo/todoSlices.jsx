import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, title: "Task 1", status: "Complete" ,date:"2023-06-29 12:41:52"},
    { id: 2, title: "Task 2", status: "Incomplete" ,date:"2023-06-29 12:41:52"},
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { id, title, status,date } = action.payload;
      state.todos.push({ id, title, status,date });
    },
    editTodo: (state, action) => {
      const { id, title, status,date } = action.payload;
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id == action.payload.id){
            return action.payload
          }
          return item
        })
      }
    },
    deleteTodo: (state, action) => {
        const id = action.payload;
        state.todos = state.todos.filter((todo) => todo.id !== id);
      },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
