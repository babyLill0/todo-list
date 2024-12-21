import { FC } from 'react'

type TodoCardProps = {
  children?: React.ReactNode | null;
}

const TodoCard: FC<TodoCardProps> = ({children}) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-white shadow-xl rounded-lg p-4 min-w-[300px] w-1/3 min-h-max h-auto'>
        {children}
      </div>
    </div>
  )
}

export default TodoCard