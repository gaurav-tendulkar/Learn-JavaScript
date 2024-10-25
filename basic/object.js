const mysym = Symbol("key1")

const newuser = {
  name:"Gaurav",
  age: 24,
  address: "Pune",
  [mysym]: "mykey1"
}

console.log(newuser["name"]);
console.log(newuser[mysym]);
// console.log(typeof newuser[mysym]);

newuser.name = "Gaurav Tendulkar"

console.log(newuser["name"]);

console.log(newuser);

newuser.newMethod = function(){
  console.log(`hello this is ${this.name} and i am ${this.age}years old`);
  
}

// console.log(newuser.newMethod());


const username = {
  email: "gaurav@gmail.com",
  name: {
    fullName:{
      firstName: "Gaurav",
      LastName: "Tendulkar"
    }
  },
  location:"pune"
}

console.log(username.name.fullName.LastName);


const obj1 = {1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}

// const ob3 = Object.assign({}, obj1, obj2)

const ob3 = {...obj1, ...obj2} //latest Method for combine objects


console.log(ob3);

console.log(newuser);
console.log(Object.keys(newuser));
console.log(Object.values(newuser));
console.log(Object.entries(newuser));

 