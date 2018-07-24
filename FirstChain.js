const SHA256 = require('crypto-js/sha256');         // SHA256 encryption algorithm
class Block {                                       // Representing block of chain
    constructor(index,data,timestamp,prevHash='')   // Assigning values to block
    {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp
        this.prevHash = prevHash;
        this.currentHash = this.calclulateHash(); // function to calculate hash of any block
    }

    calclulateHash() {
        return SHA256(this.index+this.prevHash+this.timestamp+JSON.stringify(this.data)).toString();
    }
}

class blockChain {                  // Representing block chain
    constructor() {
    this.chain = [(this.createGenesis())];      // Array with first default block as genesis block
    }

    createGenesis() {                           //creating genesis block or first block
        return new Block(0,"genesis_Block","24/07/2018","0");
    }

    getLatestBlock() {              //returning latest block
        return this.chain[this.chain.length-1];
    }

    addNewBlock(newBlock) {             //add new block to the block chain
        newBlock.prevHash = this.getLatestBlock().currentHash;
        newBlock.currentHash = newBlock.calclulateHash(newBlock); 
        this.chain.push(newBlock); 
    }

    getChain() {            // get all the nodes of our block chain
        console.log(this.chain);
    }
    
    isValidchain() {            // testing validity of our block chain
        for(let i=1;i<this.chain.length;i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i-1];
            if(currentBlock.currentHash!= currentBlock.calclulateHash()) //checking for any discrepancy  
                return false;
            if(currentBlock.prevHash != prevBlock.currentHash)   // testing integrity of chain
                  return false;
            }
            return true;
    }
}

let sandyBlock = new blockChain();
sandyBlock.addNewBlock(new Block(1,{add:400},"25/07/2018",));
sandyBlock.addNewBlock(new Block(1,{add:800},"26/07/2018",));
sandyBlock.getChain();
console.log(sandyBlock.isValidchain());
