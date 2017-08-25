const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x,i) => ({ name: x, price: prices[i]}));
//cart:[{ name:"Widget", price: 9.95 }, {name:"Gadget", price: 22.95}]

