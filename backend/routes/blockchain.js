const ethers = require('ethers')
const abi = require('./abi')
const providerRPC = {
    avalanche: {
      name: 'avalanche',
      rpc: "https://api.avax-test.network/ext/bc/C/rpc", // Insert your RPC URL here
      chainId: 43113, // 0x504 in hex,
    },
  };
  // 3. Create ethers provider
  const provider = new ethers.providers.StaticJsonRpcProvider(
    providerRPC.avalanche.rpc, 
    {
      chainId: providerRPC.avalanche.chainId,
      name: providerRPC.avalanche.name,
    }
  );
const signer = provider.getSigner()
const contractAddress = "0x99a416bE5b7d713842724C552f82C1A5851e5a1c"

const address = "0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf"
const incrementer = new ethers.Contract(contractAddress,abi,provider)

async function blockchain(){

    let bn = await incrementer.balanceOf(address,0)


    console.log(bn)
}

module.exports = blockchain