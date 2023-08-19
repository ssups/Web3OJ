import { ethers } from "hardhat";

const INSTACE_CA = "0x20026be9Dd08EB7621A3a98d7C96D94E04B60e81";

async function main() {
  // for (let i = 0; i < 100; i++) {
  //   console.log(`calldataload(${68 + i * 32})),`);
  // }
  // return;

  const [signer] = await ethers.getSigners();

  // deploy
  const factory = await ethers.getContractFactory("SumOfArray");
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log(await contract.getAddress());

  // submit answer
  const abi = ["function setSumOfArrayContract(address)"];
  const iface = new ethers.Interface(abi);
  const data = iface.encodeFunctionData("setSumOfArrayContract", [await contract.getAddress()]);
  const tx = await signer.sendTransaction({
    to: INSTACE_CA,
    data,
  });
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
