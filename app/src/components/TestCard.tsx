import React from 'react'
import Subtitle from './Subtitle'

interface TestCardProps {
  label:string
}

export default function TestCard({label}:TestCardProps) {
  return (
    <div className='bg-white-2 m-5 drop-shadow-md px-5'>
      <Subtitle label={label} />
    </div>
  )
}
