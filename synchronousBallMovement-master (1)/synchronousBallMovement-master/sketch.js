var database;
var form,game,player,playerCount;
var gameState=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  
    
  
}


