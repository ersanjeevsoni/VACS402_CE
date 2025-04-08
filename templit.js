//template literal

//Template literals are text literals that allow for embedded expressions

var msg="Welcome to JavaScript Class";
console.log(msg);

var nameInfo="Vinay";
console.log(msg+nameInfo);

/* console.log("my name is " + nameInfo + 
    "and my mobile no is" + "welcome msg" + msg); */

// above code using template literal

console.log(` my name is ${nameInfo} and my mobile no is 8969799
                           and welcome message is ${msg}`);

     // dynamic expression
     
     var a="12";
     var b=10;
     console.log(`${a}+${b}`);
     console.log(`${a}*${b}`);
     console.log(typeof(`${a}*${b}`));

     console.log(a*b);
     console.log(typeof(a*b));

     //tagged (String) template literls
     
      function greet(strings, namee) {
        return `${strings[0]}${namee.toUpperCase()}${strings[1]}`;
    } 
    const namee = 'abhay';
    console.log(greet`Hello, ${namee}!`);

    //Escaping Backticks and Dollar Signs
    const s = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(s);

// loops 
const items = ["apple", "banana", "cherry"];
const list = `Items: ${items.map(item => `\n- ${item}`)}`;
console.log(list);



     
