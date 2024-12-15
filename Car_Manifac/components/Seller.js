class Seller {
    constructor(name, commissionRate) {
        this.name = name;
        this.commissionRate = commissionRate;
        this.totalEarnings = 0;
    }

    sellCar(car, company) {
        company.sellCar(car);
        const earnings = car.price * this.commissionRate;
        this.totalEarnings += earnings;
    }

    getReport() {
        return `${this.name} earned a total of ${this.totalEarnings} from commissions.`;
    }
}

export default Seller;
