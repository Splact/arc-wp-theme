<?php
  function arc_register_custom_api_fields() {
    $post_types = get_post_types(['public'=>true], 'names');
    foreach ($post_types as $type) {
      register_api_field( $type,
          'acf',
          array(
              'get_callback'    => 'arc_get_acf_fields',
              'update_callback' => null,
              'schema'          => null,
          )
      );
    }
  }
  function arc_get_acf_fields( $object, $field_name, $request ) {
      return get_fields($object[ 'id' ]);
  }
?>
