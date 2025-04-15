
//rest parameters
/* function add(a,b,...param){
    console.log(a+b);
    console.log(param);
    let sum=0;
    for(let i of param){
        sum+=i
    }
    console.log(sum);
}
add(1,2,34,34,3,4,35,45,23,3,4,3,3,22,45,43,6,8);
 */
//with out spread parameters

const arr = [1, 3, 24, 3, 5, 4, 5];
let min = arr[0];

for (let i of arr) {
    if (i < min) {
        min = i;
    }
}
//console.log("Minimum number is " + min);
//console.log(Math.min(arr)); // NaN

//  spread parameters

//console.log(Math.min(...arr));

//copying p1 object or making clone using spread operator

let p1={
    name:"Abahy",
    age:21,
    city:"Delhi"
}
console.log(p1);

let clonep1={...p1};
console.log(clonep1);


// combining p1 and p2 
/* 
let p1={
    name:"Abahy",
    age:21,
    city:"Delhi"
}
console.log(p1);

let p2={
    
    course:"web",
    fees:4000,
    Isdone:false
}
console.log(p2);

const updatep={...p1,...p2};
console.log(updatep);
 */


