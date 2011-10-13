jQuery(document).ready(function() { 
	
	/* add roll-over effect conditional classes for sub-nav */
  	jQuery('#primary_menu li.depth-1').hover(function ()
		{
			//console.debug('yel');
			jQuery('#primary_menu li.depth-1 a').removeClass('hover');
			
			jQuery('#primary_menu').addClass('confine');
			jQuery('#primary_menu').removeClass('defaultState');
			jQuery(this).addClass('hover');
		},
		function ()
		{
			jQuery(this).removeClass('hover');
			jQuery('#primary_menu').removeClass('confine');
			jQuery('#primary_menu').addClass('defaultState');
			
		}
	);
	jQuery('#primary_menu li.active-trail ul').hover(function ()
		{
			jQuery('#primary_menu').addClass('keepArrow');
			
		},
		function () 
		{
			jQuery('#primary_menu').removeClass('keepArrow');
		}
	);											   
													   
	/* activate the slider on the relevant pages */
	jQuery('.view-slideshows.view-display-id-page_3 .view-content').bxSlider(
														{
		mode:'fade',
		controls:false,
		pager:true,
		pause:5000,
		autoHover:true,
		pagerLocation:'top',
		auto:true
														});
	
	/* activate the slider on the relevant pages */
	jQuery('.view-slideshows.view-display-id-page_2 .view-content').bxSlider(
														{
		mode:'fade',
		controls:true,
		pager:true,
		autoHover:true,
		pagerLocation:'top',
		prevText:'<span class="red">< </span>PREV <span class="divider">|</div> ',
		nextText:'NEXT<span class="red"> ></span>',
		onAfterSlide: moveControlers,
		onBeforeSlide: clearControlers
														});
	
	/* activate the slider on the relevant pages */
	jQuery('.view-slideshows.view-display-id-page_1 .view-content').bxSlider(
														{
		mode:'fade',
		controls:true,
		pager:true,
		autoHover:true,
		pagerLocation:'top',
		prevText:'<span class="red">< </span>PREV <span class="divider">|</div> ',
		nextText:'NEXT<span class="red"> ></span>',
		onAfterSlide: moveControlers,
		onBeforeSlide: clearControlers
		
														});
	
	jQuery('.menu-mlid-1217').hover (function() {
		centerAlign ('.menu-mlid-1217 ul','.sub-1217');								  
											  });
	/* center align this sub-nav item */
	centerAlign ('.menu-mlid-1217 ul','.sub-1217');
	
});

function centerAlign (toAlign,toAlignto) {
	
	var targetWidth = jQuery(toAlignto).width();
	
	var itemWidth = jQuery(toAlign).width();
	/* hard coding center point since it is based on a fixed-position menu item: */
	var centerpoint = 552 - (itemWidth / 2);
	jQuery(toAlign).css('left',centerpoint);
}

function moveControlers (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {

	var pushMeDownToThis = jQuery('.view-slideshows .views-row-' + (currentSlideNumber+1) + ' .views-field-field-body').height();
	
	var pushMe = -263 + pushMeDownToThis;
	jQuery('.bx-prev').css('top',pushMe);
	jQuery('.bx-next').css('top',pushMe);
	jQuery('.bx-prev').show();
	jQuery('.bx-next').show();
	
}

function clearControlers () {
	jQuery('.bx-prev').hide();
	jQuery('.bx-next').hide();
}
