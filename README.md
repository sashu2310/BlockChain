# BlockChain
A simple implementation of blockchain in node.js to understand the underlying concept and principles upon which blockchains are made.

# Principles of BlockChain
1. Works in a distributed network.
2. Lack of any third party vendor for authentication and authorization of blocks or transactions.
3. Using private and public key encryption for validation purpose.

# Structure of blockChain
1. Every block in the chain mainly comprises of:
  a. Transaction data,
  b. Previous hash (hash of previous block),
  c. timestamp and
  d. Nonce (It is a randomly selected string added in order to qualify for 'proof of work' so that it may be added to the blockChain)
  NOTE : The process of finding correct nonce is known as 'Mining'.
  
2. Since blockchain works on the concept of peer to peer network; every peer in the network has it's own copy of blockchain(longest one).

3.Any block in the chain cannot be modified as it needs the modifictaion of all the blocks after that block (since hash of every block depends upon hash of previous) and since every user has it's own copy it must be reflected in every copy which makes it really difficult.

4. Miners add the new block to the blockChain by investing computational power, time and as well as proof of work.

Note: Peers accept the longest chain as valid blockchain and the longest chain refers to the chain with the maximum combined difficulty not woth highest number of blocks.

For further readings visit :

https://medium.com/coinmonks/blockchain-for-beginners-what-is-blockchain-519db8c6677a

https://medium.com/loom-network/understanding-blockchain-fundamentals-part-1-byzantine-fault-tolerance-245f46fe8419
# Build and run the code 

Install npm (node package manager).
Install node in whatever environment you want from here https://nodejs.org/en/download/
For hashing install javascript crypto library by running npm install --save crypto-js

