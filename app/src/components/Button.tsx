import {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export default function Button({label, ...defaultProps}: ButtonProps) {
  return (
    <div>
      <button className={`bg-bbva-blue-2 text-white
      py-3 px-10 font-bold text-xs
      md:text-lg md:px-14 shadow-md
      hover:shadow-blue-light-1
      transition-shadow ease-in-out duration-500`}
      {...defaultProps}>
        {label}
      </button>
    </div>
  )
}