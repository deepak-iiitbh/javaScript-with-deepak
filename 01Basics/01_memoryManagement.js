//there are two type of memorysegments first is stack and second is heap

//in all premetive datatype


let myname = "deepak chaudhary"
let mydupname = myname ;
mydupname = "deep chaudhary "

console.log(myname) 
console.log(mydupname) 

//here in above code we are creating two variable myname and mydupname and assigning the value of myname to mydupname but when we change the value of mydupname it does not change the value of myname because both are stored in different memory location in stack and they are independent of each other aslo myname give the copy not the actual reference

//in case of non premetive datatype

let mytech = {
    name : "javascript",
    email : "mytech@gmail.com"
}
let myduptech = mytech ;
myduptech.name = "python"

console.log(mytech) 
console.log(myduptech)

//here in above code we are creating two variable mytech and myduptech and assigning the value of mytech to myduptech but when we change the value of myduptech it also change the value of mytech because both are stored in same memory location in heap and they are reference to each other aslo myduptech give the reference not the copy of mytech