import React from 'react'
import Subtitle from './Subtitle'

interface NFTCardProps {
  name:string
}

export default function NFTCard({name}:NFTCardProps) {
  return (
    <div className='bg-white-2 mx-2 my-3 drop-shadow-md px-5 w-40'>
      <Subtitle label={name} />
    </div>
  )
}
