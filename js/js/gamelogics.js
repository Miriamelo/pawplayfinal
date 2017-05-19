//Screen

    function main() {
        
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        
        width = window.innerWidth;
        height = window.innerHeight;
        
        var evt = "touchstart";
	       if (width >= 650) {
            canvas.width  = 640;
            canvas.height = 480;
            evt = "mousedown";
	   }

//        var bgimg = new Image();
//        bgimg.onload = function() {
//        ctx.drawImage(bgimg, 0, 0, 375, 667);
//            bgimg.src = "/img/bg-2.svg";
//        if (width >= 640) {
//            ctx.drawImage(bgimg, 0, 0, 640, 480);
//            bgimg.src = "/img/bg-3.svg";
//	   } 
        
        }
        
//        if (width >= 740) {
//            ctx.drawImage(bgimg, 0, 0, 640, 480);
//            bgimg.src = "bg-2.svg";
//	   }
        
//        }

    main();

    


