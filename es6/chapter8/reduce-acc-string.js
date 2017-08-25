const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark","Xylophone","November","Chocolate",
    "Papaya","Uniform","Joker","Clover","Bali"
];
const longWords = words.reduce((a,w) => w.length>6 ? a+" "+w : a,"").trim();
//longWords: "Beachball Aardvark Xylophone November Chocolate Uniform"

//숙제 reduce 대신 filter와 join을 사용하여 같은 결과를 구하라
const longWords2 = words.filter(c => c.length>6).join(" ");
console.log(longWords2);
