
const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcheros = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

marvelHeroes.push(dcheros) ;
//push method add the element at the end of the array and it can also add an array as an element in the original array. in this case the original array will have a nested array as an element.

// dcheros.forEach(hero => {
//     marvelHeroes.push(hero) ;
// })


//we can use foreach method to iterate through the dcheros array and push each element to the marvelHeroes array. this way we can add the elements of one array to another array without creating a nested array.

// dcheros.map(x => {
//     marvelHeroes.push(x) ;
// })



console.log(marvelHeroes) ;
console.log(marvelHeroes[5][0]) ;

let newArray = marvelHeroes.concat(dcheros) ;
//concat method is used to merge two or more arrays. it does not change the existing arrays, but instead returns a new array.
let newwArray2 = [...marvelHeroes, ...dcheros] ;
//spread operator is used to spread the elements of an array into a new array. it is a more concise way to merge arrays compared to concat method.

console.log(newArray) ;
console.log(newwArray2) ;


const nestedarray = [[1, 2], [3, 4], [5, 6] , [[[[5]]]]] ;
let flatarray = nestedarray.flat(8) ;
console.log(flatarray) ;


console.log(Array.isArray(marvelHeroes)) ; //isArray method is used to check if the given value is an array or not. it returns true if the value is an array, otherwise it returns false.
console.log(Array.from("deepak chaudhary00")) ; //from method is used to create a new array from an array-like or iterable object. in this case we are creating an array from a string, so each character of the string will be an element in the new array.

console.log(Array.from({name : "deepak", age : 24})) ; //when we try to create an array from an object that is not iterable, it will return an empty array. because the object does not have a length property and it is not iterable.

