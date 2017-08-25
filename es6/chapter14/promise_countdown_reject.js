function countdown(seconds) {
    return new Promise(function(resolve,reject) {
        for (let i=seconds; i>=0; i--) {
            setTimeout(function(){
                if(i===13) return reject(new Error("Oh my god"));
                if(i>0) console.log(i+"...");
                else resolve(console.log("GO!"));
            }, (seconds-1)*1000);
        }
    });
}
//방법2
const p = countdown(15);
p.then(function(msg){
    console.log("countdown completed successfully");
});
p.catch(function(err){
    console.log("countdown experienced an error:" + err.message);
})
