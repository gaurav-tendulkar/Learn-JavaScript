let arrays = [1,2,3,4,5] // o based index 

// shallow copy , deep copy 

console.log(arrays);
console.log(arrays[4]);

const arr = new Array(1,6,3,434,5,35,3,3,54,345)
console.log(arr[0]);

arrays.push(34232)
console.log(arrays);
arrays.pop()
arrays.pop()
console.log(arrays);

marvel = ["ironMan", "captain", "spiderman", "natasha"]

dc = ["jocker","superman", "flash", "batman"]

// const joinarr = marvel.concat(dc)
// console.log(joinarr);

const newHero = [...marvel, ...dc]
console.log(newHero);