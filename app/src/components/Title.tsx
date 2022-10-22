import React from 'react'

interface TitleProps {
  label: string
}

export default function Title({label}:TitleProps) {
  return (
    <div>
      {label}
    </div>
  )
}
