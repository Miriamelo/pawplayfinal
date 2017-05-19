//Level 1

var gameobj = [];
setInterval(function(){
    if(gameobj.length > 5){
        return false;
    }
    var ndiv = document.createElement("div");
    ndiv.className = "falling";
    document.body.appendChild(ndiv);
    
    ndiv.style.left = Math.round(Math.random() *window.innerWidth)+"px";
    
    var obj = {
        theDiv: ndiv,
        top: 0
    }
    gameobj.push(obj);
    
    }, 1000);


setInterval(function(){
    for(var i = 0; i < gameobj.length; i++){
        gameobj[i].top+=20;
        gameobj[i].theDiv.style.top= gameobj[i].top+"px";
        if(gameobj[i].top > window.innerHeight){
            gameobj[i].top = 0;
        }
    }
   
}, 1000/60);