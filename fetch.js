const url="https://fakestoreapi.com/products/1";
const option={}
const pr=fetch(url, option);
console.log(pr);

let successCB=(res)=>{
 //console.log("Data fatched Successfuly", res);
 const pr2=res.json();
pr2.then((data)=>console.log("Data Success",data));
 
}

let errorCB=(res)=>{
    console.log("Data Failed",res);
}
pr.then(successCB).catch(errorCB);

/* const result=(data)=>{
    console.log("Data Success",data);
    
} */