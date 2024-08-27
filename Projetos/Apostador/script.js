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
const [ ...allPlayers ] = [ ...players1, ...players2 ];
// console.log(allPlayers);