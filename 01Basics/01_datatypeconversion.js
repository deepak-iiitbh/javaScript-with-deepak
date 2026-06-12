let takenum = "hello world" ;
console.log(typeof(takenum)) ;

const changevar = Number(takenum) ; 
console.log(changevar) ;
console.log(typeof(changevar)) ;

takenum  = true ;
const secondchange = String(takenum) ;
console.log(secondchange) ;
console.log(typeof(secondchange)) ;

// "33" => 33 
// "33a" => NaN
// true => 1
//false => 0
