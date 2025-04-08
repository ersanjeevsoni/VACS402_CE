//function 

//declaration fn in js

function demo(){

  console.log("Hello JavaScript");
  
}
demo();   // fn calling or inovation
//function types
//with parameters and without parameter

// fn with params

function add(a,b){
 var c=a+b;
 console.log("Addtion of two number is " + c);
}
add(4,6);
//fn without params

function mul(){
    var x=10;
    var y=20;
    var z=x*y;
    console.log("Mutliplication of two number is " + z);   
}
mul();
//fn with default parameters

function div(p,q=2){
var r=p/q;
console.log("Division of two number is " + r);
}
div(10);

// function declaration types

//111111111
/* function fn_name(){
    //fn body
}
fn_name(); */

// 2 
/* var fn_name=function(){
    //fn_body
}
fn_name(); */
//3 arrow funtion

/* fn_name=()=>{
    //fn_body
}
fn_name(); */

// 4th way Immediately Invoked Function Expression (IIFE)
(
   function demo(){
        //fn_body
    })();