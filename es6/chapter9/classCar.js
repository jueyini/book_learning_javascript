class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.userGears = ['P','N','R','D'];
        this.userGear = this.userGears[0];        
    }

    shift(gear) {
        if(this.userGears.indexOf(gear) <0 )
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;        
    }
}

const car1 = new Car("Tesla","Model 5");
const car2 = new Car("Mazda","31");
car1.shift('D');
car2.shift('R');

console.log(car1.userGear); //"D"
console.log(car2.userGear); //"R"