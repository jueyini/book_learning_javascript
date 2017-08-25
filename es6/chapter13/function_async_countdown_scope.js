function loopBody(i) {
    setTimeout(function() {
        console.log(i===0 ? "go" : i);
    }, (5-i)*1000);
}

var i;
for (i=5; i>=0; i--) {
    loopBody(i);
}