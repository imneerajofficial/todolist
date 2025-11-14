import React, { useState } from 'react';
import { AddTodoProps } from '../types/todo.types';
export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [inputVal, setInputVal] = useState<string>('');

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    onAdd(inputVal);
    setInputVal('');
  };

  return (
    <>
      <form
        className='bg-white shadow-md rounded-lg px-6 py-5 mb-8'
        onSubmit={handlerSubmit}
      >
        <label
          htmlFor='todo'
          className='block mb-3 text-base font-semibold text-gray-700'
        >
          Add Todo
        </label>
        <div className='flex gap-3'>
          <input
            type='text'
            id='todo'
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder='Enter task...'
            className='flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-blue-700 transition'
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
