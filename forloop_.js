const my_object = {
    name : "arjun",
    num : 500, 
    address : 300 ,
};

const my_arrs = [1,2,3,5,6,7];

// 1) .entries() => [[properties,value]]

for(const [i,v] of my_arrs.entries()){
    //console.log(i," answer  ",v) ; 
}



// Enhanced object literals adding properties same as another object
const a1 = {
    name : "a1",
    code : 1 ,
    method : function(v){
        console.log(this.name+v);
    }
};

const a2 = {
    name : "a2", 
    code : 2 ,
    a1 ,
};

// chain_nullishing
// here we are checking if a1.method exist or not if it does then we are passing ("tudu") ?? if this dosent exist we do "method dosent exist" ; 
const p = a1.method?.("tudu") ?? "method dosent exist";


//object.entries , object.keys , object.values ; these are iterators 

