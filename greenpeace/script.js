
var adDiv;



//Image Vars

var el = {}; //elements object

init = function(){

	//requestAnimationFrame(loop);

  	adDiv = document.getElementById("ad");
  	addEventListeners();

   	el.stage = document.getElementById('stage');
   	el.introtxt01 = document.getElementById('introtxt01');
   	el.introtxt02 = document.getElementById('introtxt02');
   	el.introtxt03 = document.getElementById('introtxt03'); 
   	el.txt01 = document.getElementById('txt01'); 
   	el.txt02 = document.getElementById('txt02');
   	el.trawler = document.getElementById('trawler');
   	el.logo = document.getElementById('logo');
   	el.bg = document.getElementById('bg');
   	el.cta = document.getElementById('cta');
   	el.trawlerContainer = document.getElementById('trawlerContainer');
   	blank = document.getElementById('blank');
   
   	console.log('initialization');

   	loop();

}


function addEventListeners() {
    document.getElementById("clickthrough").addEventListener("click", clickthrough);
   

}


//Timer vars
//var animationInterval;
var tick = 0;
var factor = 10; // 1,10,100,1000 for loop of 1 milisecond to 1 second;
var interval = 1000 / factor;
var cycles = 3; 




function loop() {

	console.log('loop', cycles );

	setTimeout(function() {

		tick++;
		//console.log(tick);

		switch(tick){

			case 0.5 * factor:
			el.introtxt01.className = "fadeIn";

			break;

			case 2 * factor:
			el.introtxt02.className = "fadeIn";
			
			break;

			case 3.5 * factor:
			el.introtxt03.className = "fadeIn";
			break;

			case 5 * factor:
			el.introtxt01.className = "fadeOut";
			break;

			case 5.2 * factor:
			el.introtxt02.className = "fadeOut";
			break;

			case 5.4 * factor:
			el.introtxt03.className = "fadeOut";
			break;

			case 6 * factor:
			el.txt01.className = "fadeIn";
			break;

			case 7 * factor:
			blank.classList.add('fishing');
			trawlerContainer.classList.add('fishing');
			
			break;

			case 11 * factor:
			el.txt01.className = "fadeOut";
			el.txt02.className = "fadeIn";
		
			break;

			case 14 * factor:
			el.txt02.className = "fadeOut";
		
			break;

			case 14.2 * factor:
			el.logo.className = "fadeIn";
		
			break;

			case 14.5 * factor:
			el.bg.className = "fadeIn";
			
			break;

			case 14.8 * factor:
			el.cta.className = "fadeIn";

			
			break;

			case 17 * factor:
				blank.classList.remove('fishing');
				trawlerContainer.classList.remove('fishing');
				

				if(cycles > 1) {		
          }
				
			break;

			case 20 * factor:

				cycles--;

        			if( cycles > 0){
        				el.bg.className = "fadeOut";
				    	el.logo.className = "fadeOut";
				    	el.cta.className = "fadeOut";
						
						tick = 0;
        }

			
			break;
		}
			if(cycles > 0) {
				requestAnimationFrame(loop);
				
			}
		
	}, interval);
}





// if( document.readyState === 'complete' ){
//     init();
// }else{
//     window.onload = function(){
//     	init();
//     };
// }


function clickthrough() {
   // EB.clickthrough();
   var clickTAG = "";
   document.location = clickTAG;
    console.log('CLICKTHROUGH CLICKED');
}

//window.addEventListener("load", initEB);
window.addEventListener("load");



/* Add the following to you main js file
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 */

 //This function pauses banner when not in focus within browser

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

