jQuery(document).ready(function() { 
	
	/* add roll-over effect conditional classes for sub-nav */
  	jQuery('#flowerArea a.branch').click(function ()
		{
			//$('.hotArea').stopTime();
			jQuery('a.branch').removeClass('rollOver');
			jQuery(this).addClass('rollOver');
			jQuery('a.leaf').hide();
			jQuery('.clickLeaf').hide();
			jQuery(this).parent().children('ul').children('li').children('a').fadeIn();
			jQuery(this).parent().children('ul').children('li').children('.clickLeaf').fadeIn();
			jQuery(this).parent().children('.hotArea').show();
			jQuery('#whoAreWe #whoBody').hide();
			jQuery('#flowerArea ul ul span').removeClass('active');
			jQuery('#whoAreWe #whoHeader a').removeClass('active');
			jQuery('#textPosition').fadeIn();
		}
		/*
		,
		function ()
		{
			jQuery(this).removeClass('rollOver');
			jQuery(this).parent().children().children().children().fadeOut();
			
		}
		*/
	);
	
	jQuery('#flowerArea a.leaf').hover(function ()
		{
			jQuery(this).siblings('span').addClass('glow');				
									
		},
		function ()
		{
			jQuery(this).siblings('span').removeClass('glow');
		}
	);
	
	jQuery('#flowerArea a.leaf').click(function ()
		{
			jQuery('#flowerArea ul ul span').removeClass('active');
			jQuery(this).siblings('span').addClass('active');				
									
		}
	);
	
	jQuery('#whoAreWe #whoHeader a').click(function ()
		{
			resetAll();
			jQuery(this).addClass('active');
			jQuery('#whoAreWe #whoBody').show();						
									
		}
			
	);
	
	
	
});

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
		console.log (this);
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:
preload([
	'img/info_arrow.png',
	'img/info_border.png',
	'img/flower/all_petals_sprite.png'
]);



function resetAll () {
	jQuery('a.branch').removeClass('rollOver');
	jQuery('#flowerArea ul ul span').removeClass('active');
	jQuery('#whoAreWe #whoHeader a').removeClass('active');
	jQuery('a.leaf').hide();
	jQuery('.clickLeaf').hide();
	jQuery('#textPosition').hide();
}

