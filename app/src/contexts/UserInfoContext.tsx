import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "../types";

interface UserInfoContextInterface {
	name: string | undefined
  _id: string | undefined
  phone: string | undefined
  money: number | undefined
  points: number | undefined
	setUserData: (user: User) => void
	signOut: VoidFunction
}

const UserInfoContext = createContext< UserInfoContextInterface | undefined>(undefined);

const UserInfoContextProvider = ({children}: {children: ReactNode}) => {
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
    <UserInfoContext.Provider
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
    </UserInfoContext.Provider>
  );
}

const useUserInfo = ()=>{
  const context = useContext(UserInfoContext);
  if (context === undefined) {
		throw new Error('useUserInfo must be used within an UserProvider')
	}
  return context;
}
	
export {useUserInfo, UserInfoContext, UserInfoContextProvider};