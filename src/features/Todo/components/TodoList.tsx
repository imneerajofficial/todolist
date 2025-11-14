import React from 'react';
import { TodoListProps } from '../types/todo.types';
export const TodoList: React.FC<TodoListProps> = ({
  item_list = [],
  onDelete,
  onComplete,
}) => {
  return (
    <>
      {/* Todo Table */}
      <div className='overflow-x-auto bg-white shadow rounded-lg'>
        <table className='min-w-full text-sm text-gray-700'>
          <thead>
            <tr className='bg-blue-50'>
              <th className='px-5 py-3 text-left font-semibold'>ID</th>
              <th className='px-5 py-3 text-left font-semibold'>Task</th>
              <th className='px-5 py-3 text-left font-semibold'>Action</th>
            </tr>
          </thead>
          <tbody>
            {item_list.length > 0 &&
              item_list.map((todo, idx) => (
                <tr
                  className={`hover:bg-blue-100 transition ${
                    todo.completed ? 'text-gray-400' : ''
                  }`}
                  key={idx}
                >
                  <td
                    className={`px-5 py-3 border-t ${
                      todo.completed
                        ? 'line-through decoration-red-500 decoration-2 text-black'
                        : ''
                    }`}
                  >
                    {idx + 1}
                  </td>
                  <td
                    className={`px-5 py-3 border-t ${
                      todo.completed
                        ? 'line-through decoration-red-500 decoration-2 text-black'
                        : ''
                    }`}
                  >
                    {todo.todo}
                  </td>
                  <td
                    className={`px-5 py-3 border-t ${
                      todo.completed
                        ? 'line-through decoration-red-500 decoration-2 text-black'
                        : ''
                    }`}
                  >
                    {!todo.completed && (
                      <button
                        onClick={() => onComplete(todo.id)}
                        className='bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition font-medium'
                      >
                        Complete
                      </button>
                    )}
                    <button
                      onClick={() => onDelete(todo.id)}
                      className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition font-medium ml-2'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
