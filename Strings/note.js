
// Js makes a object out of string . 
// Thats why we are able to perform methods on them.


// * Initialize
const mystring = 'Abc wadawdaw dd';
const mystring2 = 'ABCDWA';

const objString = new String('ARJUN');
//console.log(objString);

//////////////////////////////////////////////
// * Access 

//!console.log('A30DWA'[0]);
//!console.log(mystring2[0]);

//////////////////////////////////////////////
// * Capacity


const n = mystring.length

//////////////////////////////////////////////
// * Position


const pos = mystring.indexOf('w');
const last_pos = mystring.lastIndexOf('d');
const whole_pos = mystring.indexOf('Abc');

/////////////////////////////////////////////

// * Slicing 

const slice = mystring2.slice(4) // starting position , include 4th position.
// ABCDEFG = slice(4) => EFG
//console.log('ABCDEFG'.slice(4)); => EFG

const size_slice = mystring2.slice(1,3);  // (start pos ,end pos-1) ;
//the pointer go till before the position of ending position.
//! => (1,3) => (1,3-1) => (1,2) => (from pos [1] to pos [2]);



// from end of the string

'ABCDEF'.slice(-3) ; //* => 'DEF'


////////////////////////////////////////////
 
// * First and Last word of a full string

const mystring3 = 'ABC DEF GHI';

//first word 
const first = mystring3.slice(0,mystring3.indexOf(' ')); // => 'ABC'
// here the interating 
// pointer is going till before the position of ending pointer.


//last word 
const last = mystring3.slice(mystring3.indexOf(' '));


////////////////////////////////////////////


// Case Changing

// to Cases ;
const string4 = "acvdfHJ";

// Changing 
const lower = string4.toLowerCase();
const cap = string4.toUpperCase();

// Only First letter to capped ;
const first_cap = string4[0].toUpperCase+string4.slice(1);
                                        // slice means from position 1 it will slice the string.
//console.log(first_cap);




//Comparing emails removing spaces;
const email = ' arjun@gmail.com';
const trim_email =email.trim(); // => it will remove all the spaces


// Replacing
// it creates a new string. dosent replace the original string

const string7 = '200,75P';
// replacing [,] [p]
const replaced_string = string7.replace(',','').replace('P','R');
// this will return a whole string and then again calling
//replace method will work on the string again.
// we can use word for replacement
console.log(replaced_string);


// replace all the "the" to "okay";
const string8 = 'the main the whole';
const new_string8 = string8.replace(/the/g,'okay')


////////////////////////////////////////////////////////

//  includes

// 1) includes
const string9 = 'aA30abc';

// a word
console( string9.includes('30')); //=> true 

// startwith and endswith
console.log(string9.startsWith('aA')); // => true ;
console.log(string9.endsWith('abc')); // => true

 
//////////////////////////////////////////////////////////

// SPLIT
const string10 = "a-10-15-13";
const splited_string = string10.split('-'); // => it will return a [array]
console.log(string10,"aaaaaaaaaaaaaaaa");
console.log(1);

//////////////////////////////////////////////////////////

// JOINT 

// to apply this we have to have the [array] of strings.
const jointed_string = ['M','Arjun Tudu','wdwad'].join('+'); // => M+ArjunTudu+wdwad.
console.log(jointed_string);

