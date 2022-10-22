import { ethers } from "hardhat";

async function main() {
	console.log('deploying...');
	const Coleccionables = await ethers.getContractFactory("ColeccionablesBBVA");
	const ColeccionablesBBVAContract = await Coleccionables.deploy();
	await ColeccionablesBBVAContract.deployed();
	console.log(`Coleccionables BBVA deployed to ${ColeccionablesBBVAContract.address}`);
}

main().then(() => process.exit(0))
.catch((error) => {
	console.log(error);
	process.exit(1);
});