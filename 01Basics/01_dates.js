// Dates 

let mydate = new Date() ;
console.log(mydate) ;
console.log(typeof mydate) ;
console.log(mydate.toString()) ;
console.log(mydate.toLocaleDateString()) ;

// month start from 0 in javascript 
// typeof date in js is object 
let mycreatedate1 = new Date(2026 , 5 ,15) ;
let mycreatedate2 = new Date(2026 , 5 ,15 , 5 , 3) ;
let mycreatedate3 = new Date("2026-01-25") ;
let mycreatedate4 = new Date("01-15-2026") ;
console.log(mycreatedate1.toDateString) ;
console.log(mycreatedate2.toDateString()) ;
console.log(mycreatedate3.toDateString()) ;
console.log(mycreatedate4.toDateString()) ;

//now take the timestamp for milli sec diffrence

let mytimeStamp = Date.now() ;

console.log(mytimeStamp) ;
console.log(Math.floor(Date.now()/1000)) ;

//
let currdate = new Date() ;
console.log(currdate.getMonth()+1) ;
console.log(currdate.getDay());

// to custoomize dates 
let newDate = new Date() ;
newDate.toLocaleDateString('default', {
    weekday: "long"
});