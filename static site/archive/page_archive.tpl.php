
<div id="totalContainer">
  <div class="main">
    <div id="header">
      <div id="logoClickArea"><?php print render($page['logoClickArea']); ?> </div>
      <div id="toggleArea"> <?php print render($page['topnav']); ?> <?php print $toggleButton; ?> </div>
      <div id="socialArea"> <?php print render($page['social_area']); ?> </div>
      <div id="primary_menu" class="defaultState">
	  <?php
      print render($page['mainMenu']);
	 // print render($main_menu_expanded);
	 //dpm(get_defined_vars());// $main_menu_expanded; ?>
      </div>
      <div id="secondary_menu">  </div>
    </div>
    <div id="middleArea">
      <?php if ($page['sidebar_right']) { ?>
      <table id="doubleColumns" cellspacing="7" cellpadding="7">
        <tbody>
          <tr>
            <td id="leftSide"><div class="contentArea">
                <?php if ($title): ?>
                <h1><?php print $title; ?></h1>
                <?php endif; ?>
                <?php print $messages; ?>
                <?php if ($tabs): ?>
                <div class="baseTabs"><?php print render($tabs); ?></div>
                <?php endif; ?>
                <?php print render($page['help']); ?>
                <?php if ($action_links): ?>
                <ul class="action-links">
                  <?php print render($action_links); ?>
                </ul>
                <?php endif; ?>
                <?php print render($page['content']); ?> <?php print $feed_icons; ?> </div></td>
            <td id="rightSide"><?php print render($page['sidebar_right']); ?></td>
          </tr>
        </tbody>
      </table>
      <?php } else { ?>
      <div class="singleColumn">
        <?php if ($title): ?>
        <h1><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print $messages; ?>
        <?php if ($tabs): ?>
        <div class="baseTabs"><?php print render($tabs); ?></div>
        <?php endif; ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
        <?php endif; ?>
        <?php print render($page['content']); ?> <?php print $feed_icons; ?> </div>
      <?php } ?>
    </div>
    <?php if ($page['footer']): ?>
    <div id="lowerArea" class="<?php print $section_subtitle; ?>">
      <div id="lowerBox"> <?php print render($page['footer']); ?>
        <div class="clearFloat"></div>
      </div>
    </div>
    <?php endif; ?>
    <div id="tagFooter"><?php print render($page['footer_menu']); ?></div>
  </div>
</div>
