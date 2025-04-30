//callback
/* 
function display(some){
    console.log(`Additon of tow number ${some}`);
    
}

function calculation(a,b){
  let sum=a+b;
display(sum);
}
calculation(4,6); */
/* let result=calculation(3,5);
display(result); */

//using callback

function display(some){
    console.log(`Additon of tow number ${some}`);
    
}
function calculation(a,b,cb){

 let sum=a+b;
 cb(sum);
}
calculation(3,5,display);

function first(){
    console.log("first");
    
}
/* function second(){
    console.log("second");
    
} */
function third(){
    console.log("third");
   
}
first();
//setTimeout(second,2000);
setTimeout(()=>console.log("Seconddd"),2000);

third();



