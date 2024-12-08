//classes and function
class Buyer{
    constructor(name){
        this.name = name;
    }
    getBuyerName(){
        return this.name;
    }
    addBuyer(buyer,buyerList){
        buyerList.push(buyer);
    }
}
let buyers = [];