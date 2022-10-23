import Button from '../components/Button'
import TestCard from '../components/TestCard';
import Title from '../components/Title'
import useAPI from '../hooks/useAPI'

export default function GetNFT() {
	const {getNFT} = useAPI();
	const onGetNFT = (rarity: number)=>{
		getNFT(rarity).then((data)=>{
			console.log(data);
		});
	}
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<Title label='Marketplace' />
			</section>
			<section className='bg-white-1 flex flex-col justify-center items-center space-y-5'>
				<div className='bg-bbva-blue-1 text-white px-8 py-5'>
					<p className='text-sm'>
						Utiliza tus puntos BBVA para adquirir NFTs. Los de más valor contienen beneficios más exclusivos.
					</p><br/>
					<p className='text-sm'>
						Tienes la oportunidad hasta de excentar la anualidad de tu tarjeta.
					</p>
				</div>
				<TestCard label='Común'>
					<p className='text-sm text-gray-1'>
						Gana promociones como tarjetas de regalo de Uber, compras a MSI, mensualidad 
						de seguro gratis, entre otros.
					</p><br/>
					<div className='text-center'>
						<Button label='Comprar por 8000 puntos' onClick={()=>onGetNFT(1)} />
					</div>
				</TestCard>
				<TestCard label='Raro'>
					<p className='text-sm text-gray-1'>
						Gana hasta un aumente de tu línea de crédito en un 5%, descuento en tasa de 
						interés anual por un año, entre otros
					</p><br/>
					<div className='text-center'>
						<Button label='Comprar por 16000 puntos' onClick={()=>onGetNFT(2)} />
					</div>
				</TestCard>
				<TestCard label='Épico'>
					<p className='text-sm text-gray-1'>
						Puedes ser acreedor a un préstamo personal con tasa preferencial, excentar 
						un pago de anualidad de tu tarjeta, entre otros.
					</p><br/>
					<div className='text-center'>
						<Button label='Comprar por 24000 puntos' onClick={()=>onGetNFT(3)} />
					</div>
				</TestCard>
				<div className='h-12'></div>
			</section>
		</div>
	)
}
