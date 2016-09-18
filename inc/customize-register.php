<?php
  function arc_customize_register( $wp_customize ) {

    // Add SVG Logo setting
    $wp_customize->add_setting( 'svg_logo' , array(
      'default' => get_template_directory_uri() . '/assets/icons/logo.svg',
      'transport'   => 'refresh',
    ) );
    $wp_customize->add_control( new WP_Customize_Upload_Control(
      $wp_customize,
      'svg_logo',
      array(
        'label'      => __( 'SVG Logo', 'arc' ),
        'section'    => 'title_tagline',
        'settings'   => 'svg_logo',
    ) ) );

    // *** SECTION: Welcome page
    // Create section
    $wp_customize->add_section( 'arc_welcome_page' , array(
      'title'      => __( 'Welcome Page', 'arc' ),
      'priority'   => 30,
    ) );

    // Add Background setting
    $wp_customize->add_setting( 'welcome_page_background' , array(
      'default' => get_template_directory_uri() . '/assets/images/welcome-background-default.jpg',
      'transport' => 'refresh',
    ) );
    $wp_customize->add_control( new WP_Customize_Upload_Control(
      $wp_customize,
      'welcome_page_background',
      array(
        'label' => __( 'Background', 'arc' ),
        'section' => 'arc_welcome_page',
        'settings' => 'welcome_page_background',
    ) ) );

    // Add Overlay setting
    $wp_customize->add_setting( 'welcome_page_overlay_color' , array(
      'default' => '#000000',
      'transport' => 'refresh',
    ) );
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'welcome_page_overlay_color', array(
      'label' => __( 'Overlay Color', 'arc' ),
      'section' => 'arc_welcome_page',
      'settings' => 'welcome_page_overlay_color',
    ) ) );
    $wp_customize->add_setting( 'welcome_page_overlay_opacity' , array(
      'default' => 'subtle',
      'transport' => 'refresh',
    ) );
    $wp_customize->add_control( 'welcome_page_overlay_opacity', array(
      'type' => 'select',
      'label' => __( 'Overlay Opacity', 'arc' ),
      'section' => 'arc_welcome_page',
      'choices' => array(
        'disabled' => __('Disabled', 'arc') . ' (0%)',
        'subtle' => __('Subtle', 'arc') . ' (20%)',
        'moderate' => __('Moderate', 'arc') . ' (50%)',
        'intense' => __('Intense', 'arc') . ' (80%)'
      )
    ));

  }
?>
