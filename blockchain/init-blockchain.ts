import { writeFileSync } from "fs";

const writeBlockchain = (blockchain) => {
    const  blockchainString = JSON.stringify(blockchain, null, 2);
    writeFileSync("./blockchain/blockchain.json", blockchainString);
}

const genesisBlock = {
    hash: "0",
    previousHash: "0",
    nonce: 0,
    transactions: [
        {
            senderAdress: "0",
            receiverAdress: "0000",
            amount: "19000000",
        },  
    ],
};

writeBlockchain({genesisBlock});