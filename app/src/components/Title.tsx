import React from 'react'

interface TitleProps {
  label: string
}

export default function Title({label}:TitleProps) {
  return (
    <div className='text-white-2 text-xl text-center py-3'>
      {label}
    </div>
  )
}
