<?php
  function arc_register_field_groups() {
    if(function_exists("register_field_group")) {
      register_field_group(array (
        'id' => 'acf_photo-info',
        'title' => 'Photo Info',
        'fields' => array (
          array (
            'key' => 'field_57d59ed49f935',
            'label' => 'Description',
            'name' => 'description',
            'type' => 'textarea',
            'instructions' => 'Add a short description',
            'default_value' => '',
            'placeholder' => '',
            'maxlength' => 140,
            'rows' => 3,
            'formatting' => 'none',
          ),
          array (
            'key' => 'field_57d5a278d1dbb',
            'label' => 'Date',
            'name' => 'date',
            'type' => 'date_picker',
            'instructions' => 'Select the date when the photo was taken',
            'date_format' => 'yyyymmdd',
            'display_format' => 'dd/mm/yy',
            'first_day' => 1,
          ),
          array (
            'key' => 'field_57d5a8de62394',
            'label' => 'Preferred orientation',
            'name' => 'orientation',
            'type' => 'select',
            'instructions' => 'Select how the photo should be shown',
            'required' => 1,
            'choices' => array (
              'none' => 'None',
              'portrait' => 'Portrait',
              'landscape' => 'Landscape',
            ),
            'default_value' => 'none',
            'allow_null' => 0,
            'multiple' => 0,
          ),
          array (
            'key' => 'field_57d59f3d9f936',
            'label' => 'Location',
            'name' => 'location',
            'type' => 'google_map',
            'instructions' => 'Select the place where the photo was taken',
            'center_lat' => '40.8542499',
            'center_lng' => '14.2878391',
            'zoom' => 12,
            'height' => 320,
          ),
          array (
            'key' => 'field_57d5a0efd1db9',
            'label' => 'Camera',
            'name' => 'camera',
            'type' => 'post_object',
            'post_type' => array (
              0 => 'camera',
            ),
            'taxonomy' => array (
              0 => 'all',
            ),
            'allow_null' => 1,
            'multiple' => 0,
          ),
          array (
            'key' => 'field_57d5a10ed1dba',
            'label' => 'Lens',
            'name' => 'lens',
            'type' => 'post_object',
            'post_type' => array (
              0 => 'lens',
            ),
            'taxonomy' => array (
              0 => 'all',
            ),
            'allow_null' => 1,
            'multiple' => 0,
          ),
        ),
        'location' => array (
          array (
            array (
              'param' => 'post_type',
              'operator' => '==',
              'value' => 'photo',
              'order_no' => 0,
              'group_no' => 0,
            ),
          ),
        ),
        'options' => array (
          'position' => 'acf_after_title',
          'layout' => 'no_box',
          'hide_on_screen' => array (
          ),
        ),
        'menu_order' => 0,
      ));
    }
  }
?>
