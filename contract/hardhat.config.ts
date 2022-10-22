/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import "@nomiclabs/hardhat-ethers";

dotenv.config()
const { RPC_URL, PRIVATE_KEY } = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    fuji: {
      url: RPC_URL,
      gasPrice: 35000000000,
      chainId: 43113,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    local: {
      url: RPC_URL,
      gasPrice: 1000000000,
      chainId: 6942069,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
};

export default config;