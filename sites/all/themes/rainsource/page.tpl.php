<div id="totalContainer">
	<div class="main">

        <div id="header">
        	
            <div id="logoArea"><?php print render($page['logoClickArea']); ?></div>
            <div id="sloganArea"><?php print render($page['siteSlogan']); ?></div>
            <div id="whoAreWe">
            	<div id="whoHeader"><?php print render($page['whoAreWe']); ?></div>
                <div id="whoBody" class="sideBox">
                
               <?php print render($page['whoAreWeDetails']); ?>
                	
                </div>
            </div>
        </div>
        <div id="bonusArea">
           	<?php print $messages; ?>
			<?php print render($page['help']); ?>
            <?php if ($action_links): ?>
            	<ul class="action-links">
            	  <?php print render($action_links); ?>
            	</ul>
            <?php endif; ?>
			
            <?php print render($page['bonusArea']); ?> <?php print $feed_icons; ?> </div>
		
        <div id="flowerArea">
        	<?php print render($page['mainMenu']); ?>
        	
        </div>
        
        <div id="textPosition">
            <div id="textArea">
            <?php //dpm ($page['content'] == ' ') { print '<div class="gottit"></div>'; }?>
			
			<?php //if (render($page['content']) == NULL ) { print 'HooL'; }?>
            <?php //if (render($page['content']) == '') { print 'Haal'; }?>
             <?php print render($page['content']); ?>
			 <?php print render($page['flower_text']); ?>
            </div> 
		</div>	
		
      </div> 
        
        
        
        
       
           
        <div id="tagFooter">
        		<?php print render($page['footer_text']); ?> Website by <a href="http://fountain-city.com">FCP</a>.
       	</div>
    
        
	</div>
</div>