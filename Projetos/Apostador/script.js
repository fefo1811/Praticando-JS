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
      ],
      [
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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  // Coding Challenge #1

/**
 * 1. Create one player array for each team (variables 'players1' and 'players2')
 * @players1 = Bayern Munich
 * @players2 = Borussia Dortmund
 */

const [ players1, players2 ] = game.players;

/**
 * 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
 */

const [ gkBayern, ...fieldPlayersBayern ] = players1;
const [ gkBorussia, ...fieldPlayersBorussia ] = players2;

// console.log("======= BAYERN =======");
// console.log(gkBayern);
// console.log(fieldPlayersBayern);
// console.log("======== BORUSSIA ========");
// console.log(gkBorussia);
// console.log(fieldPlayersBorussia);



/**
 * 3. Create an array 'allPlayers' containing all players of both teams (22 players)
 * Extraindo os valores dos jogadores dos dois times com operador SPREAD e armazenando numa outra variável com operador REST 
 */
const allPlayers = [ ...players1, ...players2 ];
// console.log(allPlayers);



/**
 * 4 . During the game, Bayern Munich (team 1) used 3 substitute players. So create  a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho', and 'Perisic' 
 */

const players1Final = [ ...players1, 'Thiago', 'Coutinho', 'Perisic' ];
// console.log(players1Final);

/**
 * 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
 */
const { team1, x: draw, team2 } = game.odds;
// console.log(draw);

/**
 * 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in)
 */

const printGoals = (...players) => {
  console.log(`${players.length} goals were scored`);
};

// printGoals(...game.scored);
// printGoals('Davi', 'Felipe', 'Valentin');

/**
 * 7. The team with the lower odd is more likely to win.
 * Print to the console which teams is more likely to win, WITHOUT using an if/else statement or the ternaty operator
 */

//team1 < team2 && console.log('Team 1 win'); // --> Resultados
//team1 > team2 && console.log('Team 2 win');


  // Coding Challenge #2

/**
 * 1. Loop over the game.scored array and print each player name to the console, along with the goal number
 */
for (const [ i, playerName ] of game.scored.entries()) {
  // console.log(`Goal ${i + 1}: ${playerName}`);
}

/**
 * 2. Use a loop to calculate the average odd and log it to the console 
 */
let numeros = 0;

for ( let valor of Object.values(game.odds) ) {
  numeros += valor;
}

// console.log((numeros / 3).toFixed(2));

/**
 * 3. Print the 3 odds to the console, but in a nice formatted way
 */

for ( const [ team, odd ] of Object.entries(game.odds) ) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;


  console.log(`Odd of ${teamString}: ${odd}`);
}