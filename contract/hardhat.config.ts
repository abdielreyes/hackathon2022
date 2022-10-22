/** @type import('hardhat/config').HardhatUserConfig */
import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import "@nomiclabs/hardhat-ethers";
import "hardhat-abi-exporter";

dotenv.config()
const { RPC_URL, PRIVATE_KEY } = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: 'hardhat',
  abiExporter: {
    path: './data/abi',
    runOnCompile: true,
    clear: true,
    flat: true,
    except: ["ERC1155", "ERC165"],
    spacing: 2,
    pretty: true,
  },
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