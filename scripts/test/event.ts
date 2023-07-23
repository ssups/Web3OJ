import { ethers } from "hardhat";
import { ErrorHandleProblem3 } from "../../typechain-types/ErrorHandleProblem3.sol";
import { ErrorHandleProblem3__factory } from "../../typechain-types/factories/ErrorHandleProblem3.sol";

async function main() {
  //   const contract = (await ethers.getContractAt(
  //     "ErrorHandleProblem3",
  //     "0x65a72d75f4804A12017b466140d946ed63876f5C"
  //   )) as ErrorHandleProblem3;
  const contract = new ethers.Contract(
    "0x65a72d75f4804A12017b466140d946ed63876f5C",
    ErrorHandleProblem3__factory.abi,
    new ethers.WebSocketProvider(
      "wss://polygon-mumbai.g.alchemy.com/v2/AqDPlnioaWRMIzV47QVOYGGkuQMTdQYM"
    )
  );
  const tx = await ethers.provider.getTransaction(
    "0xd73edadcac340a1815c5ed8c5d24b003138d57dd9b5acff2edf856bf26de1467"
  );
  if (!tx?.blockNumber) return;
  console.log(tx.blockNumber);
  console.log(contract.filters);
  const event1 = contract.getEvent("Debug");
  const event2 = contract.getEvent("StringDebug");
  contract.on(event1, (...args) => {
    console.log("here1");
    console.log(args);
  });
  contract.on(event2, (...args) => {
    console.log("here2");
    console.log(args);
  });
  //   const filter = contract.filters.Debug();
  //   const fromBlock = tx.blockNumber - 10;
  //   const toBlock = "latest";
  //   const res = await contract.queryFilter(filter, fromBlock, toBlock);
  //   console.log(res);
}
main();
