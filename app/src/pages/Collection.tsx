import React from 'react'
import NFTCard from '../components/NFTCard'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

export default function Collection() {
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<div className='text-white-2 text-center'>
					Hola, Joss
				</div>
				<Title label='Mi colección' />
				<div className='text-white-2'>
					Ordenar por:
				</div>
			</section>
			<section className='bg-white-1 flex flex-wrap'>
				<NFTCard
					tokenId='1'
					rarity='common'
					name='NFT Name'
					src='https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'
				/>
				<NFTCard
					tokenId='2'
					rarity='rare'
					name='NFT Name'
					src='https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'
				/>
				<NFTCard
					tokenId='3'
					rarity='epic'
					name='NFT Name'
					src='https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'
				/>
			</section>
		</div>
	)
}
