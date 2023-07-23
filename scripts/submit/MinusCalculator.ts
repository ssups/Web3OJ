import { ethers } from "hardhat";

const INSTACE_CA = "0xDaD6c3749C264480768191344284C4B0E3DC6D05";

async function main() {
  const [signer] = await ethers.getSigners();

  // deploy
  const factory = await ethers.getContractFactory("MinusCalculator");
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log("ca: ", await contract.getAddress());

  // submit answer
  const abi = ["function setMinusCalculator(address)"];
  const iface = new ethers.Interface(abi);
  const data = iface.encodeFunctionData("setMinusCalculator", [await contract.getAddress()]);
  const tx = await signer.sendTransaction({
    to: INSTACE_CA,
    data,
  });
  await tx.wait();
  console.log("nonce: ", tx.nonce.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
