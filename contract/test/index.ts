import { ethers } from "hardhat";

let address = '0x32C6038e04A9bE51Fe4feeAF30E0cE3847434EEf';

let contractAddress = '0xC412A0860A3106208E1Dd59592E8771F207e2862'

describe("Deploy", function () {
  it("Deploy", async function () {
		const [owner] = await ethers.getSigners();
		console.log(`sender address: ${owner.address}`);
		address=owner.address;
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
		await contract.createCollectible(1, "635481f7b864bee098e15491", address);
		await contract.createCollectible(3, "635481f7b864bee098e15491", address);
		await contract.createCollectible(5, "635481f7b864bee098e15491", address);
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

/*
describe("tokenURI", function () {
  it("tokenURI", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		let res = await contract.tokenURI(0);
		console.log(res);
	});
});
*/


describe("approve redeem", function () {
  it("approve redeem", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		let res = await contract.approveRedeem(2);
		res = await contract.tokensOfOwner(address);
		console.log('tokens of owner');
		console.log(res);
		await contract.redeem(2);
		res = await contract.tokensOfOwner(address);
		console.log('tokens of owner');
		console.log(res);
  });
});

describe("get collectible", function () {
  it("get collectible", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		let res = await contract.getCollectibles();
		res = await contract.getCollectible(0x00);
		console.log(res);
  });
});

describe.only("get uri", function () {
  it("get uri", async function () {
		const contract = await ethers.getContractAt("ColeccionablesBBVA", contractAddress);
		let res = await contract.tokenURI(0);
		//let res = await contract.setBaseURI('http://52.188.108.125:8080/api/metadata/', {gasLimit: 3500000});
		console.log(res);
  });
});