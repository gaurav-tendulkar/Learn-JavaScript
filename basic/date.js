//  Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let createDate = new Date("01-12-2023")

console.log(createDate);



console.log(Math.floor(Date.now()/1000))


let newDate =  new Date()

console.log(newDate.getFullYear());

let the = newDate.toLocaleString('default', {
  weekday: "long"
})

console.log(the);


