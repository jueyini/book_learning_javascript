function countdown(seconds) {
    return new Promise(function(resolve,reject) {
        for (let i=seconds; i>=0; i--) {
            setTimeout(function(){
                if(i>0) console.log(i+"...");
                else resolve(console.log("GO!"));
            }, (seconds-1)*1000);
        }
    });
}

//방법1
countdown(5).then(
    function(msg) {
        //프라미스에서 resolve 호출시 매개변수를 넘기면 이 콜백함수에서 매개변수로 받을 수있습니다.
        console.log("countdown completed successfully");        
    },
    function(err) {
        console.log("countdown experienced an error:" + err.message);
    }
);

//방법2
const p = countdown(5);
p.then(function(msg){
    console.log("countdown completed successfully");
});
p.catch(function(err){
    console.log("countdown experienced an error:" + err.message);
})
