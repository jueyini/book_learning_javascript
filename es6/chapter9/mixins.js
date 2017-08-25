class Car{}
class InsurancePolicy { }
function makeInsurable(o) {
    o.addInsurancPolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.isInsured = function() { return !!this.insurancePolicy; }    
}

/* 
//Error
//자동차를 추상화한 개념을 보험에 가입할 수는 없다.
//보험에 가입하는 것은 개별 자동차입니다.
makeInsurable(car); 
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy()); // error
*/

/*
// 이렇게 해보자
//const car1 = new Car();
//makeInsurable(car1)
//car1.addInsurancPolicy(new InsurancePolicy());
// 이 방법의 단점은 모든 자동차에서 makeInsurable을 호출해야 한다.
*/

//해결책은 쉽다.
makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancPolicy(new InsurancePolicy());  // works