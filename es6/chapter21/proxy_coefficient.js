'use strict';

const coefficients = {
    a:1,
//    b:2,
    c:5
};

function evaluate(x, co) {
    return co.a + co.b * x +co.c * Math.pow(x,2);
}

const val = evaluate(5, coefficients);
//console.log(val);
//NaN

//프락시 객체를 이용해보자.
/*
해당 키가 타겟에 없을 경우 0을 반환하게 한다.
const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        return target[key] || 0;
    }
})
*/

//키로 소문자 한글자만 받았을 때만 프락시가 동작한다.
/*
const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        if(!/^[a-z]$/.test(key)) return target[key];
        return target[key] || 0;
    }
})
*/

//숙제:; 키의 값이 숫자가 아닐 때는 항상 0을 반환
const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        //if(!/^[0-9]+$/.test(target[key])) return 0;
        if(!Number.isInteger(target[key])) return 0;
        return target[key] || 0;
    }
})

console.log(betterCoefficients.a);          // 1
console.log(betterCoefficients.b);          // 0
console.log(betterCoefficients.c);          // 5
console.log(betterCoefficients.d);          // 0
console.log(betterCoefficients.anything);   // 0;

