import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import LoadingModal from '../components/LoadingModal';
import RarityTag from '../components/RarityTag';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title'
import { useUserInfo } from '../contexts/UserInfoContext'
import { useWallet } from '../contexts/WalletContext';
import useAPI from '../hooks/useAPI';
import useApproveRedeem from '../hooks/useApproveRedeem';
import useGetCollectible from '../hooks/useGetCollectible';
import { Collectible, Metadata } from '../types';

export default function NFTInfo() {
	const {id} = useParams(); 
	const {metadatas} = useWallet();
	const [metadataInfo, setMetadataInfo] = useState<Metadata | null>();
	const [collectibleData, setCollectibleData] = useState<Collectible | null>();
	const [loading, setLoading] = useState(false);
	const approveRedeem = useApproveRedeem();
	const getCollectible = useGetCollectible();
	const {redeemPromo} = useAPI();
	
	const onRedeem = ()=>{
		if (id) {
			setLoading(true);
			if (collectibleData?.approved) {
				redeemPromo(id).then((res)=>{
					console.log(res);
				}).then(async ()=>{
					await getCollectible(id).then((res)=>{
						console.log(res);
						setCollectibleData(res);
					});
				}).finally(()=>{
					setLoading(false);
				})
			} else {
				approveRedeem(id).then((res)=>{
					console.log(res);
				}).then( async ()=>{
					await redeemPromo(id).then((resP)=>{
						console.log(resP);
					})	
				}).then(async()=>{
					await getCollectible(id).then((res)=>{
						console.log(res);
						setCollectibleData(res);
					});
				}).finally(()=>{
					setLoading(false);
				})
			}
		}
	}

	useEffect(() => {
		if (metadatas && metadatas.length>0 && id) {
			const metadataInfoAux = metadatas.find(metadata=>metadata.tokenId===id)	;
			setMetadataInfo(metadataInfoAux);
			getCollectible(id).then((res)=>{
				setCollectibleData(res);
				console.log(res);
			});
		}
	}, [metadatas])
	
	return (
		<div className='flex flex-col'>
			{loading && 
				<LoadingModal />
			}
			<section className='bg-bbva-blue-1'>
				<Title label='Detalles de NFT' />
			</section>
			<Link to={'/collection'} >
				Regresar
			</Link>
			<div className='mx-6'>
				<Subtitle label={'NFT name'} />
			</div>
			<div className='w-full px-5 flex justify-center items-center'>
				<div className='bg-bbva-blue-3 mx-2 my-3 drop-shadow-md p-5 w-full max-w-sm'>
					<div className='rounded-sm overflow-hidden shadow-md'>
						<img src={metadataInfo?.image}
							alt='NFT'
							className='w-full h-full' />
					</div>
					<div className='flex flex-col mt-2 px-2 text-white'>
						<span>{metadataInfo?.promoDescription}</span>
						<span className='font-black'>ID: {metadataInfo?.tokenId}</span>
					</div>
				</div>
			</div>
			<div className='flex flex-col px-10 bg-white-1 pb-10'>
				<div className='flex flex-row justify-between py-2'>
					<Button label='Transferir'/>
					{!collectibleData?.reedemed &&
						<Button label='Canjear' onClick={onRedeem}/>                
					}
				</div>       
			</div>
		</div>
	)
}
