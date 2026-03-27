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