// console.log("this is ram");
// console.log("this is sita");
// console.log("this is laxman");

// console.log("this is ram");
// console.log("this is sita");
// console.log("this is laxman");

// console.log("this is ram");
// console.log("this is sita");
// console.log("this is laxman");


//function declaration
function data(){
    console.log("this is ram");
    console.log("this is sita");
    console.log("this is laxman");
}
data()

//function expression: assign func to the variable
let data = function(){
    console.log("this is func exp")
}
data()

//function with parameters
let data = function(a,b){
    console.log(a,b)
}
data(5,6)

//function wihout parameters
function greet(){
    console.log("hello")
}
greet()


//return: is a keyword , nd return back some data , 
// if we any statements afer return it will not execute nd also stops funct execution
// you can store data in one variable
function add(a,b){
    console.log("addition")
    return a+b
    console.log("hello")
}
 let res = add (10,20)
 console.log(res)


 //without return
function add(a,b){
    console.log(a+b)
}
add(6,10)



//method objects: a func whih is passed into an obj called method obj
let hero ={
    name: "hello",
    age:21,
    loc:"hyd" ,
    data:function(){
        console.log(`hii this is ${this.name}`)
    }
}
console.log(hero.data())


//arrow function: it is es6 concept, it is used to write a func in short way
//2 tpyes: single para ; multi para

let data = (a,b) => {
    console.log(`hi js ${a} hello ${b}`) //paranthesis was optional
}
data("es6","ok")


//higher order funcction: a func which accpets another func as an argument
//call back funtion: a func which passes in to another func as an argument
//here one is higher order fun
//two is callback func
function one(hello){
    console.log("hello");
    hello();
    console.log("students")
}

function two(){
    console.log("good afternoon")
}
one(two)


//anaymous fun: a func without name 
let hello = function(){
    console.log("this is a anaymous func")
}
hello()

//recursive func: a func calling itself until it meets its base case
// base case - stopping func
function factorial(x){
    if(x==1){
        return 1;
    }
    else{
        return x *factorial(x-1)
    }
}
console.log(factorial(3))

//iife : immediately invoke func exprsn ; func is wrapped in a prenthesis
// calling the func instant
(function(){
    console.log("hello")
})()