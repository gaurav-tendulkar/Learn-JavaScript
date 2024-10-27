
const logGoogle = true
const logEmail = 'false'

if (logGoogle && logEmail) {
  console.log("ALlow to buy");
  
}

if (logGoogle || logEmail) {
  console.log("Buy");
}

const arr =  [1,2,3,4,5,6,7,4]

if(arr.length === 0){
  console.log("Empty");
  
}
else{
  console.log("Not Empty");
  
}

const empObj = {}

if (Object.keys(empObj).length === 0) {
  console.log("Empty Object");
  
}

// month =  12

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;

//   default:
//     console.log("Enter Invalid month");
//     break;
// }



