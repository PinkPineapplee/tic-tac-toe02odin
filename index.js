


const startBtn = document.querySelector("button");
const commentBar = document.createElement("dialog");
const body = document.querySelector("body");

body.appendChild(commentBar);
commentBar.classList.add("message");

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
  piece: playerOne.ui,
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
                        });

  //              container.addEventListener("dblclick", (event)=>{
  //                      if (event.target.matches(".box")){
  //                       isClicked = false;
  //                   console.log("this slot is already taken");
  //                   commentBar.textContent= "this slot is already taken";
  //                   commentBar.showModal();
  //                   setTimeout(() => {commentBar.close()}, 2000)
  //  }
  //                       })
                     },

  switchTurn: function(currentTurn , currentLetter){
                 if (currentTurn === playerOne.marker && currentLetter === playerOne.ui){
                  this.currentPlayer = playerTwo.marker;
                  this.piece = playerTwo.ui;
                  console.log("The current player is ", currentTurn, "and plays with ", currentLetter )
                 } else if(currentTurn === playerTwo.marker && currentLetter === playerTwo.ui){
                   this.currentPlayer = playerOne.marker;
                  this.piece = playerOne.ui;
                  console.log("The current player is ", currentTurn, "and plays with ", currentLetter )
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
          setTimeout(() => {commentBar.close()}, 2000);
          
          // gameOver()
          this.isGameOver();
          
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
          setTimeout(() => {commentBar.close()}, 2000);
         
          // gameOver()
              this.isGameOver();
          
         }
         else{
         
          const findNull = array.find(element => element === null);

            if (findNull === null){
             
               console.log("game is in progress ...")
          

              //switchturn()
              this.switchTurn(game.currentPlayer, game.piece);
            } else{
              console.log("All the game slots are full! it is a tie.");
              commentBar.textContent= "All the game slots are full! it is a tie."
              commentBar.showModal();
              setTimeout(() => {commentBar.close()}, 2000);

            // gameOver()
              this.isGameOver();
            }
            winner = "null";
          };
            
  return winner;
  },

  isGameOver: function(){
    
      console.log("gameOver!!!")
    
      reset();
      
  }                
 }

 startBtn.addEventListener("click", ()=>{
  // set game.active to activate.
  game.active = true;
   game.printBoard();
    game.chooseMove(num =>{
                    
                     playGame(game.currentPlayer, num ,game.piece);
}); 
        
 })


function playGame(turn, userInput, div){

 if (game.active === true){

  //push player.maker into empty slot
  console.log("pick a number from 0 to 8" , userInput);
  
   //write a condition to not overwrite values on the second round of game.
   if (game.board[userInput] === null){

    game.board[userInput] = turn;
    boxes[userInput].textContent = div.textContent;
    boxes[userInput].classList.add(div.textContent);
   }
    game.checkWin(game.board);
    game.printBoard();

   
    } 
  
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
  
  //  boxes.forEach(box => {box.textContent = "";
  //   box.classList.remove("O","X")
  //  });
   
   for (let i = 1; i <= 9; i++){
  const div = document.createElement("div");
  div.className = "box";
  div.id = i;
  container.appendChild(div);
 
}
}

 