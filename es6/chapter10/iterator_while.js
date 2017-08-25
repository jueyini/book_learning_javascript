require('core-js/fn/array/values');

const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
];

const it = book.values();
let current = it.next();
while(!current.done) {
    console.log(current.value);
    current = it.next();    
}