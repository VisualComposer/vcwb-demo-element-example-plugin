<?php

namespace logoSuperTest\logoSuperTest;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Framework\Container;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Modules\Elements\Traits\AddShortcodeTrait;

class LogoSuperTestShortcodes extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;
    use AddShortcodeTrait;

    public function __construct()
    {
        if (!defined('VCV_LOGO_SUPER_TEST_WIDGET_SHORTCODE')) {
            $this->addEvent('vcv:inited', 'registerShortcode');
            $this->addFilter('vcv:editor:variables vcv:editor:variables/logoSuperTest', 'getVariables');
            define('VCV_LOGO_SUPER_TEST_WIDGET_SHORTCODE', true);
        }
    }

    /**
     * Register Shortcode
     */
    protected function registerShortcode()
    {
        $this->addShortcode('vcv_logo', 'renderLogo');
    }

    protected function getVariables($variables)
    {
        if (has_custom_logo()) {
            $value = get_custom_logo();
            $variables[] = [
                'key' => 'vcvLogo',
                'value' => $value,
                'type' => 'variable',
            ];
        }

        return $variables;
    }

    /**
     * @param $atts
     * @param $content
     * @param $tag
     *
     * @return string
     */
    protected function renderLogo($atts, $content, $tag)
    {
        if (has_custom_logo()) {
            if (isset($atts) && isset($atts['size'])) {
                $this->sizes = explode('x', $atts['size']);
                $this->custom_logo_id = get_theme_mod('custom_logo');
                if (intval($this->sizes[0]) && intval($this->sizes[1])) {
                    $this->wpAddFilter(
                        'wp_get_attachment_image_src',
                        function ($image, $attachment_id, $size, $icon) {
                            if ($attachment_id === $this->custom_logo_id) {
                                $image[1] = intval($this->sizes[0]);
                                $image[2] = intval($this->sizes[1]);
                            }

                            return $image;
                        }
                    );
                    $this->wpAddFilter(
                        'wp_get_attachment_image_attributes',
                        function ($attr, $attachment, $size) {
                            if ($attachment->ID === $this->custom_logo_id) {
                                $attr['width'] = $this->sizes[0];
                                $attr['height'] = $this->sizes[1];
                                $attr['sizes'] = '(max-width: ' . $this->sizes[0] . 'px) 100vw, ' . $this->sizes[0]
                                    . 'px';
                            }

                            return $attr;
                        }
                    );
                }
            }
            $html = get_custom_logo();

            return $html;
        } else {
            return '';
        }
    }
}
