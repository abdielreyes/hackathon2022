import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from 'react';
import Button from '../components/Button';
import TestCard from '../components/TestCard';
import Title from '../components/Title'
import { injected } from '../connectors';
import { useUserInfo } from '../contexts/UserInfoContext'

export default function UserInfo() {
	const { active, account, chainId, library, connector, activate, deactivate } = useWeb3React();
	async function connect() {
		console.log('try');
		activate(injected);
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

	useEffect(() => {
    console.log(chainId, account, active)
  },);

	const {money, name, _id, points} = useUserInfo();
	return (
		<div className='flex flex-col'>
			<section className='bg-bbva-blue-1 pb-5'>
				<div className='text-white-2 text-center pt-10 text-xl'>
					Hola, {name}
				</div>
				<div className='text-white-2 pt-10 ml-8 pb-3'>
					MI INFORMACIÓN
				</div>
				<div className='text-white-2 flex flex-row space-x-5 ml-8'>
					<span className='font-bold'>Dinero:</span>
					<span>{money}</span>
				</div>
				<div className='text-white-2 flex flex-row space-x-5 ml-8'>
					<span className='font-bold'>Puntos:</span>
					<span>{points}</span>
				</div>
				<div className='text-white-2 flex flex-row space-x-5 ml-8'>
					<span className='font-bold'>ID:</span>
					<span>{_id}</span>
				</div>
			</section>
			<section className='text-center'>
				<TestCard label='' >
					<p className='text-gray-1 mb-2 text-sm'>
						Conecta con Metamask para acceder a esta sección
					</p>
					<div className='px-10'>
						<img alt='' src='metamask-logo.png'/>
					</div>{account?
				(
					<>
					<div className='m-6 text-center'>
						<span className='font-bold'>Conectado a Metamask</span>
						<Button label='Desconectar' onClick={disconnect} />
					</div>
						
					</>
				)
			:
			<div className='m-6 text-center'>
				<Button label='Conectar con Metamask' onClick={connect} />
			</div>
			}
				</TestCard>
			</section>
			
		</div>
	)
}
