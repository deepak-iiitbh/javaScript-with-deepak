function nums(...array){
    console.log(array) ;
}
nums(10,20,30,50,40) ;
console.log(typeof(nums(10,20,30,50,40)))
//undefined 

function deepak(myovj){
    console.log(myovj.name) ;
    console.log(myovj.age) ;
}

deepak({
    name : "deepak" ,
    age : 45 ,
    college : "iiitbh" ,
    email : "deepak9917090050@gmail.com"
})
//we also can pass the obj to the function

function arrayname(allele){
    console.log(allele[2]) ;
}
arrayname([10,20,30,4,50,5,0]) ;