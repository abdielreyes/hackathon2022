import React from 'react'
import Input from '../components/Input'
import Subtitle from '../components/Subtitle'
import TestCard from '../components/TestCard'
import Title from '../components/Title'

export default function MoneyTest() {
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<Title label='Sección de Pruebas' />
			</section>
			<section className='bg-white-1'>
				<TestCard 
					label='Agregar dinero de prueba'
				/>
				<TestCard 
					label='Comprar con TDC'
				/>
				<Input />
			</section>
		</div>
	)
}
