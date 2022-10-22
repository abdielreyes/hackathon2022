import React from 'react'
import NFTCard from '../components/NFTCard'
import Subtitle from '../components/Subtitle'
import TestCard from '../components/TestCard'
import Title from '../components/Title'

export default function Marketplace() {
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<Title label='Marketplace' />
			</section>
			<section className='bg-white-1'>
				<NFTCard name='NFT Name' />
			</section>
		</div>
	)
}
