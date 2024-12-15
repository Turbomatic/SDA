import Car from './components/Car.js';
import Company from './components/Company.js';
import Buyer from './components/Buyer.js';
import Seller from './components/Seller.js';

class Distribution {
    constructor() {
        this.company = new Company('Auto Corp', 100000);
        this.seller = new Seller('John', 0.1);
        this.buyer = new Buyer('Alice', 20000);
    }

    start() {
        const car1 = new Car('Sedan', 15000, 12000);
        const car2 = new Car('SUV', 20000, 16000);

        if (this.buyer.buyCar(car1)) {
            this.seller.sellCar(car1, this.company);
            alert('Car 1 Sold!');
        }

        if (this.buyer.buyCar(car2)) {
            this.seller.sellCar(car2, this.company);
            alert('Car 2 Sold!');
        }

        this.showReports();
    }

    showReports() {
        alert(this.company.getReport());
        alert(this.seller.getReport());
    }
}

const distribution = new Distribution();
distribution.start();
