$(document).ready(function(){

// Default human player is X; default computer player is O
var turn = "X";
var computerTurn = "O";
// Array to store values that we will check later for a winner
var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
// Keeps track if it is the computer's turn
var gameOn = false;
// Keeps track of computer's turn to prevent indefinite loop
var count = 0;

// Used to break while loop
function computerTurnFn(){
  var taken = false;
  while(taken === false && count != 5){
    // Generate computer random turn
    var computersMove = (Math.random()*10).toFixed();
    var move = $("#"+computersMove).text();
    if(move === "#"){
      $("#"+computersMove).text(computerTurn);
      taken = true;
      turns[computersMove] = computerTurn;
    }
  }
}

// Change human's turn to X and computer's turn to O
$("#turnX").click(function(){
  turn = "X";
  computerTurnFn = "O";
  $("#turnO").removeClass("btn-primary"); // Hide Bootstrap btn-primary class to disable button
  $("#turnX").addClass("btn-primary");
  reset();
});

// Change human's turn to O and computer's turn to X
$("#turnO").click(function(){
  turn = "O";
  computerTurn = "X";
  $("#turnX").removeClass("btn-primary"); // Hide Bootstrap btn-primary class to disable button
  $("#turnO").addClass("btn-primary");
  reset();
});

function playerTurn(turn, id){
  var spotTaken = $("#" + id).text(); // concatenate the hashtag with the appropriate ID# being pased in
  if(spotTaken === "#"){
    count ++;
    turns[id] = turn;
    $("#" + id).text(turn);
    winCondition(turns, turn);
    if(gameOn===false){
      computerTurnFn();
      winCondition(turns, computerTurn);
    }
  }
}

function winCondition(turnArray, currentTurn){
  // Case 1: All spots in top row
  if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn){
    gameOn = true;
    reset();
    alert("Player " + currentTurn + " wins!");
 // Case 2: All spots in middle row
  }else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn){
    gameOn = true;
    reset();
    alert("Player " + currentTurn + " wins!");
  // Case 3: All spots in bottom row
}else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
    gameOn = true;
    reset();
    alert("Player " + currentTurn + " wins!");
  // Case 4: All spots in left column
}else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
 // Case 5: All spots in middle column
}else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
 // Case 6: All spots in right column
}else if(turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
 // Case 7: Top L to Bottom R diagonal
}else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
 // Case 8: Top R to Bottom L diagonal
}else if(turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins!");
// Case 9: No spots left but no winner; draw
}else if(!(turnArray.includes("#"))){
  gameOn = true;
  reset();
  alert("Match draw - try again.");
 // Default
}else{
  gameOn = false;
}
}

// Populate board with X's and O's
$(".tic").click(function(){
  var slot = $(this).attr("id");
  playerTurn(turn, slot);
});

function reset(){
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"]; // Reset array
  var count = 0;
  $(".tic").text("#");
  gameOn = false;
}

});
