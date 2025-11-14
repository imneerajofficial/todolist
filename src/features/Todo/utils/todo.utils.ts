import { Todoitem } from '../types/todo.types';

export const createTodoStorage = (todos: Todoitem[]): void => {
  localStorage.setItem('todo_list', JSON.stringify(todos));
};

export const getTodoStorage = (storage_name: string) => {
  const storageName = localStorage.getItem(storage_name);
  if (storageName) {
    return JSON.parse(storageName);
  }
};

export const checkExisting = (input: string, todos: Todoitem[]) => {
  return todos.some((todo) => todo.todo.toLowerCase() === input.toLowerCase());
};
