import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "../types";

interface WalletContextInterface {
	metadatas: 
}

const WalletContext = createContext< WalletContextInterface | undefined>(undefined);

const WalletContextProvider = ({children}: {children: ReactNode}) => {
  const [_id, setId] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
	const [phone, setPhone] = useState<string | undefined>()
	const [points, setPoints] = useState(0);
	const [money, setMoney] = useState(0);

  const setUserData = (user: User) => {
    setId(user._id);
    setName(user.name);
    setPhone(user.phone);
		setMoney(user.money);
		setPoints(user.points);
  };
  const signOut = () => {
    setId(undefined);
    setName(undefined);
		setPhone(undefined)
  };

  useEffect(() => {
    // set info at start
  }, []);
  
	return (
    <WalletContext.Provider
      value={{
        _id,
        name,
				phone,
				money,
				points,
        setUserData,
        signOut
      }}>
      {children}
    </WalletContext.Provider>
  );
}

const useUserInfo = ()=>{
  const context = useContext(WalletContext);
  if (context === undefined) {
		throw new Error('useUserInfo must be used within an UserProvider')
	}
  return context;
}
	
export {useUserInfo, WalletContext as UserInfoContext, WalletContextProvider as UserInfoContextProvider};