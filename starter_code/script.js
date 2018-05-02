window.onload = function() {
  // removes the whole div from DOM
document.getElementById("game-board").style.display = "none";
// $('#game-board').display.style = "none"

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// game constructor function
var Game = function(){
  this.car = {};
  this.obstacles = [];
}

// car constructor function

var Car = function(){
  this.x = 220;
  this.y = 520;
  this.width = 50;
  this.height = 80;
  this.image = "images/car.png";
}

Car.prototype.drawCar = function(){
  var carImage = new Image();
  // console.log("What is this? :", this)
  carImage.src = this.image;
  // console.log(carImage, this.x, this.y, this.width, this.height)

  // console.log("before: ", this.x)
  var that = this;
  carImage.onload = function(){
    // console.log("after: ", that.x)
    ctx.drawImage(carImage, that.x, that.y, that.width, that.height );
  }
}

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    // sets back the div with id game-board on the DOM
    document.getElementById("game-board").style.display = "block";

    currentGame = new Game();
    // currentGame = { car:"", obstacles:[] }
    // console.log("My current game is: ", currentGame)
    currentCar = new Car();
    currentGame.car = currentCar;
    currentGame.car.drawCar();




    
  }
};
