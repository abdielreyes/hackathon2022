import React from 'react'
import NFTCard from '../components/NFTCard'
import Title from '../components/Title'
import { useWallet } from '../contexts/WalletContext'

export default function Collection() {
	const {metadatas} = useWallet();
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<Title label='Mi colección' />
			</section>
			<section className='bg-white-1 flex flex-wrap ml-3'>
				<p className='text-gray-1 px-4 pt-4'>
					Haz click sobre un NFT para ver sus detalles y la promoción incluída.
				</p>
				{metadatas?.map(metadata=>{
					return (
						<NFTCard
							tokenId={metadata.tokenId}
							rarity={metadata.rarity}
							name={metadata.name}
							src={metadata.image}
							key={metadata.tokenId}
						/>
					)

				})}
			</section>
			<div className='h-16 bg-white-1'></div>
		</div>
	)
}
