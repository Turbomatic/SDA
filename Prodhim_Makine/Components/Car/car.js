class Car{
    constructor(name, manifacturer, type, price){
        this.name = name;
        this.manifacturer = manifacturer;
        this.type = type;
        this.price = price;
    }
    getCarName(){
        return this.name;
    }
    getCarManifacturer(){
        return this.manifacturer;
    }
    getCarType(){
        return this.type;
    }
    getCarPrice(){
        return this.price;
    }
    addCar(car,carList){
        carList.push(car);
    }
}
let cars = [];