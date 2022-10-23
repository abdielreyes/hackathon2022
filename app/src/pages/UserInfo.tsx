import Title from '../components/Title'
import { useUserInfo } from '../contexts/UserInfo'

export default function UserInfo() {
	const {money, name, _id, points} = useUserInfo();
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
					<span>Puntos:</span>
					<span>{points}</span>
				</div>
				<div className='text-white-2 flex flex-row space-x-5'>
					<span>id:</span>
					<span>{_id}</span>
				</div>
			</section>
		</div>
	)
}
