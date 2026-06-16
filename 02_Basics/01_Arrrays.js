const Arr = [0,2,8,6,2,23] ;
console.log(Arr) ;


// after changing the things in another arr the original array also changes because both the arrays are pointing to the same memory location where the array is stored.it is called as shallow copy. to avoid this we can use spread operator or slice method to create a new array with the same elements but different memory location.

//Deep copy donot change the original array when we change the new array because they are stored in different memory location.

const newArr = Arr ;
newArr[2] = 5 ;
// console.log(Arr) ;
// console.log(newArr) ;

newArr.push(10) ;
//newArr.unshift(1) ;
newArr.shift() ;
newArr.pop() ;

console.log(Arr) ;
console.log(newArr) ;


console.log(Arr.includes(9)) ;
const nArr = Arr.join() ;

console.log(nArr) ;
console.log(typeof nArr) ;


//shift remove the first element of the array and pop remove the last element of the array. unshift add an element at the beginning of the array and push add an element at the end of the array.


//splice  , slice 

let spArr = [1,2,3,4,5] ;
console.log("A" , spArr) ;

const myArr = spArr.slice(1,4) ;
console.log("sliceArr" , myArr) ;
console.log("B" , spArr) ;

const splicedArr = spArr.splice(1,3) ;
console.log("spliceArr" , splicedArr) ;
console.log("C" , spArr) ;