const cook = {
    name: "Walt",
    redPhosphorus: 100, // 위험합니다.
    water: 500          // 안전합니다.
};

const protectedCook = new Proxy(cook, {
    set(target, key, value) {
        if(key == 'redPhosphorus') {
            if(target.allowDangerousOperations)
                return target.redPhosphorus = value;
            else 
                return console.log("Too dangerous!");
        }
        // 다른 프로퍼티는 모두 안전 합니다.
        target[key] = value;
    }
});

protectedCook.water = 550;  // 550
//protectedCook.redPhosphorus = 150; // Too dangerous!

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;   // 150

console.log(protectedCook.redPhosphorus);
