const  my_resturent3 = {
    name:'Classico Italiano',
    location : 'uttarpara',
    categories:['italiana','plezzeria','organic'],
    starterMenu:['foroccia','bruschetta','garlic'],
    mainMenu:['pizza','pasta','rositto'],
    openingHours:{
        fri :{
            open:11,
            close:20
        },
        thu:{
            open:12,
            close:20,
        },
        sat:{
            open : 13,
            close : 20
        }
    },
  
    order : function(starterIndex,mainIndex) {
         
         const [meal1, meal2] = 
         [this.starterMenu[starterIndex],
         this.mainMenu[mainIndex]];
  
  
         return [meal1,meal2];
    }
  };



//accessing object two ways . notation and [''] for having dynamic property.


//----------------------------------------------------------------------------------------------------------

/*
   {rest parameters} using ... on left side

                                - three dot opeator can be used in both sides
                                - opposite of spread operators
                                  ** to make array from the elements 
                                - rest elemets must be in the last position.
*/

// here we are assiging the values by spread operator{others}
const arr3 = [1,2,3];
const [k,o,...others] = [1,2,3,4,5];//k => 1,o=>2 , others =>[3,4,5] ;
//                                    others becoms an array

 

const mystr = [1,2,3,5]; 
const [c,d,...elemets] = [1,2,3,5,6];
// c -> 1 , d -> 2 , elements -> [3,5,6];



// destructuring objects also by declaring same value
const {sat,...rest_days} = my_resturent3.openingHours;
// sat => sat , rest_days = array[all days other than {sat}];





//using ...operators in parameter of the function
const my_function3 = function(...nums){

    /*
                -nums can be accessed as array
                -all the values which are passed separately 
                will be converted into array
                -**any number of elements can be passed
                -my_array3 => [nums];
    */
    
     return nums;//-> array [1,3,5];
}



//----------------------------------------------------------------------------------------------------------

/* 
       -logical operators = [and,or];

       or=
            - it considers only real values
       and=
            -it considers [0,empty strings]
            -
       

*/

const empty = "";
const zero = 0 ;
const myint = 100 ;
const mystring = "arjun";

const my_num = empty || mystring ; // my_num = arjun ;
const my_num2 = zero ?? myint // my_num2 = 100  
console.log(my_num2);


const rest1 = {
    name : 'Shop1',
    numGuests : 0 
    
}
const rest2 = {
    name : 'Shop2',
    owner : 'SIR ji'
}

// trying to assign a property to rest1{} 
// before checking if the property is available or not 

// nullish operator
//rest1.age||=10;// either its an uassigned or zero ,in both ??= ,||= will work;


// changing owner name;

rest2.owner ||= "aarjun";
console.log(rest2.owner);

