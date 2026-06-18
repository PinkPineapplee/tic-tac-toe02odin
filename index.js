


const startBtn = document.querySelector("button");
const commentBar = document.createElement("dialog");
const body = document.querySelector("body");
body.appendChild(commentBar);
let isClicked= false;
let choice;

 //make UI board
const container= document.querySelector(".container");
for (let i = 1; i <= 9; i++){
  const div = document.createElement("div");
  div.className = "box";
  div.id = i;
  container.appendChild(div);
 
}
const boxes = document.querySelectorAll(".box");
console.log("Game Start!!!");

// make UI markers
const letterX = document.createElement("span");
letterX.textContent = "X";
letterX.classList.add("mark", "x");

const letterO = document.createElement("span");
letterO.textContent = "O";
letterO.classList.add("mark", "o");

commentBar.classList.add("message")

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
  piece: letterX.textContent,
  winner: "",

  board : [null,null,null,
           null,null,null,
           null,null,null],

 

  printBoard: function(){
    
                console.log(`
                    ${game.board[0]} | ${game.board[1]} | ${game.board[2]}
                    -------------------
                    ${game.board[3]} | ${game.board[4]} | ${game.board[5]}
                    -------------------
                    ${game.board[6]} | ${game.board[7]} | ${game.board[8]}
                  `);
         
               
  },
   chooseMove: function(callNum){

                 container.addEventListener("click",(event)=>{ 
                      if(event.target.matches(".box")){
                          console.log(event.target.id)
                          let num = Number(event.target.id) -  1;
                          console.log("Picked box id =", num);
                          isClicked = true;
                          callNum(num);
                       
                       } 
                        })
                     },

  switchTurn: function(currentTurn,currentLetter){
                 currentTurn === playerOne.marker ? currentTurn = playerTwo.marker: currentTurn = playerOne.marker;
                 this.currentPlayer = currentTurn;
                 console.log("The current player is ", currentTurn )
                 commentBar.textContent = "The current player is " + currentTurn ;
                 commentBar.showModal()
                 setTimeout(() => {commentBar.close()}, 2000)  
                 
                 
                //change the currentPlayers ui in board
                if (currentTurn === "X"){
                  this.piece = letterX.textContent;
                }else{
                  this.piece = letterO.textContent;
                }
                        },

  checkWin: function(array){
      if((array[0] === "X" && array[1] === "X" && array[2] === "X") ||
         (array[3] === "X" && array[4] === "X" && array[5] === "X") ||
         (array[6] === "X" && array[7] === "X" && array[8] === "X") ||
         (array[0] === "X" && array[3] === "X" && array[6] === "X") ||
         (array[1] === "X" && array[4] === "X" && array[7] === "X") ||
         (array[2] === "X" && array[5] === "X" && array[8] === "X") ||
         (array[0] === "X" && array[4] === "X" && array[8] === "X") ||
         (array[2] === "X" && array[4] === "X" && array[6] === "X")){
           playerOne.score++ 
          winner = "X";
          console.log("player One wins this round")
         
          commentBar.textContent="player One wins this round";
          commentBar.showModal();
          setTimeout(() => {commentBar.close()}, 2000)
          
         }
         else if (
         (array[0] === "O" && array[1] === "O" && array[2] === "O") ||
         (array[3] === "O" && array[4] === "O" && array[5] === "O") ||
         (array[6] === "O" && array[7] === "O" && array[8] === "O") ||
         (array[0] === "O" && array[3] === "O" && array[6] === "O") ||
         (array[1] === "O" && array[4] === "O" && array[7] === "O") ||
         (array[2] === "O" && array[5] === "O" && array[8] === "O") ||
         (array[0] === "O" && array[4] === "O" && array[8] === "O") ||
         (array[2] === "O" && array[4] === "O" && array[6] === "O")){
           playerTwo.score++ 
          winner = "O";
          console.log("player two wins this round");
          commentBar.textContent= "Player two wins this round";
          commentBar.showModal();
          setTimeout(() => {commentBar.close()}, 2000)
          
         }
         else{
         
          const findNull = array.find(element => element === null);

            if (findNull === null){
             
               console.log("game is in progress ...")
               commentBar.textContent= "game is in progress ...";
                commentBar.showModal()
                setTimeout(() => {commentBar.close()}, 2000)

              //switchturn()
              this.switchTurn(game.currentPlayer, letterX);
            } else{
              console.log("All the game slots are full! it is a tie.");
              commentBar.textContent= "All the game slots are full! it is a tie."
               commentBar.showModal()
               setTimeout(() => {commentBar.close()}, 2000)
            // gameOver()
              this.isGameOver();
            }
            winner = "null";
          };
            
  return winner;
  },

  isGameOver: function(nul){
    
      console.log("gameOver!!!")
      commentBar.textContent= "gameOver!!!";
       commentBar.showModal()
      setTimeout(() => {commentBar.close()}, 2000)
      reset();
      
  }                
 }

 startBtn.addEventListener("click", ()=>{
   game.printBoard()
    game.chooseMove(num =>{
                      choice = num;
                     console.log (choice+" printboard a number");
                     playGame(game.currentPlayer, choice ,game.piece);
}); 
        
 })


 



 
function playGame(turn, userInput, div){

   // set game.active to activate.
  game.active = true;

  //push player.maker into empty slot
  console.log("pick a number from 0 to 8" , userInput);
  commentBar.textContent= "choose a tile!"
  commentBar.showModal()
  setTimeout(() => {commentBar.close()}, 2000)
   //write a condition to not overwrite values on the second round of game.
   if (game.board[userInput] === null){
    game.board[userInput] = turn;
   
   }else{
    console.log("this slot is already taken");
    commentBar.textContent= "this slot is already taken";
    commentBar.showModal();
    setTimeout(() => {commentBar.close()}, 2000)
   }
  boxes[userInput].textContent = div;
  boxes[userInput].classList.add(div);
 
 

    return game.printBoard(),  updateScoreBoard(game.checkWin(game.board));  
}


function scoreBoard(){
   console.log(`Player One | Player Two 
  -------------------
${playerOne.score}        |        ${playerTwo.score}
    `)

commentBar.textContent = `Player One : ${playerOne.score}| Player Two :  ${playerTwo.score}`; 
 commentBar.showModal()
    setTimeout(() => {commentBar.close()}, 4000) 
}

function reset(){
  game.active = false;
  game.board = [null,null,null,
                null,null,null,
                null,null,null];
   playerOne.score = 0;
   playerTwo.score = 0;

}

 function updateScoreBoard(win){
  
  if(win === "X"){ 
    scoreBoard();
  }else if (win = "O"){
     scoreBoard();
  }else{
    console.log("scoreBoard unupdated!")
  }
 }

