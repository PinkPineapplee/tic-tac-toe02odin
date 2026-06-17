

const boxes = document.querySelectorAll(".box");
const startBtn = document.querySelector("button");
const commentBar = document.createElement("modal");

let isClicked= false;


 //make UI board
const container= document.querySelector(".container");
for (let i = 1; i <= 9; i++){
  const div = document.createElement("div");
  div.className = "box";
  div.id = i;
  container.appendChild(div);
 
}

console.log("Game Start!!!");

// make UI markers
const letterX = document.createElement("span");
letterX.textContent = "X";
letterX.classList.add("mark", "x");

const letterO = document.createElement("span");
letterO.textContent = "O";
letterO.classList.add("mark", "o");


// make player constructor
function Player(id,marker,ui){
   this.id = id;
   this.marker = marker;
   this.score = 0;
   this.ui = ui;
 };
  
 const playerOne = new Player(1, "X", letterX);
 const playerTwo = new Player(2, "O", letterO);


const game = {

  active : false,
  currentPlayer: playerOne.marker,
  piece: letterX,
  winner: "",

  board : [null,null,null,
           null,null,null,
           null,null,null],

 

  printBoard: function(num=0){
    
                console.log(`
                    ${game.board[0]} | ${game.board[1]} | ${game.board[2]}
                    -------------------
                    ${game.board[3]} | ${game.board[4]} | ${game.board[5]}
                    -------------------
                    ${game.board[6]} | ${game.board[7]} | ${game.board[8]}
                  `);
         
               
                     container.addEventListener("click",(event)=>{ 
                      if(event.target.matches(".box")){
                      let pick = Number(event.target.matches(".box").id);
                      console.log("Picked box id =", pick);
                       isClicked = true;
                       num = pick - 1; 
                   } })
                   
                  
                                     
    return num 
  },


  switchTurn: function(currentTurn,currentLetter){
                 currentTurn === playerOne.marker ? currentTurn = playerTwo.marker: currentTurn = playerOne.marker;
                 this.currentPlayer = currentTurn;
                 console.log("The current player is ", currentTurn )
                       
                //change the currentPlayers ui in board
                currentLetter === letterX ? currentLetter = letterO : currentLetter = letterX;
                this.piece = currentLetter;
                console.log( "and he plays with ", currentLetter.textContent)
                        },

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
         
          const findNull = array.find(element => element === null);

            if ( findNull === null){
             
               console.log("game is in progress ...")
              //switchturn()
              this.switchTurn(game.currentPlayer, letterX);
            } else{
              console.log("All the game slots are full! it is a tie.");
            // gameOver()
              this.isGameOver();
            }
            winner = "null";
          };
            
  return winner;
  },

  isGameOver: function(nul){
    
      console.log("gameOver!!!")
      reset();
      
  }                
 }
game.printBoard();

 

 
function playGame(turn, userInput, div){

   // set game.active to activate.
  game.active = true;

  //push player.maker into empty slot
  console.log("pick a number from 0 to 8" , userInput);

   //write a condition to not overwrite values on the second round of game.
   if (game.board[userInput] === null){
    game.board[userInput] = turn;
   
   }else{
    console.log("this slot is already taken") 
   }
  boxes[userInput].textContent = div;
  boxes[userInput].classList.add(div.textContent)
//    boxes.forEach(box => {
//     if(isClicked === true){
//        box.appendChild(game.piece)
//        box.classList.add(game.piece.textContent)
//       }
//     return  
// })

  //checkwin()
  game.checkWin(game.board);
    return game.printBoard();
   
}


const scoreBoard = {
  print : console.log(`Player One | Player Two 
  -------------------
${playerOne.score}        |        ${playerTwo.score}
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
  }else{
    console.log("nobody wins this round!")
  }
 }


 startBtn.addEventListener("click", ()=>{

      playGame(game.currentPlayer, game.printBoard(),game.piece)
 })