const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],[
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
        },
    };




// 2) 
const [gk,...fieldPlayers] = game.players[0]; // here we have to give same as arrays
//console.log(gk , fieldPlayers);

// 3)
const allPlayers = [...game.players[0],...game.players[1]];
//console.log(allPlayers);

// 4)
const players1Final = [...game.players[0],'Thiago','Cutin','Perisic'];
//console.log(players1Final);

//5)
//const team1 = game.odds.team1; 
//console.log(team1);

// 6)

// #2) 



// 1) 
const {
    odds : {team1}
} = game ; 

const show_goals= function(...players){

    const myobj = {};
    
    players.forEach((i)=>{
        let goal = 0 ;

        game.scored.forEach((k)=>{
            if(i==k){
                goal++;
            }
        })

        myobj[`${i}`] = goal ; 
    })

    console.log(myobj);
}

show_goals("Akanji","Lewandowski","Hummels");