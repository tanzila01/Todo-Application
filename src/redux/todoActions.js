import { ADD_TODO, CHANGE_TODO_STATE, REMOVE_TODO, UPDATE_TODO } from './todoConstants';

export const addTodo = (title, description) => ({
  type: ADD_TODO,
  payload: { title, description }
});

export const changeTodoState = (todoItem) => ({
  type: CHANGE_TODO_STATE,
  payload: todoItem
});

export const RemoveTodo = (todoItem_id) => ({
  type: REMOVE_TODO,
  payload: todoItem_id
});

export const updateTodo = (todoItem) => ({
  type: UPDATE_TODO,
  payload: todoItem
});