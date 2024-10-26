const user = {
  name: "Gaurav", 
  age: 24 ,
  welcome: function(){
      console.log(` My name is ${this.name} and i am ${this.age} Years old`);
  }
}

// user.welcome()
// user.name =  "sid"
// user.age = 28

// user.welcome()
// user.name = "nilesh"
// user.age = 30 
// user.welcome()

function chai() {
  console.log(this);
  
}

const addnumber = (n1 , n2) => {
    return n1 + n2
}

console.log(addnumber(12,34));

(function chai(){
  console.log(`DB connected`);
  
})();

(function chai(){
  console.log(`DB connected 2`);
  
})();

((name)=> {
  console.log(`DB Connected 3 ${name}`);
  
})("Gaurav")


