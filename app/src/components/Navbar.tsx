import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';

export default function Navbar() {
	const {account} = useWeb3React();
	return (
		<nav className="bg-white fixed bottom-0 w-full">
			<ul className="flex flex-row space-x-5">
				<li>
					<Link to="/">Home</Link>
				</li>
				{account &&
					<>
						<li>
							<Link to="/get-nft">Get NFT</Link>
						</li>
						<li>
							<Link to="/collection">Collection</Link>
						</li>
					</>
				}
				<li>
					<Link to="/test">Test</Link>
				</li>
			</ul>
		</nav>
	)
}
