//A Map holds key-value pairs where the keys can be any datatype.
let person=new Map([
['name','anand'],
['age',20],
['course','web']
]);
console.log(person);
console.log(person.set('name','Vikas'));
console.log(person.get('age'));
console.log(person.delete('course'));
console.log(person.size);
//console.log(person.clear());
console.log(person.has('name'));

let res = "";
person.forEach (function(value, key) {
  console.log(res += key + ' = ' + value);
})








