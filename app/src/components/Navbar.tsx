import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-white fixed bottom-0 w-full">
			<ul className="flex flex-row space-x-5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/get-nft">Get NFT</Link>
				</li>
				<li>
					<Link to="/collection">Collection</Link>
				</li>
				<li>
					<Link to="/test">Test</Link>
				</li>
			</ul>
		</nav>
	)
}
