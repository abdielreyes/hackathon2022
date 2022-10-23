import { useWeb3React } from "@web3-react/core";
import useContract from "./useContract";
import ABI from "../ABI/ColeccionablesBBVA.json";

export default function useGetCollectible() {
  const contract = useContract(process.env.REACT_APP_CONTRACT || '', ABI, true);

	const getCollectible = async (tokenId: string)=>{
		if (contract) {
			const data = await contract.getCollectible(tokenId);
			return {
        id: data[0].toNumber(),
        promoID: data[1].toNumber(),
        userID: data[2],
        reedemed: data[3],
        approved: data[4]
			};
		}
		return null;
	}

	return getCollectible;
}