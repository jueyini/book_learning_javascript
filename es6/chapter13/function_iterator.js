function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    
    return {
        next(){
            if(++colorIndex >= colors.length) colorIndex = 0;

            return { value: colors[colorIndex], done: false };
        }
    };   
}

const rainbowIterator = getRainbowIterator();

setInterval(function() {
    document.querySelector('.rainbow').style['background-color'] = rainbowIterator.next().value;
    //console.log(rainbowIterator.next().value);
},500);