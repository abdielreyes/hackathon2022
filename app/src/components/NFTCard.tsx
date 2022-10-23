import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import RarityTag from './RarityTag'
import Subtitle from './Subtitle'

interface NFTCardProps {
  tokenId:string
  name:string
  src: string
  rarity: 'common' | 'rare' | 'epic'
}

export default function NFTCard({
  tokenId,
  rarity,
  name,
  src
}:NFTCardProps) {
  return (
    <Link to={`/nft/${tokenId}`}>
      <div className='bg-white-2 mx-2 my-3 drop-shadow-md px-5 w-40'>
        <div className='pt-4'>
          <img src={src} alt='NFT' className='w-full h-full' />
        </div>
        <Subtitle label={name} />
        <div className='flex flex-col'>
          <span className='flex flex-col justify-between'>
            <RarityTag rarity={rarity}/>
          </span>
          <span className='my-4'>
            <Button label='Canjear'/> 
          </span>      
        </div>
      </div>
    </Link>
  )
}
