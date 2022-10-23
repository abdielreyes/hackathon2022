import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import TestCard from '../components/TestCard'
import Title from '../components/Title'
import useAPI from '../hooks/useAPI'

export default function MoneyTest() {
	const navigate = useNavigate();
	const [money, setMoney] = useState(0);
	const [buyPrice, setBuyPrice] = useState(0);
	const {faucet, purchase} = useAPI();
	const onGetMoney = ()=>{
		faucet(money).then((res)=>{
			console.log(res);
			navigate('/');
		})	
	}
	const onPurchase = ()=>{
		purchase(buyPrice).then((res)=>{
			console.log(res);
			navigate('/');
		})	
	}
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<Title label='Sección de Pruebas' />
			</section>
			<section className='bg-white-1'>
				<TestCard 
					label='Agregar dinero de prueba'
				>
					<Input value={money} onChange={setMoney} />
					<div className='text-center mt-3'>
						<Button label='Agregar' onClick={onGetMoney} />
					</div>
				</TestCard>

				<TestCard 
					label='Comprar con TDC'
				>
					<Input value={buyPrice} onChange={setBuyPrice} />
					<div className='text-center mt-3'>
						<Button label='Comprar' onClick={onPurchase} />
					</div>
				</TestCard>
			</section>
		</div>
	)
}
