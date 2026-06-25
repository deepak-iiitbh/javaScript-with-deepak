//singleton objects 

const tinderuser = new Object();
console.log(typeof tinderuser) ; //object


//second method to create an object is using object literal syntax. it is more concise and easier to read.
const tinderuser2 = {
    name : "deepak",
    age : 24,
    isLoggedIn : false
}

// console.log(tinderuser2) ;
// console.log(tinderuser2.name) ;


tinderuser.name = "deepak chaudhary" ; //we can change the value of a property of an object using dot notation.
tinderuser.age = 24 ;
tinderuser.isLoggedIn = true ;  

console.log(tinderuser) ;

//++++++++++++++++++++++++++++OBJECT methods+++++++++++++++++++++++++++++++++++++++++++++++

const obj1 = {1 : "one", 2 : "two", 3 : "three"}; //object with numeric keys
const obj2 = {a : "one", b : "two", c : "three"}; //object with string keys

const obj3 = Object.assign( {} , obj1 , obj2) ; //Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. it returns the target object.

console.log(obj3) ;

//spread opertor 
const obj4 = {...obj1 , ...obj2} ; //spread operator is used to spread the properties of an object into a new object. it is a more concise way to merge objects compared to Object.assign() method.
console.log(obj4) ;

//now more objects methods 

console.log(Object.keys(tinderuser)) ; //Object.keys() method is used to get an array of the keys of an object.
console.log(Object.values(tinderuser)) ; //Object.values() method is used to get an array of the values of an object.
console.log(Object.entries(tinderuser)) ; //Object.entries() method is used to get an array of the key-value pairs of an object. it returns an array of arrays, where each inner array contains a key-value pair.