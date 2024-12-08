class Seller {
  constructor(name) {
    this.name = name;
  }
  getSellerName() {
    return this.name;
  }
  addSeller(seller, sellerList) {
    sellerList.push(seller);
  }
  sellerProduct(seller, cars) {
    let list1 = [];
    list1.push(...cars);

    let hashTable = {};
    hashTable[seller.getSellerName()] = list1;

    return hashTable;
  }
}
seller = [];
