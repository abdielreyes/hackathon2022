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
		const [owner] = await ethers.getSigners();
		console.log(`sender address: ${owner.address}`);
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		await contract.createCollectible(1, address);
		await contract.createCollectible(3, address);
		await contract.createCollectible(5, address);
		let res = await contract.getCollectibles();
		res = await contract.tokensOfOwner(address);
		console.log('tokens of owner');
		console.log(res);
		await contract.redeem(2);
		res = await contract.tokensOfOwner(address);
		console.log('tokens of owner');
		console.log(res);
  });
});

describe("tokenURI", function () {
  it("tokenURI", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		let res = await contract.tokenURI(0);
		console.log(res);
  });


describe.only("mint", function () {
  it("mint", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		let res = await contract.createCollectible(2, address, {gasLimit: 3500000});
		console.log(res);
  });
});