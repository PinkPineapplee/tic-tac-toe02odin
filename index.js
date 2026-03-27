
const boxes = document.querySelectorAll(".box");
const startBtn = document.querySelector("button");



game = {
  board : [null,null,null,
           null,null,null,
           null,null,null],

  start : false,
  turn: playerOne.marker
};

 function Player(name,marker){
   this.name=name;
   this.marker=marker;
   this.score = 0;
 }