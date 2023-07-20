import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("SumOfArray");
  const contract = await factory.deploy();
  await contract.waitForDeployment();

  const arr = new Array(100).fill(0).map((el, i) => i);
  const correct = arr.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  // const res = await contract.offset(arr);
  // console.log(res);

  const data = factory.interface.encodeFunctionData("sum", [arr]);
  const gas = await ethers.provider.estimateGas({ to: await contract.getAddress(), data });
  const answer = await contract.sum(arr);
  console.log("gas: ", gas);
  console.log("correct: ", correct);
  console.log("answer: ", answer);
}

main();
