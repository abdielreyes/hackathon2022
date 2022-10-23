import Button from '../components/Button'
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
				<Button label='Común 8000' onClick={()=>onGetNFT(1)} />
				<Button label='Raro 16000' onClick={()=>onGetNFT(2)} />
				<Button label='Épico 24000' onClick={()=>onGetNFT(3)} />
			</section>
		</div>
	)
}
