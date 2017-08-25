const fs= require('fs');

function nfcall(f, ...args) {
    return new Promise(function(resolve, reject){
        f.call(null, ...args, function(err,...args) {
            if(err) return reject(err);
            resolve(args.length<2 ? args[0] : args);
        });
    });
}

function ptimeout(delay) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, delay);
    });
}

function grun(g) { 
    const it = g();
    (function iterate(val){
        const x = it.next(val);
        if(!x.done) {
            if(x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));            
            }else{
                setTimeout(iterate,0,x.value);
            }
        }
    })();
}

function* theFutureIsNow() {
    let data;
    try{
        data = yield Promise.all([
            nfcall(fs.readFile, 'a.txt'),
            nfcall(fs.readFile, 'b.txt'),
            nfcall(fs.readFile, 'c.txt')
        ]);
    }catch(err) {
        console.error("Unable to read one or more input files: " + err.message);
        throw err;
    }

    yield ptimeout(5*1000);
    try{
        yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
    }catch(err) {
        console.error("Unable to write output file: " + err.message);
        throw err;
    }
}

grun(theFutureIsNow);

