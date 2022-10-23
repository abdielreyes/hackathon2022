import { InputHTMLAttributes } from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	onChange?: (value:any )=>void
}

export default function Input({onChange=(e:string )=>{}, ...defaultProps}: InputProps) {
  return (
    <input
      type='text'
      className='bg-white-1 w-full my-2 h-10 rounded-sm outline-none text-black
      focus:ring-0 focus:ring-white text-sm' 
      value={defaultProps.value}
      onChange={(e)=>onChange(e.target.value)} 
      placeholder={defaultProps.placeholder}
    />
  )
}