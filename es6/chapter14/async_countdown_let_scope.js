function countdown() {    
    console.log("Countdown");
    // 이제 i는 블록 스코프 변수입니다.
    for (let i=5; i>=0; i--) {  
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }    
}
countdown();