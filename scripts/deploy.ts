import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("SumOfArray");
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log(await contract.getAddress());

  // submit answer
  const [signer] = await ethers.getSigners();
  const abi = ["function setSumOfArrayContract(address)"];
  const iface = new ethers.Interface(abi);
  const data = iface.encodeFunctionData("setSumOfArrayContract", [await contract.getAddress()]);
  const tx = await signer.sendTransaction({
    to: "0x20b99efe6b632411839570dc60fb44b53605bD91",
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
