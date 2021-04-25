class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      background("YELLOW");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340, 50);
      text("----------------------------",320, 65);
      Contestant.getPlayerInfo();
      if(allContestants !== undefined){
        debugger;
        var display_Answers = 230;
        fill("MAGENTA");
        textSize(20);
        text("*NOTE:CORRECT ANSWERS ARE HIGHLIGHTED WITH PURPLE!",100,230);
  
        for(var plr in allContestants){
          debugger;
          var correctAns = "3";
          if (correctAns === allContestants[plr].answer)
            fill("PURPLE")
          else
            fill("BLUE");
  
          display_Answers+=30;
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
      }
    }
  }
  