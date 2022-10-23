import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import RarityTag from '../components/RarityTag';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title'
import { useUserInfo } from '../contexts/UserInfoContext'

export default function NFTInfo() {
	const {id} = useParams(); 
	const {money, name, _id} = useUserInfo();
	console.log(id);
	
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<Title label='Detalles de NFT' />
			</section>
			<div className='mx-6'>
				<Subtitle label={'NFT name'} />
				<RarityTag rarity='common' />
			</div>
			<div className='w-full px-5 flex justify-center items-center'>
				<div className='bg-white-2 mx-2 my-3 drop-shadow-md p-5 w-full max-w-sm'>
					<div>
						<img src={'https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'}
							alt='NFT'
							className='w-full h-full' />
					</div>
					<div className='flex flex-col mt-2 px-2 text-gray-1'>
						<span>Descripción de la promoción</span>
						<span>ID:</span>
						<span className='text-sm text-right'>
							Obtenido el dd/mm/aaaa
						</span>
					</div>
				</div>
			</div>
			<div className='flex flex-col px-10 bg-white-1 pb-10'>
				<div className='text-center py-2'>
					<Button label='Canjear'/>                
				</div>
				<div className='flex flex-row justify-between py-2'>
					<Button label='Vender'/> 
					<Button label='Transferir'/>
				</div>       
			</div>
		</div>
	)
}
