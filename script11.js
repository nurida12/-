class Car {
    #mileage = 0;
    constructor(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year; 
    }
    
    drive(miles) {
        if (miles > 0){
            this.#mileage  += miles;
            console.log(`${`this.make`}  ${`this.model`} drove ${miles} miles`);
        }else{
            console.log("Miles must be positive")
            
        }
    }


    getMileage(){
        return this.#mileage
    }
   
        start(){
        console.log(`${`this.make`}  ${`this.model`}  started`);
        }
        stop(){
        console.log(`${`this.make`}  ${`this.model`}  stopped`);
        }
       }

let  car1 = new Car('Toyota', 'Camry', 2025);
car1.start()

car1.drive(100)
console.log(car1.getMileage())

car1.drive(100)
console.log(car1.getMileage())









