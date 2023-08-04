
const  my_resturent = {
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

//        {spread operators}
//
//       - spread operators to take array elements
//        individual elements..[1,2,3] => 1 2 3 
//       - its useful for accessing elements separately .
//       - it works on arr,map,list,string,objects;0
//       - it can be used in function parameters also





//adding the array in last of a new array;
const my_arr = [7,8,9];
const the_arr = [1,2,my_arr] // [1,2,[my_arr]];
const badNewArr = [1,2,... my_arr]; // ... operator means taking the whole array spreadingly
console.log(badNewArr); // [1,2,7,8,9]
console.log(...badNewArr); // 1 2 7 8 9 ;


// appending new element ; 
const my_list = [1,2,3];
my_list = [...my_list,100] ; 
console.log(...my_list); //  1 2 3 = three different elements
const new_list = [...my_list,5];
console.log(my_list,"<===========new_answer"); //  [1,2,3,5] ,, adding 5 to the last.


// creating a new array containing both main_menu and starter menu.
const total_menu = [...my_resturent.mainMenu,...my_resturent.starterMenu];
console.log(total_menu);


// spreading strings; 
const str = 'Jonas';
const lette = [... str ,' ', 's']; //["j","o","n","a","s","s"];
console.log(lette);//   



//adding new properties in the object ,, founder:"arjun"
const new_resturent = {...resturent,founder:"arjun"};
console.log(new_resturent); //{the whole object};


//making copy of a object and adding new properties , [name]
const copy_resturent = {...resturent};
copy_resturent.name = "baroon";
console.log(copy_resturent); // baroon,
console.log(188888888);