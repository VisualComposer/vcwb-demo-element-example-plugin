<?php
/**
Plugin Name: VCWB Elements API example
Plugin URI: http://visualcomposer.com
Description: VCWB Elements API example
Version: 1.0
Author: Visual Composer
Author URI: http://visualcomposer.com
*/

// don't load directly
if (!defined('ABSPATH')) {
    die('-1');
}

add_action(
/**
 * @param $api \VisualComposer\Modules\Api\Factory
 */
    'vcv:api',
    function ($api) {
        $elementsToRegister = [
            'logoSuperTest',
            'textTest',
            'imageGalleryWithTestZoom',
        ];
        $pluginBaseUrl = rtrim(plugins_url(basename(__DIR__)), '\\/');
        /** @var \VisualComposer\Modules\Elements\ApiController $elementsApi */
        $elementsApi = $api->elements;
        foreach ($elementsToRegister as $tag) {
            $manifestPath = __DIR__ . '/elements/' . $tag . '/manifest.json';
            $elementBaseUrl = $pluginBaseUrl . '/elements/' . $tag;
            $elementsApi->add($manifestPath, $elementBaseUrl);
        }
    }
);
