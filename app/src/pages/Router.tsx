import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Collection from "./Collection";
import Marketplace from "./Marketplace";
import MoneyTest from "./MoneyTest";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Collection />} />
				<Route path="/marketplace" element={<Marketplace />} />
				<Route path="/test" element={<MoneyTest />} />
			</Routes>
			<Navbar/>
		</BrowserRouter>
	)
}
