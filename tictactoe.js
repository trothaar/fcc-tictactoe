$(document).ready(function(){
// Default human player is X; default computer player is O
var humanTurn = "X";
var computerTurn = "O";
// Keeps track of whether a square is free or occupied; # indicates a free spot
var spots = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
// Keeps track if it is the computer's or human's turn
// False if human's turn; true if computer's turn
var gameOn = false;
// Keeps track of the number of total spots; max is 9
var count = 0;

// Reset the game
function reset(){
  console.log("Resetting ...");
  spots = ["#", "#", "#", "#", "#", "#", "#", "#", "#"]; // Reset array
  count = 0; // Reset count
  $(".spot").text(""); // Remove X's and O's from board; replace with nothing
  gameOn = false;
}

// Change human's humanTurn to X and computer's humanTurn to O
$("#turnX").click(function(){
  humanTurn = "X";
  computerTurn = "O";
  $("#turnO").removeClass("btn-primary"); // Hide Bootstrap btn-primary class to disable button
  $("#turnX").addClass("btn-primary");
  reset();
});

// Change human's humanTurn to O and computer's humanTurn to X
$("#turnO").click(function(){
  humanTurn = "O";
  computerTurn = "X";
  $("#turnX").removeClass("btn-primary"); // Hide Bootstrap btn-primary class to disable button
  $("#turnO").addClass("btn-primary");
  reset();
});

// Populate board with X's and O's
$(".spot").click(function(){
  var slot = $(this).attr("id");
  humansMove(humanTurn, slot);
});

// Human plays
function humansMove(humanTurn, id){
  //var spotTaken = $("#" + id).text(); // concatenate the hashtag with the appropriate ID# being passed in
  if(spots[id] === "#"){ // Check array to see if spot is taken
    count ++;
    spots[id] = humanTurn;
    $("#" + id).text(humanTurn);
    winCondition(spots, humanTurn);
    if(gameOn===false){
      computersMove();
      winCondition(spots, computerTurn);
    }
  }
}

// Computer Plays
function computersMove(){
  var gameOn = false;
  while(gameOn === false && count < 10){
    // Generate computer random humanTurn
    var computerSlot = (Math.random()*10).toFixed();
    //var move = $("#"+computerSlot).text();
    if(spots[computerSlot] === "#"){ // Check if spot is free
      $("#"+computerSlot).text(computerTurn); // If so, get ID of spot & populate it
      spots[computerSlot] = computerTurn;
      gameOn = true; // Send game back to human
    }
  }
}

function winCondition(turnArray, currentTurn){
  // Case 1: All spots in top row
  if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn){
    //gameOn = true;
    alert("Player " + currentTurn + " wins!");
    reset();
 // Case 2: All spots in middle row
  }else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn){
    //gameOn = true;
    alert("Player " + currentTurn + " wins!");
    reset();
  // Case 3: All spots in bottom row
}else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn){
    //gameOn = true;
    alert("Player " + currentTurn + " wins!");
    reset();
  // Case 4: All spots in left column
}else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn){
      //gameOn = true;
      alert("Player " + currentTurn + " wins!");
      reset();
 // Case 5: All spots in middle column
}else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn){
      //gameOn = true;
      alert("Player " + currentTurn + " wins!");
      reset();
 // Case 6: All spots in right column
}else if(turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn){
      //gameOn = true;
      alert("Player " + currentTurn + " wins!");
      reset();
 // Case 7: Top L to Bottom R diagonal
}else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn){
      //gameOn = true;
      alert("Player " + currentTurn + " wins!");
      reset();
 // Case 8: Top R to Bottom L diagonal
}else if(turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      alert("Player " + currentTurn + " wins!");
      reset();
// Case 9: No spots left but no winner; draw
}else if(!(turnArray.includes("#"))){
  //gameOn = true;
  alert("Match draw - try again.");
  reset();
 // Default
}else{
  gameOn = false;
}
}

});
