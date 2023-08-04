

// {scopes}


/*  

   -[local variables] cant be accesed outside
   -[global_variables] can be accesed anywhere.

   -[local variables] got deleted when functions completed.
   -[global_variable] got deleted when browser closed

   - ** functions are also variables

*/





/*  {blocked scope}
        - [var,let,const] inside the function 
          cannot be used outside of function; 
*/
const blocked_scope = () =>{
    let a = 10 ;
    
}



blocked_scope();


const global_variable = 15 ; // outside brackets ,
//                              can be used anywhere in the browser .







// here the a variable can be accessed outside 
// if the function itself called before..

function_check();

console.log(a);

const function_check = ()=>{
    a = 10 ;
}

// this is the way a blocked scope variable can be accessed outside



