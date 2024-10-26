
function sayMyName() {
  console.log("Gaurav");
  
 }

// sayMyName() // excutions 


function addTwoNumber(number1,number2) {

    return number1  + number2
     
}

const sum  = addTwoNumber(3, "a")

// console.log("the result is ", sum);

function login(userName) {
  if (userName === undefined) {
    console.log("Enter the valid username");
    return
    
  }
  return `${userName} Just Logged In`
}

// console.log(login("Gaurav"));
// console.log(login());


function calculate(val1, val2, val3 , ...num1) {
  return num1
}

// console.log(calculate(200, 300, 400, 500));



// function handleObject(anyobject) {
  
// }