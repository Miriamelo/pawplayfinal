    var lback = document.getElementById("lback");
        lback.src = "img/back.svg";

    var lok = document.getElementById("lok");
        lok.src = "img/ok.svg";

    
    var lbody = document.getElementById("lbody");

    var lground = document.getElementById("lground");

    var luninput = document.getElementById("luninput");

    var firstNameLocal = localStorage.firstName; 

    var ldiv = document.getElementById("ldiv");

    var lcancel = document.getElementById("lcancel");

    var lok = document.getElementById("lok");

            lok.addEventListener("click", function(){
            
            console.log(localStorage.firstName);

                if(localStorage.firstName == undefined){
                    localStorage.firstName = luninput.value;
                    }
                    });   

                if(localStorage.firstName != undefined){                    document.getElementById("ldiv");
                    ldiv.innerHTML= "<br>Hello again " +localStorage.firstName;
                                                        
                    console.log(localStorage.firstName);                                 
                    ldiv.style.display = "block";
                    luninput.style.display = "none";                                    
                    console.log("ok");
                }

var animal = localStorage.animal;


if(localStorage.animal != undefined){
    document.getElementById("nimg");
    nimg.src = localStorage.animal;
    console.log(nimg);
}

else{
   localStorage.animal= "choosetiger.svg";
    console.log(localStorage.animal);
}


    var newuser = document.getElementById("newuser");
            newuser.addEventListener("click", function(){
                    console.log("cancel");
                document.getElementById("ldiv").innerHTML = " ";

                ldiv.style.display = "none";
                luninput.style.display = "block";
                localStorage.removeItem("firstName");
                
                
                document.getElementById("nimg").innerHTML = " ";

                localStorage.removeItem("firstName");
                localStorage.removeItem("animal");
                console.log(localStorage.firstName);
                console.log(localStorage.animal);
            });

    var newuser = document.getElementById("newuser");
        newuser.src = "img/newuser.svg";

var lcurclick = "";


var ltiger = document.getElementById("tiger");
    ltiger.addEventListener("click", function(){
       lcurclick = ltiger;
        ltiger.style.border = "2px dotted green";
        lrhino.style.border = "none";
        lbear.style.border = "none";
        lbutter.style.border = "none";
        lwhale.style.border = "none";
        lpanda.style.border = "none";
        console.log(lcurclick);
        
        nimg.src = ltiger.src;
        localStorage.animal = nimg.src;
        console.log("tiger");
        
    });

var lrhino = document.getElementById("rhino");
    lrhino.addEventListener("click", function(){
       lcurclick = lrhino;
        lrhino.style.border = "2px dotted green";
        ltiger.style.border = "none";
        lbear.style.border = "none";
        lbutter.style.border = "none";
        lwhale.style.border = "none";
        lpanda.style.border = "none";
      console.log(lcurclick);
        
        nimg.src = lrhino.src;
        localStorage.animal = nimg.src;
        
        console.log("rhino");
    });

var lbear = document.getElementById("bear");
    lbear.addEventListener("click", function(){
       lcurclick = lbear;
        lbear.style.border = "2px dotted green";
        ltiger.style.border = "none";
        lrhino.style.border = "none";
        lbutter.style.border = "none";
        lwhale.style.border = "none";
        lpanda.style.border = "none";
        console.log(lcurclick);
        
        nimg.src = lbear.src;
        localStorage.animal = nimg.src;
        
    });

var lbutter = document.getElementById("butterfly");
    lbutter.addEventListener("click", function(){
       lcurclick = lbutter;
        lbutter.style.border = "2px dotted green";
        ltiger.style.border = "none";
        lrhino.style.border = "none";
        lbear.style.border = "none";
        lwhale.style.border = "none";
        lpanda.style.border = "none";
        console.log(lcurclick);
        
        nimg.src = lbutter.src;
        localStorage.animal = nimg.src;
    });

var lwhale = document.getElementById("whale");
     lwhale.addEventListener("click", function(){
       lcurclick = lwhale;
        lwhale.style.border = "2px dotted green";
        ltiger.style.border = "none";
        lrhino.style.border = "none";
        lbear.style.border = "none";
        lbutter.style.border = "none";
        lpanda.style.border = "none";
        console.log(lcurclick);
         
         nimg.src = lwhale.src;
         localStorage.animal = nimg.src;
    });

var lpanda = document.getElementById("panda");
    lpanda.addEventListener("click", function(){
       lcurclick = lpanda;
        lpanda.style.border = "2px dotted green";
        ltiger.style.border = "none";
        lrhino.style.border = "none";
        lbear.style.border = "none";
        lbutter.style.border = "none";
        lwhale.style.border = "none";
        console.log(lcurclick);
        
        nimg.src = lpanda.src;
        localStorage.animal = nimg.src;
    });













