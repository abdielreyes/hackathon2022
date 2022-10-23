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
				<NFTCard name='NFT Name' />
				<NFTCard name='NFT Name' />
				<NFTCard name='NFT Name' />
			</section>
		</div>
	)
}