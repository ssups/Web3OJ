import { ethers } from "hardhat";

const INSTACE_CA = "0x2Da01143A36FfA935577DDa3342758cC99A0Aa38";

async function main() {
  const [signer] = await ethers.getSigners();

  // deploy
  const factory = await ethers.getContractFactory("Solve_ErrorHandleProblem2");
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log("ca: ", await contract.getAddress());

  // solve
  const tx = await contract.connect(signer).solve(INSTACE_CA);
  await tx.wait();

  // check
  const selector = ethers.keccak256(ethers.toUtf8Bytes("errorCode()"));
  const res = await ethers.provider.call({ to: INSTACE_CA, data: selector });
  console.log(parseInt(res, 16));

  console.log("nonce: ", tx.nonce.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
