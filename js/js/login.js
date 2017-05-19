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

    var newuser = document.getElementById("newuser");
            newuser.addEventListener("click", function(){
                    console.log("cancel");
                document.getElementById("ldiv").innerHTML = " ";

                ldiv.style.display = "none";
                luninput.style.display = "block";
                localStorage.removeItem("firstName");
            });

    var newuser = document.getElementById("newuser");
        newuser.src = "img/newuser.svg";

var lcurclick = "";
console.log(lcurclick);

var ltiger = document.getElementById("tiger");
    ltiger.addEventListener("click", function(){
       lcurclick = tiger;
        console.log(lcurclick);
    });
var lrhino = document.getElementById("rhino");
    lrhino.addEventListener("click", function(){
       lcurclick = rhino;
        console.log(lcurclick);
    });

var lbear = document.getElementById("bear");
    lbear.addEventListener("click", function(){
       lcurclick = bear;
        console.log(lcurclick);
    });
var lbutter = document.getElementById("butterfly");
    lbutter.addEventListener("click", function(){
       lcurclick = butterfly;
        console.log(lcurclick);
    });
var lwhale = document.getElementById("whale");
     lwhale.addEventListener("click", function(){
       lcurclick = whale;
        console.log(lcurclick);
    });
var lpanda = document.getElementById("panda");
    lpanda.addEventListener("click", function(){
       lcurclick = panda;
        console.log(lcurclick);
    });

