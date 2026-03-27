//array is a collection of items stored in a single variable
//BASIC OPERATIONS WITH ARRAY
const fruits=['Apple', 'Mango', 'Orange'];
console.log(fruits);
//1.Accessing elements in an array
//logging the first element
console.log(fruits[0]);
//logging the last element
console.log(fruits[2]);
//2. logging the lenght of the array
console.log(fruits.length);
//3.adding and removing item in an array
const names=["Brian", "Opiyo","Moses", "Alex"];
console.log(names);
//addding name at the end of an array
names.push("Mark");
console.log(names);
names.unshift("Okello");
console.log(names);
//removing the last item
names.pop()
console.log(names);
names.shift()
console.log(names);
//2.Iterating /looping through an array
const numbers=[1,2,3,4,5];
 for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
 }
 //method 2
 for(const number of numbers){
    console.log(number);
 }
 //3 ARRAYS METHODS
// forEach() → run a function for each element
// map() → transform each element
// filter() → pick elements based on a condition
// reduce() → combine elements into one value

