const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};

// 이 함수는 어떤 객체에도 연결되지 않았지만 this를 사용합니다.
function greet() {
    return `Hello, I'm ${this.name}!`;    
}

greet();    // "Hello, I`m undefined!"" - this는 어디에도 묶이지 않았습니다.
greet.call(bruce);  // "Hello, I`m Bruce!" - this는 bruce 입니다.
greet.call(madeline);  // "Hello, I`m Madeline!" this는 madeline입니다.


/*
함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용할 수 있다. call의 첫번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달된다.
*/

function update(birthYear,occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
//bruce는 이제 { name: "Bruce", birthYear: 1949, 
//              Occupation:"singer"} 입니다.

update.call(madeline, 1942, 'actress');
//bruce는 이제 { name: "Madeline", birthYear: 1942, 
//              Occupation:"actress"} 입니다.

/*
apply는 함수 매개변수를 처리하는 방법은 call과 완전히 같습니다.. call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply 매개변수를 배열로 받습니다.
*/
update.apply(bruce, [1955, "actor"]);
//bruce 이제 {name: "Bruce", birthYear: 1955,
//          occupation: "actor"} 입니다.
update.apply(madeline, [1918, "writer"]);
//bruce 이제 {name: "Bruce", birthYear: 1955,
//          occupation: "writer"} 입니다.

/*
ES6의 확산연산자를 사용해도 apply와 같은 결과를 얻을 수 있습니다.
*/
const newBruce = [1940, "martial artist"];
update.call(bruce,...newBruce); // apply(bruce, newBruce)와 같습니다.
Math.min(...arr);		// -5
Math.max(...arr);		// 15
/*
bind를 사용하면 함수의 this 값을 영구히 바꿀 수 있습니다. update 메서드를 이리저리 옮기면서도 호출 할 때 this 값은 항상 bruce가 되게끔, call이나 apply, 다른 bind와 함께 호출하더라도 this 값이 bruce가 되도록 하려면 bind를 사용합니다.
*/
const updateBruce = update.bind(bruce);

updateBruce(1904,"actor");
//bruce 이제 {name: "Bruce", birthYear: 1955,
//          occupation: "actor"} 입니다.
updateBruce.call(madeline,1274,"king");
//bruce 이제 {name: "Bruce", birthYear: 1274,
//          occupation: "king"} 입니다.
//madeline은 변하지 않습니다.

/*
bind에 매개변수를 넘기면 항상 그 매개변수를 받으면서 호출되는 새 함수를 만드는 효과가 있습니다. 예를 들어 bruce가 태어난 해를 항상 1949로 고정하지만, 직업은 자유롭게 바꿀 수 있는 업데이트 함수를 만들고 싶담녀 다음과 같이 하면 됩니다.
*/

const updateBruce1949 = update.bind(bruce,1949);
updateBruce1949("singer, songwriter");
// bruce는 이제 {name: "Bruce", birthYear: 1949,
//          occupation: "singer, songwriter"} 입니다.



