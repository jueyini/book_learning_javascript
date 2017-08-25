const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds,superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve,reject) {
            for (let i=countdown.seconds; i>=0; i--) {
                timeoutIds.push( setTimeout( function() {
                    if(countdown.superstitious && i===13) {
                        // 대기중인 타임아웃을 모두 취소합니다.
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("Oh my god"));
                    }
                    countdown.emit('tick',i);
                    if(i===0) resolve();
                }, (countdown.seconds-1)*1000)
                );
            }
        });
    }
}

function launch() {
    return new Promise(function(resolve,reject){
        console.log("Lift off!");
        setTimeout(function(){
            resolve("In orbit!");
        }, 2*1000);  //2초만에 궤도에 도달하다니!
    })
}

const c = new Countdown(15,true)

c.go()
    .then(launch)
    .then(function(msg){
        console.log(msg);
    })
    .catch(function(err){
        console.error("Houston, we have a problem...");;
    })