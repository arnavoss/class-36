
var database;
var gameState=0;
var playerCount=0;
var form,game,player;
var allPlayers;
function setup(){
    createCanvas(500,500);
 database=firebase.database();
 game=new Game();
 game.getState();
 game.start();
 

}

function draw(){
    background("white");
    if(playerCount===4){
game.update();


    }
if(gameState===1){
    clear();
game.play();
}


}
