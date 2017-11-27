//GLOBALS
var cards = 53,
    reds = 26,
    blacks = 26,
    joker = 1,
    nrOfMoreRedCards = 3,
    redProbLimit = 0.7,
    done = false,
    win = false,
    cash = 1000,
    ul = document.getElementById("cardList");

function playGame(){
  while(cards > 0 && !done){
    //If it is the last card we have to click it
    if(cards == 1){
      click();
    }
    //First draw a card
    var card = drawCard();
    //Then add the result to a list
    //If the probability is high enough click
    if(shouldIClick(nrOfMoreRedCards)){
      click();
    }
  }
  if(win){
    cash += 100;
    return "win";
  }
  else{
    cash -= 100;
    return "loss";
  }
}

function drawCard(){
  var randomCard = Math.random();
  //Check if it is a joker
  if(joker !== 0){
    var probJoker = joker / cards;
    if(randomCard < probJoker){
      joker--;
      cards--;
      return "joker";
    }
  }
  //Check if it is a red card
  var probRed = reds / cards;
  cards--;
  if(randomCard < probRed){
    reds--;
    return "red";
    }
  //Otherwise it has to be a black card
  else{
    blacks--;
    return "black"; 
  }
}
/**
 * Checks whether we should click or not
 * @param {*int} nrOfMoreRedCards How many more red cards is needed before we should click 
 */
function shouldIClick(nrOfMoreRedCards){
  var probRed = reds / cards;
  if(probRed > redProbLimit){
    return true;
  }
  return false;
}

function click(){
  var card = drawCard();
  if(card === "red"){
    win = true;
  }
  else{
    win = false;
  }
  done = true;
}

function reset(){
  cards = 53;
  reds = 26;
  blacks = 26;
  joker = 1;
  done = false;
  win = false;
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);    
  }
}

function redVibes(){
  var timesToRun = 1000;
  var stats = {
    wins: 0,
    losses: 0
  }
  for(var i = 0; i < timesToRun; i++){
    if(cash <= 0) break;
    reset();
    var result = playGame();
    if(result === "win"){
      stats.wins++;
    }
    else{
      stats.losses++;
    }
  }

  document.getElementById("red-vibes").style.display = "inline-flex";
  document.getElementById("cerebral-cereal").style.display = "none";
  document.getElementById("student-division").style.display = "none";

  document.getElementById("announcement").innerHTML = `Wins = ${stats.wins}, Losses = ${stats.losses}`;
  document.getElementById("cash").innerHTML = `Currency: ${cash}$`;
  
}

