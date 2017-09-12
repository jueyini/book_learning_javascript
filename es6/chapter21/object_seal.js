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

const log = new Logger("Captain's Log");

// 클래스의 인스턴스를 사용하면서, 
// 인스턴스의 프로퍼티를 수정하는 메서드는 동작하도록 할 때 
// 봉인을 사용할 수 있습니다.
Object.seal(log);
Object.isSealed(log);

// 프로퍼티를 읽고 값을 수정하는 것은 허용지만 
// 아래의 프로퍼티를 추가,삭제하는 시도에 대해서는 
// 동작하지 않는다.
log.name = "captain's Boring Log";          // OK
log.add("Anotherboring dat at se....");     // OK

// log.newProp = 'test';
// TypeError: cannot add property newProp, object is not extensible

log.name = 'test';  // OK

// delete log.name;
// TypeError: Cannot delete property 'name' of #<Logger>

// Object.defineProperty(log, 'log', {enumerable: false});
// TypeError: Cannot redefine property: company