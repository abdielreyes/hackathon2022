import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import useContract from "../hooks/useContract";
import { Metadata } from "../types";
import ABI from "../ABI/ColeccionablesBBVA.json";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";

interface WalletContextInterface {
	metadatas: Metadata[] | null
  refreshWallet: ()=>Promise<void>
}

const WalletContext = createContext< WalletContextInterface | undefined>(undefined);

const WalletContextProvider = ({children}: {children: ReactNode}) => {
  const {account} = useWeb3React();
  const [metadatas, setMetadatas] = useState<Metadata[] | null>([]);
  const contract = useContract(process.env.REACT_APP_CONTRACT || '', ABI, false);
  
  const API_URL = 'http://52.188.108.125:8080/api';

  const getMetadata = async (id: string)=>{
    return axios.get(`${API_URL}/metadata/${id}`).then( (res) => {
      return res.data;
    }).catch( (error) => {
      throw error.response.data.message;
    });
  };

  const refreshWallet = async ()=>{
      if (account && contract) {
        const res = await contract.tokensOfOwner(account);
        const aux:Metadata[] = [];
        for (let i = 0; i < res.length; i++) {
          const tokenId = res[i][0].toNumber();
          const metadata = await getMetadata(tokenId);
          aux.push(metadata);
        }
        console.log(aux);
        setMetadatas(aux);
      }
    }
  
  useEffect(() => {
    refreshWallet();
  }, [account, contract]);
  
	return (
    <WalletContext.Provider
      value={{
        metadatas,
        refreshWallet
      }}>
      {children}
    </WalletContext.Provider>
  );
}

const useWallet = ()=>{
  const context = useContext(WalletContext);
  if (context === undefined) {
		throw new Error('useWallet must be used within an WalletProvider')
	}
  return context;
}
	
export {useWallet, WalletContext, WalletContextProvider};