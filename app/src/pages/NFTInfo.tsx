import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import RarityTag from '../components/RarityTag';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title'
import { useUserInfo } from '../contexts/UserInfo'

export default function NFTInfo() {
	const {id} = useParams(); 
	const {money, name, _id} = useUserInfo();
	console.log(id);
	
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1'>
				<div className='text-white-2 text-center'>
					Hola, {name}
				</div>
				<Title label='Mi Info' />
				<div className='text-white-2 flex flex-row space-x-5'>
					<span>Dinero:</span>
					<span>{money}</span>
				</div>
				<div className='text-white-2 flex flex-row space-x-5'>
					<span>id:</span>
					<span>{_id}</span>
				</div>
			</section>
			<Subtitle label={'NFT name'} />
			<RarityTag rarity='common' />
			<div className='w-full flex justify-center items-center'>
				<div className='bg-white-2 mx-2 my-3 drop-shadow-md px-5 w-full max-w-sm'>
					<div>
						<img src={'https://gateway.pinata.cloud/ipfs/QmPR5g6pdVPDzS5ksVtQTxL1nBm1vLtZqjn2Mri13AuxrB'}
							alt='NFT'
							className='w-full h-full' />
					</div>
					<Subtitle label={'descripcion'} />
					<div>
						<span>descripcion</span>
						<span>id</span>
						<span>aaaa</span>
					</div>
					<div className='flex flex-row'>
						<Button label='Canjear'/>         
						<Button label='Vender'/>         
						<Button label='Transferir'/>         
					</div>
				</div>
			</div>
		</div>
	)
}
