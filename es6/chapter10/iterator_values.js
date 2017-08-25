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

it.next(); // {values:"Twinkle, twinkle,little bat!", done: false}
it.next(); // {values:"How I wonder what you're at!", done: false}
it.next(); // {values:"Up above the world you fly,", done: false}
it.next(); // {values:"Like a tea tray in the sky", done: false}
it.next(); // {values:"Twinkle, twinkle,little bat!", done: false}
it.next(); // {values:"How I wonder what you're at!", done: false}
it.next(); // {values:undefined, done: true}
it.next(); // {values:undefined, done: true}
it.next(); // {values:undefined, done: true}

