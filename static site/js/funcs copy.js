jQuery(document).ready(function() { 
	
	/* add roll-over effect conditional classes for sub-nav */
  	jQuery('#flowerArea a.branch').hover(function ()
		{
			//$('.hotArea').stopTime();
			jQuery('a.branch').removeClass('rollOver');
			jQuery(this).addClass('rollOver');
			jQuery('a.leaf').hide();
			jQuery(this).parent().children('ul').children('li').children('a').fadeIn();
			jQuery(this).parent().children('.hotArea').show();
			
		},
		function ()
		{
			jQuery(this).removeClass('rollOver');
			jQuery(this).parent().children().children().children().fadeOut();
			
		}
	);
	
	jQuery('.hotArea').hover (function ()
		{
			//$('.hotArea').stopTime();
		
		},
		function ()
		{
			/*
			$(this).oneTime(1000, function()
				{
					jQuery(this).parent().children('.branch').removeClass('rollOver');
					jQuery(this).parent().children('.hotArea').hide();
					jQuery(this).parent().children('ul').children('li').children('a').fadeOut();
			  	});
			*/
		}
	);
	jQuery('.multi').hover (function ()
		{
			//jQuery(this).parent().parent().addClass('integralActive');
		},
		function ()
		{
			//jQuery(this).parent().parent().removeClass('integralActive');
		}
	);
});
