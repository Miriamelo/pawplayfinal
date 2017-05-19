if(localStorage.animal != undefined){
  var playerimg = document.getElementById("playerimg");
      playerimg.src = localStorage.animal;
  console.log(localStorage.animal);
}else{
  localStorage.animal= "choosetiger.svg";
}

function FallItem(){
  let r = Math.floor(Math.random() * (imgs.length));

  this.image = new Image();
  this.image.src = imgs[r].src;
  this.points = imgs[r].points;
  this.name = imgs[r].name;
  this.image.className = "falling";
  this.image.style.display = "none";
  document.body.appendChild(this.image);

  this.destroy = false;

  this.yPos = 60;
  this.xPos = Math.round(Math.random()*WinWidth);
  this.speed = Math.random()*5+3;
  this.cstep = 0;
  this.step = Math.random()*0.1+0.05;
  this.collided = false;

this.update = function(){
  this.image.style.display = "";
  sy = this.speed * Math.sin(90 * Math.PI / 180);
  sx = this.speed * Math.cos(this.cstep);
  this.yPos += sy;
//xPos[i]+=sx;
    if(this.yPos > WinHeight)
        this.destroy = true;
    else{
        this.image.style.left = Math.min(WinWidth, this.xPos) - 50;
        this.image.style.top = this.yPos;
      }

  this.cstep += this.step;
};

this.checkCollision = function(playerLeft, bWidth, bTop) {
  if(!this.collided){
    if(playerLeft <= this.xPos &&  // left side of the player position
      (playerLeft + bWidth) >= this.xPos &&  // right side of the player position
      (bTop - this.yPos) < -5){  // part of the food inside
       this.collided = true;
       return true;
     }}else{
    return false;
    }};
};

var imgs = [{src:"img/apple.svg", points: 1, name: "apple"},
    {src: "img/rhino-food.svg", points: -1},
    {src: "img/tiger-food.svg", points: -1}];
var amount = 5;
var player;
var playerLeft = 228;
var score = 0;
var appleCounter = 0;
var WinHeight = window.innerHeight -100;
var WinWidth = window.innerWidth -200;
var objArr = [];
var destructArr = [];
var gameOver = false;
var timeRemainig = 30;//Remaining Time in seconds


function foodFall(){
  var bWidth, bTop;

  if (window.getComputedStyle){
    bWidth = parseInt(getComputedStyle(player, null)["width"], 10);
    bTop = parseInt(getComputedStyle(player, null)["top"], 10);
  }else {
    bWidth = parseInt(player.currentStyle["width"], 10);
    bTop = parseInt(player.currentStyle["top"], 10);
  }

objArr.forEach(function(obj, i){
  obj.update();
  if(obj.destroy){
    objArr.splice(objArr.indexOf(obj), 1);
    objArr.push(new FallItem());
    destructArr.push(obj);}

    if(obj.checkCollision(playerLeft, bWidth, bTop))
      mScore(obj);


});

clear();

if(!gameOver)
setTimeout(foodFall, 20);
}  // foodFall()

//start score count
function mScore(obj){

score += obj.points;
scoreup = document.getElementById('testscore');
scoreup.innerHTML = (score);

// player bar👇🏻👇🏻👇🏻
  if (obj.name == "apple" && appleCounter <10){
    appleCounter ++;
    document.getElementById('bar').style.width=appleCounter * 10 + "%"
  }
  if (obj.name == "apple"){
  playAudio();
  }

// end player bar 👆🏻👆🏻👆🏻👆🏻


document.getElementsByClassName('round-score')[0].setAttribute('data-percent', `${score}`)

}
//end score count

// audio settings 👇🏻👇👇
audio =document.getElementById('audio');

function playAudio() {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play()
}


function setHalfVolume() {
  myAudio = document.getElementById('music');
  myAudio.play()
  myAudio.volume = 0.1;
}

function stopfVolume() {
  myAudio = document.getElementById('music');
  myAudio.pause()
}
// audio settings 👆🏻👆🏻👆🏻👆🏻

// const keys = document.querySelectorAll('#scoreup');
// keys.forEach(scoreup => scoreup.addEventListener('transitionend', removeTransition));

// updated to keyListener() function
function keyListener(e) {
  if (!e || (typeof(e)=="undefined")) { e = window.event; }
  var pArea = document.getElementById("playingArea");
  if (e.keyCode==37 && playerLeft > 0) {  // key arrow - left
  playerLeft -= 25;
  player.style.left = playerLeft + 'px' ;
  //        isCollide();  // after display, check if collide
  }else if (e.keyCode==39 && playerLeft < window.innerWidth) {  // key arrow - right
  playerLeft += 25;
  player.style.left = playerLeft + 'px' ;
//        isCollide();  // after display, check all food if collide
  }
}  // keyListener(Event)

leftArrow = document.getElementById('left-arrow');
leftArrow.addEventListener('click', moveLeft);

function moveLeft(){
  playerLeft -= 45;
  player.style.left = playerLeft + 'px' ;

}

rightArrow = document.getElementById('right-arrow');
rightArrow.addEventListener('click', moveRight);

function moveRight(){
  playerLeft += 45;
  player.style.left = playerLeft + 'px' ;

}



function updateRemainingTime(){
  timeRemainig -= 1;
  var min = Math.floor(timeRemainig/60);
  var sec = timeRemainig%60;
  var strTimeRemaining = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0"+sec : sec);
  var gamewinScr = document.getElementById("levelup");
  var gameOverScr = document.getElementById("gameOver");
  var nbgDiv = document.createElement("div");
  document.getElementById("timer").innerHTML = strTimeRemaining;
  setHalfVolume()


  if(timeRemainig == 0 && appleCounter < 10){

    gameOver = true;
    stopfVolume();
    nbgDiv.className = "bgDiv";
    document.body.appendChild(nbgDiv);
    gameOverScr.style.display = "block";
    gamewinScr.style.display = "none";
    document.getElementById("finalscore").innerHTML = "Your Score: " + score;

    }

    if (timeRemainig == 0 && appleCounter >= 10){
      stopfVolume();
      gameOver = true;
      nbgDiv.className = "bgDiv";
      document.body.appendChild(nbgDiv);
      gamewinScr.style.display = "block";
      gameOverScr.style.display = "none";
      document.getElementById("finalscore2").innerHTML = "Your Score: " + score;
    }if (timeRemainig > 0){
      setTimeout(updateRemainingTime, 1000);
    }if (timeRemainig <= 5 && appleCounter < 10){
      document.getElementById("hurryup-alert").style.display="block"
    }if (timeRemainig <= 5 && appleCounter >= 10){
      document.getElementById("hurryup-alert").style.display="none"
    }
}


if (timeRemainig <= 25){
  document.getElementById("hurryup-alert").style.display="block"
  console.log("hi");
}


function init() {
  player = document.getElementById('player');
  scoreDisplay = document.getElementById('score');
  document.onkeydown=keyListener;

  //Populate Initial Falling Objects
  while(objArr.length != amount)
  {
  objArr.push(new FallItem());
  }
  updateRemainingTime();
  //        drawGameOver()
  foodFall();
  }

  function clear() {
    destructArr.forEach(function(obj){
    document.body.removeChild(obj.image);
    destructArr.splice(destructArr.indexOf(obj), 1);
  });
}
