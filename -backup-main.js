//Level 1

var gameobj = [];
var animalobj = [];
var playBtn = '';
var foodOnAnimal = true;


//animals controls
function animalss () {
    
    var nAnimal = document.createElement("img");
    nAnimal.src = "/img/tiger-head.svg";
//    nAnimal.className = "";
    document.getElementById('bottoanimalsmarea').appendChild(nAnimal);
    
   
    
   var aniobj = {
       theImg: nAnimImg,
       left: 0
   }
};


//function backgroundChange() {
//     document.body.style.backgroundImage = "url(/img/bg-2.svg)";
//}



//falling food

//apple
setInterval(function () {
    console.log(gameobj.length);
    if (gameobj.length > 5){
        return false;
    }
    var ndiv = document.createElement("img");
    ndiv.src = "/img/apple.svg";
    ndiv.className = "falling";
    document.body.appendChild(ndiv);
    
    ndiv.style.left = Math.round(Math.random()*window.innerWidth)+"px";
    
    
    var appleObj = {
        theDiv: ndiv,
        top: 0,
        points: -1
    }
    gameobj.push(obj);
    
    }, 1000);


setInterval( function (){
    for(var i = 0; i < gameobj.length; i++){
        gameobj[i].top+=10;
        gameobj[i].theDiv.style.top= gameobj[i].top+"px";
        if(gameobj[i].top > window.innerHeight){
            //edited to remove one item of the array to avoid the repetition
            gameobj.splice(i,1);//.top = 0;
            
        }
    }
   
}, 6000/60);



//deer
setInterval( function (){
    if(gameobj.length > 6){
        return false;
    }
    var ndiv = document.createElement("img");
    ndiv.src = "/img/tiger-food.svg";
    ndiv.className = "falling";
    document.body.appendChild(ndiv);
    
    ndiv.style.left = Math.round(Math.random() *window.innerWidth)+"px";
    
    var obj = {
        theDiv: ndiv,
        top: 0
        points: 1;
    }
    gameobj.push(obj);
    
    }, 800);


setInterval(function(){
    for(var i = 0; i < gameobj.length; i++){
        gameobj[i].top+=5;
        gameobj[i].theDiv.style.top= gameobj[i].top+"px";
        if(gameobj[i].top > window.innerHeight){
            gameobj.splice(i,1);
//            gameobj[i].top = 0;
        }
    }
   
}, 1000/60);