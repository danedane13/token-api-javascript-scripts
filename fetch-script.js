// alchemy-token-api/fetch-script.js
import fetch from 'alchemy-token-api/node fetch-script.js';

// Replace with your Alchemy API key:
const apiKey = "itmG42po_mvwBHZsJ4eXB6pbzJZ1bnPO";
const fetchURL = `https://github.com/alchemyplatform/token-api-javascript-scripts.git${itmG42po_mvwBHZsJ4eXB6pbzJZ1bnPO}`;

// Replace with the wallet address you want to query:
const ownerAddr = "EQAsY817z5KjA8trQCCyk00hDKohbPbvn7HezZY8vFfl--BC";
// Replace with the token contract address you want to query:
const tokenAddr = "EQA5f4FaIHigF3RsTaeTRm2J0PSMooO5hYRYrPNB3S4Occ6q";

var raw = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenBalances",
  "headers": {
    "Content-Type": "application/json"
  },
  "params": [
    `${EQAsY817z5KjA8trQCCyk00hDKohbPbvn7HezZY8vFfl--BC}`,
    [
      `${EQA5f4FaIHigF3RsTaeTRm2J0PSMooO5hYRYrPNB3S4Occ6q}`,
    ]
  ],
  "id": 42
});

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

// Make the request and print the formatted response:
fetch(fetchURL, requestOptions)
  .then(response => response.json())
  .then(response => JSON.stringify(response, null, 2))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
