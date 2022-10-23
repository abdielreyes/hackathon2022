import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input'
import InputLogin from '../components/InputLogin';
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
			<section className='bg-bbva-blue-2 flex items-center justify-center'>
				<img alt='' src='Iconapp.svg' className='w-1/2'/>
			</section>
			<section className='bg-bbva-blue-3 h-screen overflow-y-auto items-center'>
				<div className='text-white-2 text-center'>
				</div>
				<div className='text-white-2 flex flex-col space-x-5 pl-5'>
					<span className='px-5 pt-4 '>Número celular:</span>
					<InputLogin value={phone} onChange={setPhone}
					placeholder='Número celular' />
				</div>
				<div className='text-white-2 flex flex-col space-x-5 pl-5'>
					<span className='px-5 pt-2'>Contraseña:</span>
					<InputLogin value={password} onChange={setPassword} type='password' 
					placeholder='Contraseña'/>
				</div>
				<div className='flex justify-center mt-8'>
					<Button label='Entrar' onClick={onLogin} />
				</div>
			</section>
		</div>
	)
}
