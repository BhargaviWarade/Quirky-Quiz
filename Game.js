class Game {
  constructor() {
    //this.resetButton = createButton("Reset");
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
      
    });
  }

  

  start() {
    //question.hide();
    form = new Form();
    form.display();
  
    question = new Question();

    //question2 = new Question2();
    //question.display();
    // question.hide();

    bgMusic.play();

    player = new Player();
    playerCount = player.getCount();
  }

  handleElement() {
    this.resetButton.class("resetButton");
    this.resetButton.position(width/2 + 350, 100);
  }

  /*handleResetButton(){
    this.resetButton.mousePressed(()=>{
      database.ref("/").set({
        playerCount:0,
        gameState:0,
        players:{},
      }); 
      window.location.reload();
    });
  }*/

  display() {
    //this.handleResetButton();
    this.handleElement();
    
  }

}