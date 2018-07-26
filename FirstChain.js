 // SHA256 encryption algorithm
const SHA256 = require('crypto-js/sha256');        \
// Representing block of chain
class Block {           
    // Assigning values to block                            
    constructor(index,data,timestamp,prevHash='',nonce)   
    {
        this.index = index;
        this.data = data;
        this.timestamp = timestamp
        this.prevHash = prevHash;
        this.currentHash = this.calclulateHash(); // function to calculate hash of any block
        // A random number inserted in block to make the creation of block difficult 
        this.nonce = 0;
    }
    // calculating hash through SHA 256 algorithm
    calclulateHash() {
        return SHA256(this.index+this.prevHash+this.timestamp+this.nonce+JSON.stringify(this.data)).toString();
    }
    //Function working as proof of work for our blockchain
    mineBlock(difficulty) {
        while(this.currentHash.substring(0,difficulty) !== Array(difficulty+1).join("0"))
        {
            this.nonce++;
            this.currentHash=this.calclulateHash();
        }
        console.log("Mined");
    }
}

// Representing block chain
class blockChain {                  
    constructor() {
    // Array with first default block as genesis block
    this.chain = [(this.createGenesis())];      
    // Difficulty as per the users
    this.difficulty = 2;
    }

    //creating genesis block or first block
    createGenesis() {                   
        return new Block(0,"genesis_Block","24/07/2018","0");
    }

    //returning last block
    getLatestBlock() {              
        return this.chain[this.chain.length-1];
    }

     //add new block to the block chain
    addNewBlock(newBlock) {            
        newBlock.prevHash = this.getLatestBlock().currentHash;
        newBlock.mineBlock(this.difficulty); 
        this.chain.push(newBlock); 
    }

    // get all the nodes of our block chain
    getChain() {            
        console.log(this.chain);
    }
    
    // testing validity of our block chain
    isValidchain() {            
        for(let i=1;i<this.chain.length;i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i-1];
            //checking for any discrepancy
            if(currentBlock.currentHash!= currentBlock.calclulateHash())   
                return false;
            // testing integrity of chain
            if(currentBlock.prevHash != prevBlock.currentHash)   
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
