//객체 선언 
const obj = {b:2, c:3, d:4};

//해체 할당
const {a, b, c} = obj;
a;  //undefined: obj에는 "a"프로펕티가 없습니다.
b;  //2
c;  //3
d;  //ReferenceError: "d"는 정의되지 않았습니다.