// higher and lower order 

//!   1) First-class functions


/**
          first class means that a function can be used as 
 *        variable or proerties
 *        
 *        1) functiions can be passed in form of arguments
 *        2) we can return functions from functions.
 *        3) call methods on functions.
 */







//!  2)   Higher Order Functions
           
// *      Parent Child Relationship between outer and inner function
// *      that inner function can be returned.


//!       Example

const show = (x) =>{
   console.log(x);
}

const parent = function(){
   
    let arr = [1,2,3];
    
// here show is called in inner side of the function.
    arr.forEach((i)=>{
        show(i);
    })

}



/*  

          
1) cause functions can be used as values 

          2) we can return a function within the function 
          
          3) call back functions are child of 



*/  


///////////////////////////////////////////////////////////////


// Replace all the spaces ;

const replace = function(str) {

    return str.replace(/ /g,'').toLowerCase();

}

// First letter to be capital letter 

const first_letter_capital = function(str){

    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase().replace(/ /g,'');
}

////////////////////////////////////////////////////////////////

