import React, { ReactNode } from 'react'

interface MobileLayoutProps{
	children: ReactNode
}

export default function MobileLayout({children}:MobileLayoutProps) {
  return (
    <div className='bg-blue-500 w-full h-screen'>
      {children}
    </div>
  )
}
