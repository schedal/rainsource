<?php if ($rows): ?><div class="sideBox">
  <div class="bumpOut"></div>
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($header): ?>
    <div class="view-header">
      <?php print $header; ?>
    </div>
  <?php endif; ?>


  
    <div id="targetLoad"><?php print $rows; ?></div>
    
</div><?php endif; ?>