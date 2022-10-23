import MobileLayout from "./components/MobileLayout";
import Router from "./pages/Router";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="bg-black flex justify-center items-center min-h-full">
        <MobileLayout>
          <Router />
        </MobileLayout>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
