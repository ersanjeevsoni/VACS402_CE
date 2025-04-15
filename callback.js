//JavaScript functions are executed in the sequence they are called
/* 
function myDisplayer(some) {
    console.log(some);
    
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  myFirst();
  mySecond(); */

  // You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result

  // Option 1: Using a variable
  function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);

  //Option 2: Direct call

  //Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer)

/*   function myDisplayer(some) {
    console.log(`addtion of two number is ${some}`);
  }
  
  function myCalculator(a, b) {
    let sum = a + b;
    return sum;
  }
  
  myDisplayer(myCalculator(6, 3)); */

  //option 3: you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer)

 /*  function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 9); */

  //https://www.telerik.com/blogs/callbacks-javascript

  //https://www.freecodecamp.org/news/how-to-use-callback-functions-in-javascript/
  
/* function display(dis){
    console.log(dis);
    
}
function calculation(a,b){
    let c=a+b;
    return c;
}
let result1=calculation(5,6);
display(result1); */ 
// in above example, called two function to display the result

//or can follow this one
/* function display(dis){
    console.log(dis);    
}
function calculation(a,b){
    let c=a+b;
    display(c);
}
calculation(5,96); */
// in the above example cannot prevent the calculator function from displaying the result.

// so the solution is callback funtion..

/* function display(dis){
    console.log(dis);    
}
function calculation(a,b,cb){
    let c=a+b;
    cb(c);
}
calculation(5,96,display); */
//In the example above, myDisplayer is a called a callback function.

//It is passed to myCalculator() as an argument.

function display(dis){
    console.log(dis);    
}
function calculation(a,b,cb){
    let c=a+b;
    cb(c);
}
calculation(5,6,(result)=>{
    setTimeout(()=>display(result),2000);
});
