import React, { ReactNode } from 'react'

interface MobileLayoutProps{
	children: ReactNode
}

export default function MobileLayout({children}:MobileLayoutProps) {
  return (
    <div className='bg-white-1 w-full h-screen max-w-sm'>
      {children}
    </div>
  )
}
