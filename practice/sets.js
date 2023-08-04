
// to store unique values 


//way of initializing the set
const my_set = new Set([]);
const my_set2 = new Set("arjunnn");


// it will make a unique list 
my_set.add("hikakak");
my_set.add("holululu");



//find => true or false 
// its only method for check
my_set.has("the_string");


//looping 

for(const i of my_set){
    //console.log(i);
}


//converting arrays to set ; 

const my_arr = ["a","b","a","d"];

const my_set3 = new Set(my_arr);
console.log(my_set3,"<=========");//set object output.

const new_arr_list = [...new Set(my_arr)];
console.log(new_arr_list,"<=========");//array output.


const my_obj6 = new Set([1,2,3,5,6,66,77,77]);
console.log(my_obj6);