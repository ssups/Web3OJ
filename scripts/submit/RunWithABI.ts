import { ethers } from "hardhat";

const INSTACE_CA = "0xae2668400C41c74BF86A15f450E91278c0406a0f";

async function main() {
  const [signer] = await ethers.getSigners();

  // get contract code
  const contractCode = await ethers.provider.getCode(INSTACE_CA);
  console.log(contractCode);
  // decompile contract code at https://ethervm.io/decompile and find funcSelector

  const selector = "0xda17c605";

  // submit answer
  const data = selector + ethers.zeroPadValue(signer.address, 32).slice(2);
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
