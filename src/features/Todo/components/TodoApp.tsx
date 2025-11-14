import React, { useState, useEffect } from 'react';
import { Todoitem } from '../types/todo.types';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { createTodoStorage, getTodoStorage } from '../utils/todo.utils';
import { checkExisting } from '../utils/todo.utils';
export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todoitem[]>([]);

  const handleTaskAdd = (inputTodo: string) => {
    // const existingFilterCheck=todos.filter(todo
    if (checkExisting(inputTodo, todos)) {
      alert(`This ${inputTodo} todo already exists`);
      return;
    }
    const updated = [
      ...todos,
      { id: Date.now(), todo: inputTodo, completed: false },
    ];
    setTodos(updated);
    createTodoStorage(updated);
  };

  const handleTaskDelete = (id: number) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
    createTodoStorage(updated);
  };

  const handleTaskStatusUpdate = (id: number) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );

    setTodos(updated);
    createTodoStorage(updated);
  };

  useEffect(() => {
    const store_val = getTodoStorage('todo_list');
    if (store_val) {
      setTodos(store_val);
    }
  }, []);
  return (
    <>
      <div className='min-h-full'>
        <main>
          <div className='mx-auto max-w-3xl px-4 py-8'>
            <div className='mb-8 text-center'>
              <h1 className='text-3xl font-bold text-blue-700 mb-2'>
                Todo List
              </h1>
            </div>
            <AddTodo onAdd={handleTaskAdd} />
            <TodoList
              item_list={todos}
              onDelete={handleTaskDelete}
              onComplete={handleTaskStatusUpdate}
            />
          </div>
        </main>
      </div>
    </>
  );
};
