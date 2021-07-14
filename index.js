// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */
const players = data.getPlayers();

function getData() {
  players.forEach((player, index) => {
  console.log(`PLAYER ${index + 1}\nNAME: ${player.name}\nLASTNAME: ${player.lastname}\nPOSITION: ${player.position.charAt(0).toUpperCase() + player.position.slice(1)}`)
  });
};
// getData()


/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered A-Z
 */
function sortNames(){
  const names = []
  for (let player of players){
      names.push(player.name)
};
  names.sort();
  console.log(names);
};
// sortNames()


/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.61
 */
function getAverageGoals() {
  let totalScoringChance = 0
  for (player of players){
      totalScoringChance += parseInt(player.scoringChance)
}
  totalScoringChance = totalScoringChance/100;
  console.log(`Goals per match:`, totalScoringChance);
};
// getAverageGoals()


/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name
 */
function findByName(searchname){
  var found = players.find(function(player, index) {
    return player.name.toLowerCase() === searchname.toLowerCase()
});
  console.log(found.position);
}
// findByName("lucas")
// findByName("Erik")
// findByName("LucAs")