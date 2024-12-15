class Company {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.carsSold = 0;
        this.totalProfit = 0;
    }

    sellCar(car) {
        this.carsSold += 1;
        this.totalProfit += car.profitLoss();
        this.budget += car.price;
    }

    getReport() {
        return `Company: ${this.name}, Cars Sold: ${this.carsSold}, Total Profit: ${this.totalProfit}, Budget: ${this.budget}`;
    }
}

export default Company;
