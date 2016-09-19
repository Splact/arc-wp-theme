<?php

  function arc_register_custom_rest_routes() {
    $namespace = 'arc';
    register_rest_route( $namespace, '/settings', array(
      'methods' => 'GET',
      'callback' => 'arc_get_settings',
    ) );
  }

  function arc_get_settings() {
    $settings = array(
      'name' => get_bloginfo('name'),
      'description' => get_bloginfo('description'),
      'svgLogo' => get_theme_mod('svg_logo'),
      'theme' => get_theme_mod('theme', 'hera'),
      'welcomePageBackground' => get_theme_mod(
        'welcome_page_background',
        get_template_directory_uri() . '/assets/images/welcome-background-default.jpg'
      ),
      'welcomePageOverlayColor' => get_theme_mod('welcome_page_overlay_color', '#000000'),
      'welcomePageOverlayOpacity' => get_theme_mod('welcome_page_overlay_opacity', 'subtle'),
    );

    return $settings;
  }
?>
