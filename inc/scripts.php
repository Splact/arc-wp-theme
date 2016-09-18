<?php
  function arc_scripts() {
    // TODO: find a solution for hashed files
    wp_enqueue_script( 'arc-script-manifest', get_template_directory_uri() . '/build/manifest.js', array(), false, true);
    wp_enqueue_script( 'arc-script-vendor', get_template_directory_uri() . '/build/vendor.js', array(
      'arc-script-manifest'
    ), false, true);
    wp_enqueue_script( 'arc-script-app', get_template_directory_uri() . '/build/app.js', array(
      'arc-script-manifest',
      'arc-script-vendor'
    ), false, true);
    wp_enqueue_style( 'arc-style-app', get_template_directory_uri() . '/build/css/app.css');
  }
?>
