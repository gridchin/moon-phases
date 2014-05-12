jQuery(document).ready(function(){
	
	// Contrubition from my friend @igormilla for mobile stuff

	function touchHandler(event) {
	    var touches = event.changedTouches,
	        first = touches[0],
	        type = "";
		switch(event.type) {
	        case "touchstart": type = "mousedown"; break;
	        case "touchmove":  type="mousemove"; break;        
	        case "touchend":   type="mouseup"; break;
	        default: return;
	    }
	
	    var simulatedEvent = document.createEvent("MouseEvent");
	    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
	    	first.screenX, first.screenY, 
	       	first.clientX, first.clientY, false, 
	        false, false, false, 0, null);
	
	    first.target.dispatchEvent(simulatedEvent);
	    event.preventDefault();
	}

    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    

	// end 	
	
	$(document).mousemove(function(e){
    	
    	var x = e.pageX;
    	var width = $(document).width();
    	var interval = x/width;
    	var moon = Math.round(660*interval)-330;
    	var opacity = Math.abs(moon/300)+.1;
    	var night = Math.abs(Math.abs(moon/300) - 1);
    	
    	$('.night').css('opacity', night);
    	$('.moon').css('-webkit-box-shadow', 'inset '+ moon +'px 0 0 0 rgba(245,229,204,.5)');
    	$('.moon').css('-moz-box-shadow', 'inset '+ moon +'px 0 0 0 rgba(245,229,204,.5)');
    	$('.moon').css('box-shadow', 'inset '+ moon +'px 0 0 0 rgba(245,229,204,.5)');
    	
    });
    
    var i=0;	
	for (i=0;i<=9;i++) {
		$('.stars, .night').append('<li></li>');		
	}
    
    $('.share_btn').click(function () {
	    $(this).fadeOut(100);
	    $('footer article').fadeIn(300);
	    return false;
	});

	$('.bg').click(function () {
	    $('footer article').fadeOut(100);
	    $('.share_btn').fadeIn(300);
	}); 
    
})