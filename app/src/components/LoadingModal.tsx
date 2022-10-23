import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { Icon } from '@iconify/react';

export default function LoadingModal() {
	const {account} = useWeb3React();
	return (
		<div className="bg-bbva-blue-1 text-white text-2xl fixed top-0 left-0
		w-full z-10 h-screen flex justify-center items-center">
			<span>Loading</span>
		</div>
	)
}
