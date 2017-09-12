'use strict';

class Logger{
    constructor(name) {
        this.name = name;
        this.log = [];
    }
    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}

const log2 = new Logger("First Mate's Log");

// 확장 금지는 프로퍼티에 값을 설정하거나, 삭제하거나, 속성을 
// 변경하는 작업은 모두 허용되지만 이름 처럼 확장을 금지합니다.
Object.preventExtensions(log2);
Object.isExtensible(log2);  // false

log2.name = "First Mate's Boring Log";  // OK
log2.add("Another boring day at sea");  // OK

log2.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible

log2.name = 'test';
delete log2.name;
Object.defineProperty(log2, 'log', {enumerable: false});
