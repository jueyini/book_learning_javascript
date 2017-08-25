function countdown() {
    let i; //i를 루프 밖에서 선언했습니다.
    console.log("Countdown");
    for (i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }    
}
countdown();