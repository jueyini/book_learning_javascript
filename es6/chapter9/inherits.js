class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }

}

class Car extends Vehicle {
    constructor() {
        // 슈퍼클래스의 생성자를 호출하는 특별한 함수다. 
        // 서브클래스에서는 이 함수를 반드시 호출해야 합니다.
        super(); 
        console.log("Car created");        
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);  // ["Frank", "Judy"]

const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);  // ["Alice", "Cameron"]

//v.deployAirbags();          // error
c.deployAirbags();          // "BWOOSH!""