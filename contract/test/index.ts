import { ethers } from "hardhat";

const address = '0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf';
let contractAddress = '0x99a416bE5b7d713842724C552f82C1A5851e5a1c'

describe("Deploy", function () {
  it("Deploy", async function () {
		console.log('deploying...');
		const Coleccionables = await ethers.getContractFactory("ColeccionablesBBVA");
		const contract = await Coleccionables.deploy();
		await contract.deployed();
		console.log(`Coleccionables BBVA deployed to ${contract.address}`);
		contractAddress=contract.address;
  });
});

describe("BalanceOf", function () {
  it("BalanceOf", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		await contract.createCollectible(1, address);
		await contract.createCollectible(3, address);
		await contract.createCollectible(5, address);
		let res = await contract.getCollectibles();
		console.log(res);
		res = await contract.tokensOfOwner(address);
		console.log('tokens of owner');
		console.log(res);
  });
});

describe("tokensOfOwner", function () {
  it("BalanceOf", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		let res = await contract.balanceOf(address);
		console.log(res);
		res = await contract.tokensOfOwner(address);
		console.log('tokens of owner');
		console.log(res);
  });
});