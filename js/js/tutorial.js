var mq =window.matchMedia("(min-width: 500px)");

            var tutnext1 = document.getElementById("tutnext1");
            var tutnext2 = document.getElementById("tutnext2");
            var tutnext3 = document.getElementById("tutnext3");


            var ttut1 = document.getElementById("ttut1");
            var ttut2 = document.getElementById("ttut2");
            var ttut3 = document.getElementById("ttut3");


if(mq.matches){
            tutnext1.addEventListener("click", function(){
                ttut2.style.display= "inline-block";
                ttut1.style.display= "none";
                tutnext1.style.display = "none";
                tutnext2.style.display = "inline-block";
                
            });

            tutnext2.addEventListener("click", function(){
                ttut3.style.display= "inline-block";
                ttut2.style.display= "none";
                tutnext2.style.display = "none";
                tutnext3.style.display = "inline-block";
            });

            tutnext3.addEventListener("click", function(){
                ttut4.style.display= "inline-block";
                ttut3.style.display= "none";
                tutnext3.style.display = "none";
                tutnext4.style.display = "inline-block";
            });
}


else{
    
    
    
    
}