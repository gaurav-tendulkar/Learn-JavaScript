const map = new Map()

map.set("IN", "India")
map.set("USA", "united state of america")
map.set("BR", "Brazil")

console.log(map);

for (const key of map) {
console.log(key);
}

for (const [key, value] of map) {
console.log(key, "=>", value);
}

