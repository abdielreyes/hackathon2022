import React, { ReactNode } from 'react'
import Subtitle from './Subtitle'

interface TestCardProps {
  label:string
  children?: ReactNode
}

export default function TestCard({
  label,
  children
}:TestCardProps) {
  return (
    <div className='bg-white-2 m-5 drop-shadow-md px-5 pb-5'>
      <Subtitle label={label} />
      {children}
    </div>
  )
}
