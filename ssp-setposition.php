<?php
/**
 * Plugin Name:       SSP Setposition
 * Description:       A block to set position in a Seriously Simple Podcast Player.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jean-Marie Favreau
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ssp-setposition
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_ssp_setposition_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_ssp_setposition_block_init' );


function wpb_hook_javascript_footer() {
	?>
	<script>

	function getClosestAudio(elem) {
		audios = elem.getElementsByTagName("audio");
		if (audios.length == 0) {
			parent = elem.parentElement;
			if (parent != null)
				return getClosestAudio(parent);
			else {
				return null;
			}
		}
		else
			return audios[0];
	}

	function sspSetposition(elem, mn, sec) {
		duration = mn * 60 + sec;
		element = getClosestAudio(elem);
		if (element != null) {
			element.currentTime = duration;
			element.play();
		}
	}
	</script>
		<?php
	  }
add_action('wp_footer', 'wpb_hook_javascript_footer');
