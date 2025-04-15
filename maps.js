let info=new Map([
    ['name',"John"],
    ['mob',979789897],
    ['Email',"john123@gmail.com"],
    ['age',23]
]);
//console.log(info);

//set or modify the key value

//console.log(info.set('name','Alex'));
//get method to get the keys value
console.log(info.get('age'));

//delete keys of info object
console.log(typeof(info));
console.log(info.delete('Email'));

// to check , key is available or not

console.log(info.has('name'));




