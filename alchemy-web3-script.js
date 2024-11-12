// alchemy-token-api/alchemy-web3-script.js
import { createAlchemyWeb3 } from "@alch/alchemy-web3";

// Replace with your Alchemy api key:
const apiKey = "demo";

// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
);

// The wallet address / token we want to query for:
const ownerAddr = "0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be";
const balances = await web3.alchemy.getTokenBalances(ownerAddr,["0x0d236f4DF3119b8cAe6A1a1D719c1bFc136F3e3C"])

// The token address we want to query for metadata:
const metadata = await web3.alchemy.getTokenMetadata("0x0d236f4DF3119b8cAe6A1a1D719c1bFc136F3e3C")

console.log("BALANCES->");
console.log(balances);
console.log("TOKEN METADATA->");
console.log(metadata);
