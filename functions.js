//a function is a reusable block of code that performs a
//  specific task. It allows you to encapsulate a set of instructions
//  and execute them whenever needed, without having to rewrite the code.
//  Functions can take input parameters, perform operations on them,
//  and return a result. They are fundamental building blocks in programming 
// and help improve code organization, readability, and maintainability.
//there are 3 types of function
//1.function declaration
greetName("Opiyo");
function greetName(name){
    return `Hello ${name}`;
}
console.log(greetName("Opiyo"));
//2. function expression is defining a function and storing it in a variable
const greet=function(name){
    return `Hello ${name}`
    
}
//A function paramter can be anu variable, which is impacted in the return statement
console.log(greet("Brian"))
 function name(name){
    return `${name.age}, ${name.years}`;
 }
 console.log(name({age:20, years:1999}));

 const obj=function(name){
    return `${name.age}, ${name.year}`
 }
 console.log(obj({age:20, year:1999}))
 //default parameters function
 function personName(name="Opiyo"){
    return `Hello, ${name}`;
 }
 console.log(personName());
 //HIGHER ORDER FUNCTIONS
 //callback functions
 //Array methods
 //Anonymous functions
 //1. Anonymous function is a function 
 // that does not have a name. It is often used as 
 // a callback function or as an argument to another function. 
 // Anonymous functions are typically defined using function expressions or arrow functions. 
 // They can be useful for short, 
 // one-time use functions that do not need to be reused elsewhere in the code.
//Example of an anonymous function used as a callback
setTimeout(function() {
    console.log("This is an anonymous function used as a callback.");
}, 2000);
//2. A call back function is a function that is passed as an argument to another 
// function and is executed after a certain event or condition is met or to be executed later.
//  It allows you to specify a function to be called back at a later time,
//UNDERSTANDING  CALLBACK FUNCTION
//The code below is an anonymous function and is useless, it must be passed to a variable to give a value
// function(){
//     log("This is a callback function.");
// }

function processUserInput(callback) {
    console.log("Processing user input...");
    callback();
}
processUserInput(function(){
    console.log("This is a callback function.");
});

function number(num, callback){
    const number=num*2;
    console.log(`The number is ${number}`);
    callback(number);
}
  number(5,function(value){
    console.log(`Callback received the value: ${value}`);
  });
  //using callback function to perform different operation 
  function processNumber(num, callback){
    const result=num*3;
    callback(result);
  }
  processNumber(4, function(value) {
    console.log(`Callback received the value: ${value}`);
  });
  //function to convert name to upercases
  function convertToUpperCase(name, callback){
    const convertName=name.toUpperCase();
    callback(convertName)
  }
  convertToUpperCase("Opiyo", function(value){
    console.log(`Hello, ${value}`);
  })
  //fixing bugs
  function test(num, callback){
    const result= num+5;
    callback(result);
  }
  test(10, function(value){
    console.log(`The result is: ${value}`);
  })
