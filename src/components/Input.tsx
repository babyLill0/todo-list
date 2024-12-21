import React from 'react'

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: 'warning' | 'success' | 'error' | 'default';
  placeholder?: string; 
  label?: string; 
  buttonComponent?: React.ReactNode | null;
  value?: string;
}

function Input({onChange, className, type = 'default', placeholder, label, buttonComponent, value}: InputProps) {
  const typeClassname = type === 'warning' ? 'outline-yellow-500' : type === 'success' ? 'outline-green-500' : type === 'error' ? 'outline-red-500' : '';
  
  return (<>
    {label && 
      <div className='w-full'>
        <label htmlFor='input' className='text-md font-bold text-customGray select-none self-start'>{label}</label>
      </div>
    }

    <div className='flex gap-2 mt-4'>
      <input 
        id='input'
        onChange={onChange} 
        type="text" 
        placeholder={placeholder || "Type something..."}
        className={`border border-gray-300 rounded-md py-4 px-2 w-full ${className} ${typeClassname}`}
        value={value}
      />
      {buttonComponent && 
        buttonComponent
      }
    </div>
  </>)
}

export default Input