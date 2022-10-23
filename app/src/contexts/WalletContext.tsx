import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import useContract from "../hooks/useContract";
import { Metadata } from "../types";
import ABI from "../ABI/ColeccionablesBBVA.json";
import { useWeb3React } from "@web3-react/core";

interface WalletContextInterface {
	metadatas: Metadata[]
}

const WalletContext = createContext< WalletContextInterface | undefined>(undefined);

const WalletContextProvider = ({children}: {children: ReactNode}) => {
  const {account} = useWeb3React();
  const [metadatas, setMetadatas] = useState([]);
  console.log(account, process.env.REACT_APP_CONTRACT );
  const contract = useContract(process.env.REACT_APP_CONTRACT || '', ABI, false);
  
  useEffect(() => {
    const aux = async () => {
      if (account && contract) {
        const res = await contract.tokensOfOwner(account);
        const aux = [];
        res.forEach(metadata => {
          aux.push({
            
          }) 
        });
        console.log(res);
      }
    }
    aux();
  }, [account, contract]);
  
	return (
    <WalletContext.Provider
      value={{
        metadatas
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