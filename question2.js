/*class Question2 {
    constructor() {
      this.hint = createButton("See Hint"); 
      this.op1 = createButton("");
      this.op2 = createButton("");
      //this.continue = createButton("Continue");
      this.question2 = createElement("h2");
      this.message = createElement("h1");
    }
    display(){
    
    
  
    this.handleHint();
    this.handleCorrectAns();
    this.handleWrongAns();
    //this.handleContinue();
    
    
  
    this.question2.html("Scotland National animal is Wolf.");
    this.question2.style('fonts-size', '70px')
    this.question2.style('color','white');
    this.question2.position(220, 105);
  
    this.hint.position(200,410);
    this.hint.size(200,40);
    this.hint.style('background','white');
  
    this.continue.position(440,410);
    this.continue.size(200,40);
    this.continue.style('background','white');
    
  
    // creating options
      this.op1.html("True" );
      this.op1.position(200, 200);
      this.op1.size(200,40);
      this.op1.style('background','lightgreen');
  
      this.op2.html("False");
      this.op2.position(470, 200);
      this.op2.size(200,40);
      this.op2.style('background','lightgreen');
  
  
     this.handleCorrectAns();
    this.handleHint();
    }
  
     handleCorrectAns() {
      this.op2.mousePressed(() => {
         clapM.play();
          swal ( {
              title: `Good Job!`,
              text: `You got the answer correct`,
              image: `coco`,
              //imageUrl:`https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fashirtsformen.blogspot.com%2F2020%2F11%2Fget-28-download-cute-dog-animation-gif.html&psig=AOvVaw3UV4GUuuYADXoq6tcCEOIx&ust=1637989631837000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIidrYWhtfQCFQAAAAAdAAAAABAg`,
             // imageSize: "100x100",
              confirmButtonText: "OK"
          });
      })
    }
  
    handleWrongAns() {
      this.op1.mousePressed(() => {
           swal ({
               title: `Opps!`,
               text: `You lose the game`,
               confirmButtonText: `Continue`
              });
      })
    }
  
      
     
      handleHint() {
        this.hint.mousePressed(() => {
          swal({
             title: `Hint`,
             text: `All the girls like that animal`,
             confirmButtonText: "Ok"
          });
      })
      }
  
      handleContinue() {
        this.continue.mousePressed ( () => {
           this.question2.hide();
          this.op1.hide();
          this.op2.hide();
          this.hint.hide();
        })
      }
      
    
  } */
  
