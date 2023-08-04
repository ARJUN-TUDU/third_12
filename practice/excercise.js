//1)

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
    ]);

const myset = new Set();

for(const [k,v] of gameEvents){
    myset.add(v);
}

const answer_array = [...myset];

//console.log(answer_array);



//2)
gameEvents.delete(64);
console.log(gameEvents);


//4)

const answer_string=(half,time)=>{
    console.log(`${half} scroed in ${time} : goal`)
}

for(const [k,v] of gameEvents){
   if(v=='GOAL'){
      k<=45 ? answer_string('First Half',k) : answer_string('Second Half',k);
   }
}


const camelCase = function(str){

     const both_strs = str.split('_');
     const [first,second] = both_strs ; 

     return first.toLowerCase() + second[0].toUpperCase() + second.slice(1);

}

const count_say = function(str){
      
    const map = new Map();

    
}