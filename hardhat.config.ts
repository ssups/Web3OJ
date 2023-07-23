import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_API}`,
      accounts: [process.env.PK_MUMBAI || ""],
    },
    baobab: {
      url: "https://public-en-baobab.klaytn.net",
      accounts: [process.env.PK_BAOBAB || ""],
      gasPrice: 25 * 10 ** 9,
    },
  },
};

export default config;
