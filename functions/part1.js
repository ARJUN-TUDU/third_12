// 1) {Default parameters}


const my_function = function(m,s){  

    //here if we pass the parameters then the closure object will get the same
    // property name as the parameters name 
    const booking2 = {
        m,
        s,
    }
    
    //console.log(booking2)
}


// 2) value vs reference

// here we are passing the a primitive type value and object 
//but inside the function only object types can be changed 


const a  = 10;
const b = { 
    name:'arjun',
    age :20 ,
}

// passing a,b => m,n
const change = function(m,n){
    m =100 ; // changing a but its a reference it will not change the actual a;
    n.name = 'tudu'; // this will change the actual object 
}
// exercise

const oneWord = function(str){    
    return str.replace(' ','').toLowerCase();
}

console.log(oneWord('abc ddeeef'));