class Buyer {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    buyCar(car) {
        if (this.balance >= car.price) {
            this.balance -= car.price;
            return true;
        } else {
            return false;
        }
    }
}

export default Buyer;
