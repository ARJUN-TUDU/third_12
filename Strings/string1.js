
// split  (to split the string in + strings cuz it consists a lot)
const string11 = "a+b+c+d";
const splited_String = string11.split('+') // => ['a','b','c','d'];


// joins
const name_words = ['ar','jun','tudu'];
const jointed_string = name_words.join('-'); //=> ar+jun+tudu;
console.log(['ar','jun','tudu'].join('+')); 
console.log(1);


// ex   make the first words capital 
const string12 = 'arjun tudu zzz';

const change = function(str){ 

    const ans = [];
    const splited_str = str.split(' ');

    for(const i of splited_str){
        const the_str = i[0].toUpperCase()+i.slice(1);
        ans.push(the_str);
    }

    console.log(ans.join(' '));

}

const change_replace_method = function(str){
   
    const ans = [];
    const each = str.split(' ');
    for(const i of each){

        // => here the replace method takes(position,and upperCase);
        const the_str = i.replace(i[0],i[0].toUpperCase());
        ans.push(the_str);
    }
  
    console.log(ans.join(' '));

}

change_replace_method('arjun tudu');

///////////////////////////////////////////////

// padding , {reference tutorial};
// to add chars in before and end of the string.
const string15 = 'arjun';
const padded_string = string15.padStart(10,'+');// 10 => is total number of needed string
                                                // + => the empty space in needed string will be replaced by '+';
                                                
const mask = function(num){ 
    
    const num_str = num+'';

    const the_str = num_str.slice(12);

    console.log(the_str.padStart(16,'*'));
    
}

/////////////////////////////////////////////

// REPEAT;
const string20 = "abc";
const repeated_str = string20.repeat(5); // 5 times => single string;


