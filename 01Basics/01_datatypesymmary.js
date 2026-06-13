// primitive 
//seven catogery
// Number, string  , null , undefined , symbol , Bigint , boolean ;


//reference type

//Array , Object , Function ;

/* java script is dynamic in nature 
and it is synchronys */

const id = Symbol('123') ;
const anotherid = Symbol('123') ;

console.log(id === anotherid) ; // false because symbol is unique

const BigNumber = 46845351617684n
console.log(typeof(BigNumber)) ;

const arr = ['djeepa' , 124 , "cur" , true ] ;
console.log(typeof arr) ;

const Mufunction = function(){
    console.log("hi i am in the function")
}

console.log(typeof Mufunction) ;


//type of function is called function objects and for the array is object 
//type of obj is objects 