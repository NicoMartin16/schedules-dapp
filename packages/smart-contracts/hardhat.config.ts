import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  paths: {
    artifacts: "../artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  }
};

export default config;
