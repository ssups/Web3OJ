import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("PlusCalcaulator");
  const contract = await factory.deploy();
  await contract.waitForDeployment();

  const hexSig = ethers.hexlify(ethers.toUtf8Bytes("Panic(uint256)"));
  const sigHash = ethers.keccak256(hexSig);
  console.log("hexSig", hexSig);
  console.log("sigHash", sigHash);

  const res = await contract.plus(BigInt(2 ** 255), BigInt(2 ** 255));
  // const res = await contract.panic();
  console.log(res);
}

main().catch((err) => console.log(err));
