import { InputHTMLAttributes } from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	onChange?: (value:any )=>void
}

export default function InputLogin({onChange=(e:string )=>{}, ...defaultProps}: InputProps) {
  return (
    <input
      type='text'
      className='bg-bbva-blue-3 w-4/5 my-2 h-10 outline-none text-white-2 border-b-2 border-white-2
      focus:ring-0 focus:ring-white text-sm' 
      value={defaultProps.value}
      onChange={(e)=>onChange(e.target.value)} 
      placeholder={defaultProps.placeholder}
    />
  )
}