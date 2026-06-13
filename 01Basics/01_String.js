//here we learn deep with the stringc

let Myname = new String("deepak chaudhary") ;
console.log(Myname) ;
console.log(Myname.length) ;

console.log(Myname.toUpperCase()) ;
console.log(Myname.toLowerCase()) ;

console.log(Myname.charAt(0)) ;
console.log(Myname.indexOf("d")) ;

console.log(Myname.slice(0,6)) ;
console.log(Myname.split(" ")) ;  // split the string into an array of substrings based on the specified separator, which in this case is a space character (" "). The resulting array will contain the individual words from the original string.

console.log(Myname.concat(" is my name")) ;
console.log(Myname.includes("c")) //check the string is include the character or not it return true or false

let newstr = "deepak-chaudhary-is-greatest-of-all-time-he-is-genius" ;
console.log(newstr.split("-")) ; // split the string into an array of substrings based on the specified separator, which in this case is a hyphen character ("-"). The resulting array will contain the individual words from the original string.

