import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input'
import Title from '../components/Title'
import useAPI from '../hooks/useAPI';

export default function Login() {
	const [phone, setPhone] = useState('5550678889');
	const [password, setPassword] = useState('riqtam');
	const {login} = useAPI();
	const onLogin = ()=>{
		login(phone, password).then((data)=>{
			console.log(data);
			window.localStorage.setItem('_id', '1');
		}).catch((e)=>{
			console.log(e);
		})
	};

	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-2 h-56'>
				<h1 className='font-semibold text-white-2 text-center text-xl m-5'>
					BBVA
				</h1>
			</section>
			<section className='bg-bbva-blue-3'>
				<div className='text-white-2 text-center'>
				</div>
				<div className='text-white-2 flex flex-col space-x-5'>
					<span className='p-2'>Número celular:</span>
					<Input value={phone} onChange={setPhone} />
				</div>
				<div className='text-white-2 flex flex-col space-x-5'>
					<span>Contraseña:</span>
					<Input value={password} onChange={setPassword} type='password' />
				</div>
				<Button label='login' onClick={onLogin} />
			</section>
		</div>
	)
}
