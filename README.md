# BlockChain
A simple implementation of blockchain in node.js to understand the underlying concept and principles upon which blockchains are made.

# Principles of BlockChain
1. Works in a distributed network.
2. Lack of any third party vendor for authentication and authorization of blocks or transactions.
3. Using private and public key encryption for validation purpose.

# Structure of blockChain
1. Every block in the chain contains has of previous block (Null for first block(genesis block)), current hash (generated from hashing algorithms such as SHA-256), timestamp(time of it's creation) and data (transaction data).
2. Since blockchain works on the concept of peer to peer network; every peer in the network has it's own copy of blockchain(longest one)
3.Any block in the chain cannot be modified as it needs the modifictaion of all the blocks after that block and since every user has it's own copy it must be reflected in every copy which makes it really difficult.
4. Miners add the new block to the blochChain by investing computational power, time and as well as proof of work.

Note: Peers accept the longest chain as valid blockchain and the longest chain refers to the chain with the maximum combined difficulty not woth highest number of blocks.

# Build and run the code 

Install npm (node package manager).
Install node in whatever environment you want from here https://nodejs.org/en/download/
For hashing install javascript crypto library by running npm install --save crypto-js

