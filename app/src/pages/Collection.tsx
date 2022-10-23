import React from 'react'
import NFTCard from '../components/NFTCard'
import Title from '../components/Title'

export default function Collection() {
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<Title label='Mi colección' />
			</section>
			<section className='bg-white-1 flex flex-wrap ml-3'>
				<p className='text-gray-1 px-4 pt-4'>
					Haz click sobre un NFT para ver sus detalles y la promoción incluída.
				</p>
				<NFTCard
					tokenId='1'
					rarity='common'
					name='NFT Común'
					src='https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'
				/>
				<NFTCard
					tokenId='2'
					rarity='rare'
					name='NFT Raro'
					src='https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'
				/>
				<NFTCard
					tokenId='3'
					rarity='epic'
					name='NFT Épico'
					src='https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'
				/>
			</section>
		</div>
	)
}
