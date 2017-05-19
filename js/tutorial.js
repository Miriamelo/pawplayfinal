
    console.log("under 500");
            var tutnext1 = document.getElementById("tutnext1");
            var tutnext2 = document.getElementById("tutnext2");
            var tutnext3 = document.getElementById("tutnext3");
            var tutnext4 = document.getElementById("tutnext4");
            var tutnext5 = document.getElementById("tutnext5");
            var tutnext6 = document.getElementById("tutnext6");


            var ttut1 = document.getElementById("ttut1");
                    ttut1.src = "./img/FinalTutorial1Mobile.svg";
            var ttut2 = document.getElementById("ttut2");
                    ttut2.src = "./img/FinalTutorial2Mobile.svg";
            var ttut3 = document.getElementById("ttut3");
                    ttut3.src = "./img/FinalTutorial3Mobile.svg";
            var ttut4 = document.getElementById("ttut4");
                    ttut4.src = "./img/FinalTutorial4Mobile.svg";
            var ttut5 = document.getElementById("ttut5");
                    ttut5.src = "./img/FinalTutorial5Mobile.svg";
            var ttut6 = document.getElementById("ttut6");
                    ttut6.src = "./img/FinalTutorial6Mobile.svg";

           

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
    
            tutnext4.addEventListener("click", function(){
                ttut5.style.display= "inline-block";
                ttut4.style.display= "none";
                tutnext4.style.display = "none";
                tutnext5.style.display = "inline-block";
            });
    
            tutnext5.addEventListener("click", function(){
                ttut6.style.display= "inline-block";
                ttut5.style.display= "none";
                tutnext5.style.display = "none";
                tutnext6.style.display = "inline-block";
            }); 



var mq = window.matchMedia( "(min-width: 500px)" );


if (mq.matches) {
     console.log("over 500");
            var tutnext1 = document.getElementById("tutnext1");
            var tutnext2 = document.getElementById("tutnext2");
            var tutnext3 = document.getElementById("tutnext3");
            var tutnext4 = document.getElementById("tutnext4");
            var tutnext5 = document.getElementById("tutnext5");
            var tutnext6 = document.getElementById("tutnext6");


            var ttut1 = document.getElementById("ttut1");
                    ttut1.src = "./img/FinalTutorial1.svg";
            var ttut2 = document.getElementById("ttut2");
                    ttut2.src = "./img/FinalTutorial2.svg";
            var ttut3 = document.getElementById("ttut3");
                    ttut3.src = "./img/FinalTutorial3.svg";
            var ttut4 = document.getElementById("ttut4");
                    ttut4.src = "./img/FinalTutorial4.svg";
            var ttut5 = document.getElementById("ttut5");
                    ttut5.src = "./img/FinalTutorial5.svg";
            var ttut6 = document.getElementById("ttut6");
                    ttut6.src = "./img/FinalTutorial6.svg";

        

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
    
            tutnext4.addEventListener("click", function(){
                ttut5.style.display= "inline-block";
                ttut4.style.display= "none";
                tutnext4.style.display = "none";
                tutnext5.style.display = "inline-block";
            });
    
            tutnext5.addEventListener("click", function(){
                ttut6.style.display= "inline-block";
                ttut5.style.display= "none";
                tutnext5.style.display = "none";
                tutnext6.style.display = "inline-block";
            }); 
};

