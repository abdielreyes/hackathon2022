import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from 'react';
import Button from '../components/Button';
import Title from '../components/Title'
import { injected } from '../connectors';
import { useUserInfo } from '../contexts/UserInfo'

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
			{account?
				(
					<>
						<span className='text-xl font-bold'>Connected to metamask</span>
						<Button label='Disconnect' onClick={disconnect} />
					</>
				)
			:
				<Button label='Connect Metamask' onClick={connect} />
			}
		</div>
	)
}
