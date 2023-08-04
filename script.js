 const  resturent = {
  name:'Classico Italiano',
  location : 'uttarpara',
  categories:['italiana','plezzeria','organic'],
  starterMenu:['foroccia','bruschetta','garlic'],
  mainMenu:['pizza','pasta','rositto'],

  order : function(starterIndex,mainIndex) {
       
       const [meal1, meal2] = 
       [this.starterMenu[starterIndex],
       this.mainMenu[mainIndex]];


       return [meal1,meal2];
  }
};
//retriving the data by [drestructuring the data]; 
// reciving the elements separatedly;

const arr = [1,2,3];
const [x,y] = arr; 
const [a, ,b] =arr;

//`console.log(x,y);// [1,2];
//console.log(a,b,"-answer"); // [1,3] // these can be swapped  


//ordering practice
const [first,second] = resturent.order(0,1); // forcoccia,pasta


//practice 2; 

const nested = [2,4,[5,6]]; 
const [ele1, ,ele2]= nested;



// getting object values ;
// here we have to specify the {same name} as a object ;

const {name,mainMenu} = resturent ;
// console.log(name,mainMenu);


// to change the property titles 

      const {
          mainMenu : menu , // putting the "mainMenu" name to "menu"
      } = resturent ;

     // console.log(menu);


// iterating through the object 
for(const key in resturent){
    if(key == 'mainMenu'){
      console.log(resturent[key][0]);
    }
}


















