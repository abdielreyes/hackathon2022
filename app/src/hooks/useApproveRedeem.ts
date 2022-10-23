import { useWeb3React } from "@web3-react/core";
import useContract from "./useContract";
import ABI from "../ABI/ColeccionablesBBVA.json";

export default function useApproveRedeem() {
  const { library, account, chainId } = useWeb3React();
  const contract = useContract(process.env.REACT_APP_CONTRACT || '', ABI, true);

	const approve = async (tokenId: string)=>{
		if (contract) {
			const tx = await contract.approveRedeem(tokenId);
			const receipt = await tx.wait();	
			return true;
		}
		return false;
	}

	return approve;
}