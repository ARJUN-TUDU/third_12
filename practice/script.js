//object.keys , object.values are for iterating over maps and objects;

// map we can declare this way to access it better ;  
const map1 = new Map([['name','arjun'],['age','10']]);


//maps are iterable 
for(const [k,v] of map1){
    //console.log(k,"=>",v);
}


// if we want to store the only keys and only values in 
// spread operator is the way example =>     [...arr.keys()]
//console.log(map_keys) =>Map iterator {'name','age'};
console.log([...map1.keys()])//this is the way to get keys in arr format;

const map_values = map1.values();
console.log([...map1.values()]) ;



//converting object to map format

const my_obj = {
    name : "arjun",
    age : 100 
};

//we have to pass the object in nested array format ,
// thats why we are converting the object in nested array and passing it.
const conv_map = new Map(Object.entries(my_obj));
console.log(conv_map,"answer");




/* Objects {obj} 
     
    1) all the iterating methods of objects will return an 
    ![Array]
     
    2) Objects are not iterable but to iterate :

       * Object.entries(obj) => [[k,v]] 
       * for(const [k,v] of Object.entries(obj))
    
   3) for getting values

   !   Object.keys(obj) => [keys];

   !   Object.values(obj) => [values];

   !   Object.entries(obj) => [[key,value]]

*/



/** Map [[map]]
 *  
 **  1) Maps are iterable 
 *         
 *!         for(const [k,v] of map)
 * 
 **  2) to have the keys
 *         
 *!         [...map.keys()]
 * 
 **  3) to have values
 *         
 *!         [...map.values()]
 * 
 * 
 */



/** Arrays [arr]
 * 
 **  1) Arrays are iterable
 *        
 *  
 **  2) to have keys 
 *      
 *!      [...arr.keys()]  => indexes
 * 
 **   3) to have values 
 * 
 *!      [...arr.values()];
 * 
 */