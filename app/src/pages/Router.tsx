import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import { useUserInfo } from "../contexts/UserInfo";
import Collection from "./Collection";
import GetNFT from "./GetNFT";
import Login from "./Login";
import MoneyTest from "./MoneyTest";
import NFTInfo from "./NFTInfo";
import UserInfo from "./UserInfo";

export default function Router() {
	const {_id} = useUserInfo();
	if (_id) {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<UserInfo />} />
					<Route path="/get-nft" element={<GetNFT />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/test" element={<MoneyTest />} />
					<Route path="/nft/:id" element={<NFTInfo />} />
				</Routes>
				<Navbar/>
			</BrowserRouter>
		)
	} else {
		return <Login />		
	}
}
