class Car {
    constructor(model, price, costPrice) {
        this.model = model;
        this.price = price;
        this.costPrice = costPrice;
    }

    profitLoss() {
        return this.price - this.costPrice;
    }
}

export default Car;
