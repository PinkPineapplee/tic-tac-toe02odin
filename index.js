
const boxes = document.querySelectorAll(".box");
const startBtn = document.querySelector("button");



game = {
  board : [null,null,null,
           null,null,null,
           null,null,null],

  start : false,
  turn: playerOne.marker
};

 function Player(id,marker){
   this.id=id;
   this.marker=marker;
   this.score = 0;
 };

 const playerOne = new Player(1, "X");
 const playerTwo = new Player(2, "O");

function playGame(){
  game.start = true;
}