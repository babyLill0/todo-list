import { FC } from 'react'

type ButtonProps = {
  children?: React.ReactNode | null;
  htmlType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({children, htmlType = 'button', onClick}) => {
  return (
    <button
      className='bg-customGreen text-white px-4 py-2 rounded-md '
      type={htmlType}
      onClick={onClick}
    >
      {children || 'button'}
    </button>
  )
}

export default Button