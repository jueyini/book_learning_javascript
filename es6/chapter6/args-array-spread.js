// 배열 선언
const arr = [1, 2, 3, 4, 5];

// 배열 해체 할당
let [x, y, ...rest] = arr;
x;  //1
y;  //2
rest;  //[3,4,5]