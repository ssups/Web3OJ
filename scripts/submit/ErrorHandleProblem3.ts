import { ethers } from "hardhat";

const INSTACE_CA = "0x36ca5cE76A75aA698222967F9c943CCf5755AAB2";

async function main() {
  const sig = ethers.keccak256(ethers.toUtf8Bytes("ErrorData(uint256,string)"));
  console.log(sig.slice(0, 10));

  const Problem = await ethers.getContractFactory("Problem");
  const problem = await Problem.deploy();
  await problem.waitForDeployment();
  console.log(await problem.getAddress());

  const [signer] = await ethers.getSigners();

  // deploy
  const factory = await ethers.getContractFactory("ErrorHandleProblem3");
  const contract = await factory.deploy(INSTACE_CA);
  console.log("ca: ", await contract.getAddress());

  // submit answer
  const tx = await contract.connect(signer).solve({ gasLimit: 1000000 });
  await tx.wait();
  console.log(tx.hash);
  console.log("nonce: ", tx.nonce.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
