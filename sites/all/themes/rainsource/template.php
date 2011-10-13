<?php

//function goductless_theme(&$existing, $type, $theme, $path) {
	//dpm ($existing);
// Modify the theme cache directly by modifying $existing
//}

function rainsource_preprocess_page(&$variables) {
  // Get the entire main menu tree
  $main_menu_tree = menu_tree_all_data('main-menu');
  //print "valval";
  // Add the rendered output to the $main_menu_expanded variable
  //$variables['main_menu_expanded'] = menu_tree_output($main_menu_tree);
  
  //load menu js
  //drupal_add_js(drupal_get_path('theme', 'rainsource') .'/js/bxslider.source/jquery.bxSlider.js');
  //drupal_add_css(drupal_get_path('theme', 'rainsource') .'/css/core.less');
  drupal_add_js(drupal_get_path('theme', 'rainsource') .'/js/cufon-yui.js');
  drupal_add_js(drupal_get_path('theme', 'rainsource') .'/js/Benguiat_heavy.font.js');
  drupal_add_js(drupal_get_path('theme', 'rainsource') .'/js/less-1.1.3.min.js');
  drupal_add_js(drupal_get_path('theme', 'rainsource') .'/js/jquery.ba-hashchange.min.js');
  drupal_add_js(drupal_get_path('theme', 'rainsource') .'/js/jquery.timers-1.2.js');
  drupal_add_js(drupal_get_path('theme', 'rainsource') .'/js/funcs.js');
  
  //dpm ($variables);
  

  
  
  //add the sharethis code. TODO: make this only appear on the views pages that need it.
  /*
  drupal_add_js('http://w.sharethis.com/button/buttons.js', 'external');
  drupal_add_js('
      stLight.options({ publisher:"baf5d95e-ecdc-4b35-b9a3-f22f85ddc016", });
      jQuery("a.st_sharethis").click(function() {return false;});
    ', 'external');
  */
 
}

function rainsource_menu_link(array $variables) {
	// FCP: Sebastian Chedal
	// Theming code for top-menu:
	//
	// extended-support, quetions: contact@fountain-city.com
	//
	// modified menu to accomodate the various fixed positions,
	// inter-level roll over and active-state recalls for the menu
	// at its different use-cases and graphics per/level as well as
	// fixed positions for sub-nav for different areas:
	//
	// mainly we are adding a lot of class items to the menu
	// suplemented by block_menu which adds active-trail to enclosing li
	// elements necessary to track active imagary.
  
  $element = $variables['element'];
  $sub_menu = '';
  
  //adding mlid:
  $element['#attributes']['class'][] = 'menu-' . $element['#original_link']['mlid'];
  //adding depth:
  $element['#attributes']['class'][] = 'depth-' . $element['#original_link']['depth'];
  
  //track if i need to add an additional region to menu:
  $returnval ='<span class="clickLeaf"></span>';

  //add region to expand for roll-over tracking of sub-area:
  //module delata 1 is the consumer-site main menu
  
  
  if (($element['#bid']['module'] == 'menu_block') && ($element['#bid']['delta'] == 1)) {
	  //check only if correct menu, if so, apply to depth-1 only:
	  if ($element['#original_link']['depth'] == 1) {
		$returnval = '<span class="hotArea"></span>';
	  }
  }
  
  
  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
	
	$element['#localized_options']['attributes']['class'][] = 'branch';
	$element['#attributes']['class'][] = 'showsubroll';
  } else {
	  //adding stub if end-point:
  	$element['#localized_options']['attributes']['class'][] = 'stub';
  }
  if (($element['#bid']['module'] == 'menu_block') && ($element['#bid']['delta'] == 1)) {
	  $element['#localized_options']['html'] = false;
	  $element['#localized_options']['alias'] = true;
	  //$element['#localized_options']['fragment'] = ' ';
	  $element['#localized_options']['prefix'] = '#';
	  
  }
  
  $output = l($element['#title'],($element['#href']), $element['#localized_options']);
  
  
  if (($element['#bid']['module'] == 'menu_block') && ($element['#bid']['delta'] == 1)) {
  	$output = str_replace ("/%23","#", $output);
  }
  
  
  //$output = '<a href="#"'.$element['#href'].'" class="'. .'" title = "'.$element['#title'].'">'.$element['#title'].'</a>';
  
  //adding return val to end of output-string:
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . $returnval . "</li>\n" ;
}

function rainsource_image_style($variables) {
  $style_name = $variables['style_name'];
  $path = $variables['path'];

  // theme_image() can only honor the $getsize parameter with local file paths.
  // The derivative image is not created until it has been requested so the file
  // may not yet exist, in this case we just fallback to the URL.
  $style_path = image_style_path($style_name, $path);
  if (!file_exists($style_path)) {
    $style_path = image_style_url($style_name, $path);
  }
  $variables['path'] = $style_path;

  if (is_file($style_path)) {
    if (list($width, $height, $type, $attributes) = @getimagesize($style_path)) {
      $variables['width'] = $width;
      $variables['height'] = $height;
    }
  }
 
  return theme('image', $variables);
}

function rainsource_node_form($form, &$form_state, $node) {
	//dpm ($form);
	//return $form
}

function rainsource_page_node_form ($form) {
	dpm("it works!");
}



