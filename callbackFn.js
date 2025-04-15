//Callback

//noraml function
/* 
function first(){
    console.log("Print First");
}
function second(){
    console.log("Print Second");
}
function third(){
    console.log("Print Third");
}
first();
third();
second(); */

// noraml function

/* function display(res){
    console.log(`Addtion of two number is ${res}`);  
}
function calculation(a,b){
    let sum=a+b;
    return sum; 
}
let result=calculation(5,10);
display(result); */

// above function using callback

/* function display(res){
    console.log(`Additon of two number is ${res}`); 
}
function calculation(a,b,mycallBack){
    let sum=a+b;
    mycallBack(sum);
}
calculation(3,4,display); */

// usnig callback function
/* function first(){
    console.log("Print first");
}
function second(){
    console.log("Print Second");
}
function third(){
    console.log("Print third");
}
first();
setTimeout(second,2000);
third(); */

function first(){
    console.log("Print first");
}
function third(){
    console.log("Print third");
}
first();
setTimeout(()=>{
    console.log("Print Second");
},2000);
third();





