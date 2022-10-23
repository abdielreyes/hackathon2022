import MobileLayout from "./components/MobileLayout";
import Router from "./pages/Router";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import { WalletContext, WalletContextProvider } from "./contexts/WalletContext";
import { UserInfoContextProvider } from "./contexts/UserInfoContext";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WalletContextProvider>
        <UserInfoContextProvider>
          <div className="bg-black flex justify-center items-center min-h-full">
            <MobileLayout>
              <Router />
            </MobileLayout>
          </div>
        </UserInfoContextProvider>
      </WalletContextProvider>
    </Web3ReactProvider>
  );
}

export default App;
