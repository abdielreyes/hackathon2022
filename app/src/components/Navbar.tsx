import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { Icon } from '@iconify/react';

export default function Navbar() {
	const {account} = useWeb3React();
	return (
		<nav className="bg-bbva-blue-1 text-white px-4 py-2 font-medium fixed bottom-0 w-full max-w-sm">
			<ul className="flex flex-row space-x-5 justify-center">
				<li>
					<Link to="/">
						<Icon icon="ant-design:home-filled" width={25} />
					</Link>
				</li>
				{account &&
					<>
						<li>
							<Link to="/get-nft">
								<Icon icon="dashicons:store" width={25} />
							</Link>
						</li>
						<li>
							<Link to="/collection">
								<Icon icon="bxs:wallet" width={25} />
							</Link>
						</li>
					</>
				}
				<li>
					<Link to="/test">
						<Icon icon="ant-design:tool-filled" width={25} />
					</Link>
				</li>
			</ul>
		</nav>
	)
}
