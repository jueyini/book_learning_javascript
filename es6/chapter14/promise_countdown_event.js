const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds,superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
        console.log(!!this.superstitious);
    }

    go() {
        const countdown = this;
        return new Promise(function(resolve,reject) {
            for (let i=countdown.seconds; i>=0; i--) {
                setTimeout(function(){
                    if(countdown.superstitious && i===13) 
                        return reject(new Error("Oh my god"));
                    countdown.emit('tick',i);
                    if(i===0) resolve();
                }, (countdown.seconds-1)*1000);
            }
        });
    }
}
    
//방법2
const c = new Countdown(15,true);

c.on('tick', function(i) {
    if(i>0) console.log(i+ '...');
});
c.go()
    .then(function(){
        console.log('GO!');
    })
    .catch(function(err){
        console.error(err.message);
    })