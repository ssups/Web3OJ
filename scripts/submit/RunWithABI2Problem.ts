import { ethers } from "hardhat";

const INSTACE_CA = "0xD923667b4099054a46850a9549ca1E59B69dE579";

async function main() {
  const [signer] = await ethers.getSigners();

  // get contract code
  const contractCode = await ethers.provider.getCode(INSTACE_CA);
  console.log(contractCode);
  // decompile contract code at https://ethervm.io/decompile and find funcSelector

  const selector = "0xa6e5ca07";

  // deploy
  const factory = await ethers.getContractFactory("RunWithABI2Problem");
  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log("ca: ", await contract.getAddress());

  // set instance private key
  const setInstancePkTx = await signer.sendTransaction({
    to: INSTACE_CA,
    data: ethers.zeroPadBytes(selector, 32),
  });
  setInstancePkTx.wait();
  const privateKey = await ethers.provider.getStorage(INSTACE_CA, 0);
  console.log(privateKey);

  // set contract private key
  const setContractPkTx = await contract.connect(signer).setPrivateKey(INSTACE_CA);
  await setContractPkTx.wait();
  console.log(await contract.getPrivateKey());

  // submit answer
  const abi = ["function setRunWithABI2(address)"];
  const iface = new ethers.Interface(abi);
  const data = iface.encodeFunctionData("setRunWithABI2", [await contract.getAddress()]);
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
