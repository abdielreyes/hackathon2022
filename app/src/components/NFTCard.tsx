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
        <div>
          <img src={src} alt='NFT image' className='w-full h-full' />
        </div>
        <Subtitle label={name} />
        <div className='flex flex-row'>
          <RarityTag rarity={rarity}/>
          <Button label='Canjear'/>         
        </div>
      </div>
    </Link>
  )
}
