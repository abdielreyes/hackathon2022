import React from 'react'

interface SubtitleProps {
  label: string
}

export default function Subtitle({label}:SubtitleProps) {
  return (
    <div className='text-gray-2 font-bold py-3'>
      {label}
    </div>
  )
}
