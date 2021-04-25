var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("GREEN");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
