class Log{
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push( { message, timestamp:Date.now() });
    }

    [Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;        
        return {
            next() {
                if ( i>= messages.length)
                    return { value:undefined, done: true };
                return { value: messages[i++], done: false};
            }
        }
    }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

// 로그를 배열처럼 순회 합니다.
for(let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}