jQuery(document).ready(function() { 
								
	loadCufon();
								
	
	/* add roll-over effect conditional classes for sub-nav */
  	jQuery('#flowerArea a.branch').click(function ()
		{
			jQuery('#flowerArea ul ul').hide();
			//jQuery('.hotArea').stopTime();
			jQuery('a.branch').removeClass('rollOver');
			jQuery(this).addClass('rollOver');
			jQuery('a.leaf').hide();
			jQuery('.clickLeaf').hide();
			
			jQuery(this).parent().children('ul').fadeIn();
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
	
	jQuery('#flowerArea a.stub').hover(function ()
		{
			jQuery(this).siblings('span').addClass('glow');				
									
		},
		function ()
		{
			jQuery(this).siblings('span').removeClass('glow');
		}
	);
	
	jQuery('#flowerArea a.stub').click(function ()
		{
			jQuery('#flowerArea ul ul span').removeClass('active');
			jQuery(this).siblings('span').addClass('active');				
									
		}
	);
	
	jQuery('#whoAreWe #whoHeader a').click(function ()
		{
			activateWho();
			/*
			resetAll();
			jQuery(this).addClass('active');
			jQuery('#whoAreWe #whoBody').show();						
			*/						
		}
			
	);
	
	jQuery(window).hashchange( function(){
	console.log('HASHCHANGE');
	   hash = location.hash;
	   
	   if (hash == '') {
		   hash = '#home';
	   }
	   navByHash(hash);
	});
	
	if (window.location.hash != ''){
		console.log('winlochash -- force hashchange');
		location.hash = '';
		jQuery(window).hashchange();
	}
	
	activateWho ();
	
});

function activateWho () {
	resetAll();
	jQuery('#whoAreWe #whoHeader a').addClass('active');
	jQuery('#whoAreWe #whoBody').show();	
}

function activateDetails() {
	
}

function navByHash(hash){
	//console.log ("hash: " + hash);
	var value = hash.replace("#node/", "");
	console.log ("hash2: " + value);
	loadStr = '/loadFlower/' + value;
	//console.log ("loadstr: " + loadStr);
	//console.log (loadStr);
	//jQuery('#textPosition').load(loadStr + ' #textArea');
	jQuery('#textPosition #textArea').load(loadStr);
	
}

function preload(arrayOfImages) {
    jQuery(arrayOfImages).each(function(){
		//console.log (this);
        
		//TURN ME ON
		//jQuery('<img/>')[0].src = this;
        
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

function loadCufon () {
	Cufon.replace('.branch', {
	  fontFamily: 'Benguiat-Heavy',
	  fontSize: '14px',
	  textTransform : 'uppercase'
	  });
	Cufon.replace('#block-block-6 h2', {
	  fontFamily: 'Benguiat-Heavy',
	  fontSize: '22px',
	  textTransform : 'uppercase'
	  });
	
	
}
