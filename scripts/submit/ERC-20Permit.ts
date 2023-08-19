import { ethers } from "hardhat";

const INSTACE_CA = "0xf4eCDc4B3132b740096f89F1a9C54353B8E82d11";

async function main() {
  const [signer] = await ethers.getSigners();

  // submit answer
  const abi = ["function permit(address,uint256)"];
  const iface = new ethers.Interface(abi);
  const data = iface.encodeFunctionData("permit", [INSTACE_CA, ethers.parseEther("20")]);
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
