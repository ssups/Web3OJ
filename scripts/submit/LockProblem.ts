import { ethers } from "hardhat";

const INSTACE_CA = "0xa6e68565BAEcE0d80d2d1B5C1983B00A1b763cc0";

async function main() {
  const [signer] = await ethers.getSigners();

  // deploy
  const factory = await ethers.getContractFactory("LockProblem");
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log("ca: ", await contract.getAddress());

  // submit answer
  const tx = await contract.connect(signer).unlock(INSTACE_CA);
  await tx.wait();
  console.log("nonce: ", tx.nonce.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
