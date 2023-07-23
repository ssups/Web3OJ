import { ethers } from "hardhat";

const INSTACE_CA = "0xC5be9672a80Ac200dAf30e351608449b7556Fc03";

async function main() {
  const [signer] = await ethers.getSigners();

  const factory = await ethers.getContractFactory("DormantAccount");
  const contract = await factory.deploy();
  await contract.waitForDeployment();

  const sendTx = await signer.sendTransaction({ to: await contract.getAddress(), value: 10 });
  await sendTx.wait();
  console.log(await ethers.provider.getBalance(await contract.getAddress()));

  const destroyTx = await contract.destory(INSTACE_CA);
  await destroyTx.wait();
  console.log(await ethers.provider.getBalance(INSTACE_CA));

  //   const tx = await signer.sendTransaction({ to: INSTACE_CA, value: 10 });
  //   await tx.wait();

  //   console.log("nonce: ", tx.nonce.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
