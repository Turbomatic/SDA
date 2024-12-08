class Product{
    constructor(name, amount, expire, price){
        this.name = name;
        this.amount = amount;
        this.expire = expire;
        this.price = price;
    }

    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getAmount(){
        return this.amount;
    }
    getSales(){
        return this.getAmount()*this.getPrice();
    }
}

function getTotalSales(products) {
    let total = [];
    products.forEach(function(product) {
        total.push(product.getName() + " " + product.getSales());
    });
    return total;
}

function getTotalMoney(products) {
    let total = 0;
    products.forEach(function(product) {
        total += product.getSales();
    });
    return total;
}

function day2(products) {
    products.forEach(function(product) {
        product.amount = product.getAmount() - 10;
    });
}

product1 = new Product("Apple", 50, "1-1-2026", 500);
product2 = new Product("Pear", 30, "1-1-2026", 600);
product3 = new Product("Banana", 25, "1-1-2026", 700);
product4 = new Product("Dragonfruit", 35, "1-1-2026", 800);
product5 = new Product("Shit", 40, "1-1-2026", 900);
let products = [product1,product2,product3,product4,product5];

console.log(getTotalSales(products));
console.log(getTotalMoney(products));

day2(products);

console.log(getTotalSales(products));
console.log(getTotalMoney(products));
