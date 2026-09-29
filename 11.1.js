class Car {
    constructor(make, model, year){
        this.model = model;
        this.make = make;
        this.year = year;
    }

    start(){
        console.log(`${this.make} ${this.model} started`);
    }
    stop(){
       console.log(`${this.make} ${this.model} stopped`)
    }
}

let car1 = new Car("Toyota", "Camry", 2025);
let car2 = new Car("BMW", "X5", 2024);
let car3 = new Car("Kia", "Sportage", 2023);
car1.start()

class ElectricCar extends Car{
   constructor(make, model, year, batteyLife){
    super(make, model, year);
    this.batteyLife = batteyLife
   }

   start(){
    console.log(`${this.make} ${this.model} with battery life of ${this.batteyLife} started`);
    }
}


let ElectricCar1 = new ElectricCar("Tesla", 'Model S', 2026, '100%' );
ElectricCar1.start()


