
const boxes = document.querySelectorAll(".box");
const startBtn = document.querySelector("button");


console.log("Game Start!!!");

function Player(id,marker){
   this.id = id;
   this.marker = marker;
   this.score = 0;
 };
  
 const playerOne = new Player(1, "X");
 const playerTwo = new Player(2, "O");



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
      if((array[0] === "X" && array[1] === "X" && array[2] === "X") ||
         (array[3] === "X" && array[4] === "X" && array[5] === "X") ||
         (array[6] === "X" && array[7] === "X" && array[8] === "X") ||
         (array[0] === "X" && array[3] === "X" && array[6] === "X") ||
         (array[1] === "X" && array[4] === "X" && array[7] === "X") ||
         (array[2] === "X" && array[5] === "X" && array[8] === "X") ||
         (array[0] === "X" && array[4] === "X" && array[8] === "X") ||
         (array[2] === "X" && array[4] === "X" && array[4] === "X")){

          winner = "X";
          console.log("player One wins this round")
         }
         else if (
         (array[0] === "O" && array[1] === "O" && array[2] === "O") ||
         (array[3] === "O" && array[4] === "O" && array[5] === "O") ||
         (array[6] === "O" && array[7] === "O" && array[8] === "O") ||
         (array[0] === "O" && array[3] === "O" && array[6] === "O") ||
         (array[1] === "O" && array[4] === "O" && array[7] === "O") ||
         (array[2] === "O" && array[5] === "O" && array[8] === "O") ||
         (array[0] === "O" && array[4] === "O" && array[8] === "O") ||
         (array[2] === "O" && array[4] === "O" && array[4] === "O")){

          winner = "O";
          console.log("player two wins this round")
         }
         else{
          let tie = false;
          const findNull = array.find((element) => {
            if ( element === null){
               playGame()
            } else{
              console.log("nobody wins this round");
              this.isGameOver();
            }
          });
         }   
  return winner;
  },
  isGameOver: function(){
   
      console.log("gameOver")
      reset()
      
  }
                 

 };
console.log(game.printBoard);

 

 
function playGame(turn){

   // set game.active to activate.
  game.active = true;
   
  function play(){
  //push player.maker into empty slot
  
  const userInput = Number(prompt("choose a number from 0 to 8."))
   console.log(userInput);

   game.board[userInput] = turn;
    return game.printBoard();
  }play()
  
  //checkwin()
  game.checkWin(game.board)
  //switchturn()
  game.switchTurn(turn)
 // gameOver()
 game.isGameOver()
}

const scoreBoard = {
  print : console.log(` Player One | Player Two , \n
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

 function updateScoreBoard(){
  let win = game.checkWin;
  if(win === "X"){ 
    playerOne.score++ 
    scoreBoard.print;
  }else if (win = "O"){
    playerTwo.score++
    scoreBoard.print;
  }

  
 }