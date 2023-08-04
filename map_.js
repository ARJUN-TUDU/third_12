
//1_ initializing
const mymap = new Map();



mymap.set('a','1005');
mymap.set('b',300),
mymap.set('c',500);
mymap.set('a',50);
//or
const rough_map = [['a',1],['b',2]];

//we have to initialize the array in nested array format
//to access the elements in a better way.
const mymap2 = new Map
(
[["name","arjun"],
["age","30"],
[true,'true answer'],
[false,'false answer']]
);


// 2) we can convert object to maps 
const my_object5 = {
    name : "arjun",
    age : 10 ,
}

//converting , we are passing the values [['k'],['v']] in nested array format.
const my_map5 = new Map(Object.entries(my_object5));


//Map are iterables 
for (const [k,v] of my_map5){

    //console.log(k,"=>",v);

}

// accessing the values with the key false or true ; 
for(const [k,v] of mymap2){
    if(k){
        console.log(v);
    }
    if(!k){
        console.log(v);
    }
}


//convert map => array 

const array5 = [...mymap2.keys()];
console.log(array5);




console.log([...rough_map.values()],"rough map");

const arra6 = [1,2,3,5,6];
console.log([...arra6.values()]);

