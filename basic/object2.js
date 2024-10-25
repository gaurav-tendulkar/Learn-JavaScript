const mysym = Symbol("key1")

const newuser = {
  name:"Gaurav",
  age: 24,
  address: "Pune",
  [mysym]: "mykey1"
}

const the = newuser.name

// console.log(the);

const {name: na} = newuser

// console.log(na); 



