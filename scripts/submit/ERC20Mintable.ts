import { ethers } from "hardhat";

const INSTACE_CA = "0x13622E3AC12f0c2063eEAD08be6ccDad6Bb69563";
const INSTACE_CREATOR = "0x7dfC95696dFbFA0E9F0973C29EC2092DaFe5225C";

async function main() {
  const [signer] = await ethers.getSigners();

  // deploy
  const factory = await ethers.getContractFactory("ERC20Mintabl");
  const contract = await factory.deploy(INSTACE_CREATOR);
  await contract.waitForDeployment();
  console.log("ca: ", await contract.getAddress());

  // submit answer
  const abi = ["function setToken(address)"];
  const iface = new ethers.Interface(abi);
  const data = iface.encodeFunctionData("setToken", [await contract.getAddress()]);
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
