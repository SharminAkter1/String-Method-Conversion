const firstName = 'Sharmin';
const lastName = 'Akter';
const age = 20;
const str = 'Hello there my name is Nelima';
const tags = 'Web Design, Web Develompent, programming';

let val;
val = firstName + lastName;

//concatenation
val = firstName + ' '+ lastName;

//Append
val = 'Sharmin ';
val += 'Akter';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'That\'s a awesome, I can\'t wait';
//or,
val = "That's a awesome, I can't wait";

//Lenght
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

//indesOf()
val = firstName.indexOf('i');
//const firstName = 'Sharmiin'; 
//val = firstName.lastIndexOf('i');


//CharAt
  // val = firstName[1];
val = firstName.charAt('6');

//Get last char
val = firstName.charAt(firstName.length - 1);
// val = firstName.charAt(firstName.length - 2;

//Substring()
val = firstName.substring(0,4);
//  val = firstName.substring(4);

// Slice()
val = firstName.slice(0,4);
val = firstName.slice(-4);

// Spilt ()
val = str.split(' ');
val = tags.split(',');

//Replace()
val = str.replace('Nelima', 'Sharmin');

//includes()
val = str.includes('there');

console.log(val);