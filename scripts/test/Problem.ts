import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("Problem");
  const contract = factory.attach("0x36ca5cE76A75aA698222967F9c943CCf5755AAB2");
  const original = await ethers.provider.getStorage(
    "0x36ca5cE76A75aA698222967F9c943CCf5755AAB2",
    0
  );
  const submit = await ethers.provider.getStorage("0x36ca5cE76A75aA698222967F9c943CCf5755AAB2", 2);

  console.log(original);
  console.log(submit);
}

main();
