import videojs from 'video.js';
import {version as VERSION} from '../package.json';

const Plugin = videojs.getPlugin('plugin');

// Default options for the plugin.
const defaults = {};

/**
 * An advanced Video.js plugin. For more information on the API
 *
 * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
 */
class Css extends Plugin {

  /**
   * Create a Css plugin instance.
   *
   * @param  {Player} player
   *         A Video.js Player instance.
   *
   * @param  {Object} [options]
   *         An optional options object.
   *
   *         While not a core part of the Video.js plugin architecture, a
   *         second argument of options is a convenient way to accept inputs
   *         from your plugin's caller.
   */
  constructor(player, options) {
    // the parent class will add player under this.player
    super(player);

    this.options = videojs.mergeOptions(defaults, options);

    if (this.options.bigPlayButton) {
      const bigPlayButton = this.player.bigPlayButton.el();

      for (const elem in this.options.bigPlayButton) {
        bigPlayButton.style[elem] = this.options.bigPlayButton[elem];
      }
    }

    if (this.options.controlBar) {
      const controlBar = this.player.controlBar.el();

      for (const elem in this.options.controlBar) {
        controlBar.style[elem] = this.options.controlBar[elem];
      }
    }

    this.player.ready(() => {
      this.player.addClass('vjs-css');
    });
  }
}

// Define default values for the plugin's `state` object here.
Css.defaultState = {};

// Include the version number.
Css.VERSION = VERSION;

// Register the plugin with video.js.
videojs.registerPlugin('css', Css);

export default Css;
