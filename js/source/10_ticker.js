/* List Ticker by Alex Fish 
// www.alexefish.com
//
// options:
//
// effect: fade/slide
// speed: milliseconds
*/

(function($){
	'use strict';
  $.fn.list_ticker = function(options){
    
    var defaults = {
      speed:4000,
	  effect:'fade'
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function(){
    	    
    	    // stuff here
			var obj = $(this);
	      var list = obj.children();
	      list.not(':first').hide();
	      
	      var handle = setInterval(function(){
	        
	        nextItem();
	        
	      }, options.speed)
		      
    	    function nextItem()
    	    {
	    	    list = obj.children();
		        list.not(':first').hide();
		        
		        var first_li = list.eq(0)
		        var second_li = list.eq(1)
				
				if(options.effect == 'slide'){
					first_li.slideUp();
					second_li.slideDown(function(){
						first_li.remove().appendTo(obj);
					});
				} else if(options.effect == 'fade'){
					first_li.fadeOut(function(){
						second_li.fadeIn();
						first_li.remove().appendTo(obj);
					});
				}
    	    }
    	    
    		$(this).click(function(event){
    			// do some stuff
    			// call the function defined previously in the plugin code
    			nextItem(); 
    		});
    		
    	});
    	
  };
})(jQuery);