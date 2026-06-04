
const boxes = document.querySelectorAll(".box");
const startBtn = document.querySelector("button");


console.log("Game Start!!!");


const game = {

  active : false,
  currentPlayer: playerOne.marker,
  winner: "",

  board : [null,null,null,
           null,null,null,
           null,null,null],

 

  printBoard: function(){
                console.log(`
                    ${game.board[0]} | ${game.board[1]} | ${game.board[2]}
                    ---------
                    ${game.board[3]} | ${game.board[4]} | ${game.board[5]}
                    ---------
                    ${game.board[6]} | ${game.board[7]} | ${game.board[8]}
                  `);
  },

  switchTurn: function(currentTurn){
                 currentTurn === "X" ? "O":"X";
                         console.log("The current player is ", currentTurn)},

  checkWin: function(array){
      if((game.board[0] === "X" && game.board[1] === "X" && game.board[2] === "X") ||
         (game.board[3] === "X" && game.board[4] === "X" && game.board[5] === "X") ||
         (game.board[6] === "X" && game.board[7] === "X" && game.board[8] === "X") ||
         (game.board[0] === "X" && game.board[3] === "X" && game.board[6] === "X") ||
         (game.board[1] === "X" && game.board[4] === "X" && game.board[7] === "X") ||
         (game.board[2] === "X" && game.board[5] === "X" && game.board[8] === "X") ||
         (game.board[0] === "X" && game.board[4] === "X" && game.board[8] === "X") ||
         (game.board[2] === "X" && game.board[4] === "X" && game.board[4] === "X")){

          winner = "X"
         }
         else if (
         (game.board[0] === "O" && game.board[1] === "O" && game.board[2] === "O") ||
         (game.board[3] === "O" && game.board[4] === "O" && game.board[5] === "O") ||
         (game.board[6] === "O" && game.board[7] === "O" && game.board[8] === "O") ||
         (game.board[0] === "O" && game.board[3] === "O" && game.board[6] === "O") ||
         (game.board[1] === "O" && game.board[4] === "O" && game.board[7] === "O") ||
         (game.board[2] === "O" && game.board[5] === "O" && game.board[8] === "O") ||
         (game.board[0] === "O" && game.board[4] === "O" && game.board[8] === "O") ||
         (game.board[2] === "O" && game.board[4] === "O" && game.board[4] === "O")){

          winner = "O"
         }
         else{
          let tie = false;
          //array.find( null) =>{ array === null console.log("play") "Nobody wins this round")}
         }   
  return winner;
  },
  isGameOver: function(){
    if(this.board !== null){
      console.log("gameOver")
      reset()}
      else{
        playGame(this.switchTurn)
      }
  }
                 

 };
console.log(game.printBoard);

 function Player(id,marker){
   this.id = id;
   this.marker = marker;
   this.score = 0;
 };
  
 const playerOne = new Player(1, "X");
 const playerTwo = new Player(2, "O");


 
function playGame(turn, one, two){

   // set game.active to activate.
  game.active = true;
   
  function play(){
  //push player.maker into empty slot
  
  const userInput = Number(prompt("choose a number from 0 to 8."))
   console.log(userInput);

   game.board[userInput] = currentPlayer;
    return game.printBoard();
  }play()
  
  //checkwin()
  game.checkWin(game.board)
  //switchturn()
  game.switchTurn(currentPlayer)
 // gameOver()
 game.isGameOver()
}playGame(game.currentPlayer, playerOne.marker, playerTwo.marker)

const scoreBoard = {
  printScoreboard : console.log(` Player One | Player Two , \n
                ${playerOne.score} | ${playerTwo.score}
    `)
}


function reset(){
  game.active = false;
  game.board = [null,null,null,
                null,null,null,
                null,null,null];
   playerOne.score = 0;
   playerTwo.score = 0;


}