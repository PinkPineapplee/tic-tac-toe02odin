
const boxes = document.querySelectorAll(".box");
const startBtn = document.querySelector("button");


console.log("Game Start!!!");
console.log("PlayerX what will it be today.");

const game = {

  active : false,
  currentPlayer: playerOne.marker,

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

  checkWin: function(){
             let winner = true;

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


 
function playGame(turn){
   // set game.active to activate.
  game.active = true;
  
  //push player.maker into empty slot
  console.log("choose a number from 0 to 8.");

 // printboard()
 game.printBoard()
  //checkwin()
  game.checkWin()
  //switchturn()
  game.switchTurn()
 // gameOver()
 game.isGameOver()
}

const scoreBoard = {
  printScoreboard : console.log(` Player One | Player Two , \n
                ${playerOne.score} | ${playerTwo.score}
    `)
}
