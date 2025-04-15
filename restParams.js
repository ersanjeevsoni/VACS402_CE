function add(a,b, ...params){
console.log(a+b);
console.log(params);
console.log(params.length);

let sum=0;
for(let i of params){
    sum+=i;
} 
console.log(`Addition of params is ${sum}`);
console.log(Math.min(...params));
}
add(3,4,4,5,6,7,4,6,8,9,4,9,43,3,4,5,67,78,4,6,34,5,54,5,5,1)

//spread operator/parameter

/* let num=[2,3,4,5,6,6,6,63,5,6];
console.log(Math.min(...num));

// copying array
let num2=[...num];
console.log(`Copied array ${num2}`);

//merging array with num
let num3=[45,66,77,88];
let updatedateArr=[...num, ...num3]
console.log(updatedateArr);
 */

let p1={
    name:"Ajay",
    age:23,
    city:"Delhi"
}
//copying object p1 to p2
let p2={...p1};
console.log(p2);
console.log(`copied keys from p1 ${p2.name}`);

let p3={
    mob:46456,
    Email:"ajay123@gmail.com",
     course:"Btech",
     isComplted:false
}

let updatedp1={...p1, ...p3};
console.log(updatedp1.course);
console.log(p1.course);





