import { FC } from 'react'
import { TodoType } from '../types/types';

type TodoProps = {
  todo: TodoType;
  deleteTodo: (id: string) => void;
}

const Todo: FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='bg-white shadow-xl rounded-lg p-4 min-w-[300px] w-1/3 mt-3 min-h-max h-auto'>
        <li className='flex justify-center items-center'>
          <span className='text-lg flex-1'>
            {todo.description}
          </span>
          <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      </div>
    </div>
  )
}

export default Todo;