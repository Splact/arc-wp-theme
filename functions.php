<?php
  require_once get_template_directory() . '/inc/load-plugins.php';
  require_once get_template_directory() . '/inc/register-field-groups.php';
  require_once get_template_directory() . '/inc/register-custom-rest-routes.php';

  // Specify theme supports
  add_theme_support( 'post-thumbnails');

  // WP Hooks
  add_action( 'wp_enqueue_scripts', 'arc_scripts' );
  add_action( 'init', 'arc_init' );
  add_action( 'rest_api_init', 'arc_register_custom_rest_routes' );

  function arc_init() {
    arc_register_photo_post_types();
    arc_register_field_groups();
    arc_setup_featured_images_sizes();
  }

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

  function arc_register_photo_post_types() {
    // photo posts
    register_post_type(
      'photo',
      array(
        'labels' => array(
          'name' => __( 'Photos' ),
          'singular_name' => __( 'Photo' ),
          'add_new_item' => __('Add new photo')
        ),
        'public' => true,
        'has_archive' => false,
        'query_var' => false,
        'supports' => array(
          'title',
          'thumbnail'
        ),
        'menu_position' => 5,
        'menu_icon' => 'dashicons-camera'
      )
    );
    // camera posts
    register_post_type(
      'camera',
      array(
        'labels' => array(
          'name' => __( 'Cameras' ),
          'singular_name' => __( 'Camera' ),
          'add_new_item' => __('Add new camera')
        ),
        'public' => true,
        'has_archive' => false,
        'query_var' => false,
        'supports' => array(
          'title'
        ),
        'menu_position' => 10,
        'menu_icon' => 'dashicons-camera'
      )
    );
    // lens posts
    register_post_type(
      'lens',
      array(
        'labels' => array(
          'name' => __( 'Lenses' ),
          'singular_name' => __( 'Lens' ),
          'add_new_item' => __('Add new lens')
        ),
        'public' => true,
        'has_archive' => false,
        'query_var' => false,
        'supports' => array(
          'title'
        ),
        'menu_position' => 11,
        'menu_icon' => 'dashicons-camera'
      )
    );
  }

  function arc_setup_featured_images_sizes() {
    // add_image_size( 'full', 1920, 1080 );
  }
?>