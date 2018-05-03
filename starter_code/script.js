window.onload = function() {
  //removes whole div from DOM
  document.getElementById("game-board").style.display = "none";
  // $('#game-board').display.style = "none"
  
  var theCanvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  //Game constructor function 
  var Game = function(){
    this.car = {};
    this.obstacles = [];
  };

  //Car constructor function
  var Car = function(){
    this.x = 220;
    this.y = 520; 
    this.width = 50;
    this.height = 80;
    this.image = "images/car.png";
  };

  //Draw the car
  Car.prototype.drawCar = function(){
    var carImage = new Image();
    // console.log("what is this?:", this)
  
    carImage.src = this.image;  
    // console.log("before:",this.x)
    
    var that = this;
        //making the scope of the car accessable by calling is that for th
    carImage.onload= function(){
      ctx.drawImage(carImage, that.x, that.y, that.width, that.height);
      // console.log("after:",that.x)
    };
  };

  Car.prototype.move = function(number){
  
  ctx.clearRect(this.x, this.y, this.width, this.height);

  // var Obstacles = function(x, y, width, height){
  //   this.x = x;
  //   this.y = y; 
  //   this.width = width;
  //   this.height = height;
      switch(number){
      case 37:
      if(this.x > 20){
        this.x -= 10;
      }
      break;
      case 39:
      if(this.x < 430){
        this.x += 10;
      }
      break;
      default:
        console.log("what are you doing");
    }
    this.drawCar();
  };

  document.onkeydown = function(e){
    var whatNumber = e.keyCode;
      console.log(whatNumber);
      currentGame.car.move(whatNumber);
  };

  //Obstacles constructor function 
 
  function Obstacle (x){
    this.x = x;
    this.y = 0;
    this.width= 100;
    this.height= 20;
  }

  Obstacle.prototype.draw = function(){
    ctx.fillStyle = "green";
    // this.x = Math.floor(Math.random() * 300); 
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  //Start Game Function
  function startGame() {
    //sets back the div with the id game-board
    document.getElementById("game-board").style.display = "block";

    currentGame = new Game();
    // console.log("My current game: ", currentGame);
    currentCar = new Car();
    currentGame.car.drawCar();
    currentGame.update();
  }
    

  Game.prototype.update = function(){
    ctx.clearRect(0,0,500,600);
    // board.frames ++;
    // if(board.frames % 60 ===1){
      currentObstacle = new Obstacle(Math.floor(Math.random() * 300));

      currentGame.obstacles.push(currentObstacle);
      console.log("array: ",currentGame.obstacles );
    

    for (var i=0; i < currentGame.obstacles.length; i++){
      currentGame.obstacles[i].y += 10;
      currentGame.obstacles[i].draw();
    }

    function animate(){
      setTimeout(function(){
        requestAnimationFrame(currentGame.update);
      }, 40);
    }

    animate();
    
  };



};