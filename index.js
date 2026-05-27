const prompt = require("prompt-sync")();
const boxes = document.querySelectorAll(".box");
const startBtn = document.querySelector("button");


console.log("Game Start!!!");
console.log("PlayerX what will it be today.");

const game = {
  board : [null,null,null,
           null,null,null,
           null,null,null],

  active : false,
  currentPlayer: playerOne.marker,

  printBoard: function(){
                console.log(`
                    ${game.board[0]} | ${game.board[1]} | ${game.board[2]}
                    ---------
                    ${game.board[3]} | ${game.board[4]} | ${game.board[5]}
                    ---------
                    ${game.board[6]} | ${game.board[7]} | ${game.board[8]}
                  `);
  }
  
};
console.log(game.printBoard());

 function Player(id,marker){
   this.id = id;
   this.marker = marker;
   this.score = 0;
 };

 const playerOne = new Player(1, "X");
 const playerTwo = new Player(2, "O");


 
function playGame(turn, one, two){
  game.active = true;
}

