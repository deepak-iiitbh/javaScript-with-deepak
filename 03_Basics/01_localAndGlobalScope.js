{
//thisi is call a scope 
}
//everything outside this is global scope

let a = 50 ;
var b = 10 ;
if(true){
    a= 100 
    b = 20 ;
    console.log("INNER : " , a , b) ;
}
console.log("OUTER : ", a , b) ;
