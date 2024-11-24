const { ethers } = require("ethers");
const { readFileSync } = require("fs");
require("dotenv").config();

const contractAddress = "0x2b8312485BdeE8D9a73141293b79f6bD4f2B77Be";
const providerUrl = "https://avalanche-fuji-c-chain-rpc.publicnode.com";

const provider = new ethers.JsonRpcProvider(providerUrl);

const abi = JSON.parse(
  readFileSync("./artifacts/contracts/Counter.sol/Counter.json", "utf8")
);


const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(contractAddress, abi.abi, wallet);

const main = async () => {
  // Get the current count
  const count = await contract.get();
  console.log("Current count:", Number(count));

  // Increment the count
  while (count <= 100) {
    const tx = await contract.inc();
    console.log("Transaction hash:", tx.hash);

    await tx.wait();

    const newCount = await contract.get();
    console.log("New count:", Number(newCount));
  }
};

main();
