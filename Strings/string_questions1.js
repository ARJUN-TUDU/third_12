//1 
const q_3 = function(str){
    const splited_str = str.split(' ');
    console.log(splited_str);
}

//4 
/*Write a JavaScript function to extract a specified number of characters from a string.
            Test Data :
            console.log(truncate_string("Robin Singh",4));
            "Robi"
*/
const q_4 = function(str,k){
    const rem = str.slice(0,1)
    console.log(rem);
}

//5

/**
 * Write a JavaScript function to convert a string in abbreviated form. Go to the editor
            Test Data :
            console.log(abbrev_name("Robin Singh"));
            "Robin S."
 */
const q_5 = function(str){
   const splited_str = str.split(' ');
   const result =splited_str[0]+" "+ splited_str[1].slice(0,1).toUpperCase()+".";
   
   console.log(result)
   
}

//6

/* 
  Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
            Test Data :
            console.log(protect_email("robin_singh@example.com"));
            "robin...@example.com"

*/ 


const q_6 = function(str){

    const splited_str = str.split("@");
    const first_str = splited_str[0].split('_');
    const first_dots = first_str[0].padEnd(first_str.length+5,'.');
    const result = first_dots+"@"+splited_str[1];
    console.log(result);
   
}

//7

/*
Write a JavaScript function to parameterize a string. Go to the editor
            Test Data :
            console.log(string_parameterize("Robin Singh from USA."));
            "robin-singh-from-usa"

*/ 

const q_7 = function(str){
    
    const arr = [];
    
    const  result = str.split(' ');
    
    let sum = "";
    for(const i of result){
       arr.push(i.toLowerCase());
    }
    
    console.log(arr.join('-'));
    
}

//8

/*
    Write a JavaScript function to capitalize the first letter of a string. Go to the editor
                Test Data :
                console.log(capitalize('js string exercises'));
                "Js string exercises"

*/ 


const q_8 = function(str){

   const res = str[0].toUpperCase() + str.slice(1);
   console.log(res);
   
}


//9

/*
   Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
                Test Data :
                console.log(capitalize_Words('js string exercises'));
                "Js String Exercises"


*/ 


const q_9 = function(str){
    
    const arr = [];
    const splited_str = str.split(' ');
    
    for(const i of splited_str){
        
        const the_str = i[0].toUpperCase()+i.slice(1);
        arr.push(the_str);

    }

    const res = arr.join(' ');
    console.log(res);

    
}

//10

/*
    Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
        Test Data :
        console.log(swapcase('AaBbc'));
        "aAbBC"
*/


const q_10 = function(str){
    
    let ans = '';
    
    for(let i = 0 ; i < str.length ; i ++){
         
        if(str[i] == str[i].toUpperCase()){
            ans = ans + str[i].toLowerCase();
        }
        if(str[i] == str[i].toLowerCase()){
            ans = ans + str[i].toUpperCase();
        }

     }

     console.log(ans);

}


//11 

/*
Write a JavaScript function to convert a string into camel case.Go to the editor
Test Data :
        console.log(camelize("JavaScript Exercises"));
        console.log(camelize("JavaScript exercises"));
        console.log(camelize("JavaScriptExercises"));
        "JavaScriptExercises"
        "JavaScriptExercises"
        "JavaScriptExercises"


*/

const q_11 = function(str){
    
    let  res = [];
    const both = str.split(' ');
    let ans = '';

    for(const i of both){

        let str = '';
        str = i[0].toUpperCase()+i.slice(1);
        res.push(str);

    }


    ans = res.join('');
    

    console.log(ans);
    
}

//12

/*
Write a JavaScript function to uncamelize a string. Go to the editor
Test Data :
        console.log(uncamelize('helloWorld'));
        console.log(uncamelize('helloWorld','-'));
        console.log(uncamelize('helloWorld','_'));
        "hello world"
        "hello-world"
        "hello_world"


*/



const q_12 = function(...str){
    
    let res = '';
    let res2 = ''; 
    for(let i = 0 ; i < str[0].length ; i++){
       if(str[i] == str[i].toUpperCase()){
         res = res + str[1];
         break;
       }
       else{
          res = res + str[i];
       }
    }

    

    

     
}

for(int = q_9; u M 10 ; i++) 

//----------------------------------------------------------------

q_12('helloWorld','-');


const str = 'abC d';
str.replace(/ /g,' p');
console.log(str);