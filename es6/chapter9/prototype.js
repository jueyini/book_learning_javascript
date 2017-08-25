const Car = (function(){

    const carProps = new WeakMap();

    class Car{
        constructor(make,model){
            this.make = make;
            this.model = model;
            this._userGears = ['P','N','R','D'];
            carProps.set(this, {userGear:this._userGears[0]});
        }

        get userGear(){ return carProps.get(this).userGear;}
        set userGear(value){
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear: ${value}`);
            carProps.get(this).userGear = value;
        }

        shift(gear) { this.userGear = gear; }
    }
    
    return Car;
})();

const car1 = new Car("Tesla","Model 5");
const car2 = new Car("Mazda","31");
car1.shift === Car.prototype.shift;         //true
car1.shift('D');

//여기서 에러가 발생한다. 이후의 코드를 실행하기 위해 주석체크해도 무방하다.
//car1.shift('d');                            //error 
car1.userGear;                              //'D'
car1.shift === car2.shift;                  //true

car1.shift = function(gear){this.userGear = gear.toUpperCase(); }
car1.shift === Car.prototype.shift;         //true
car1.shift === car2.shift;
car1.shift('d');
car1.userGear;                              //'D'
