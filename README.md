
[npm-icon]: https://nodei.co/npm/videojs-css.png?downloads=true&downloadRank=true&stars=true

[npm-link]: https://nodei.co/npm/videojs-css/

# videojs-css

[![NPM][npm-icon]][npm-link]

![alt text](https://github.com/facundofernandez/videojs-css/blob/master/img/1.png "Logo Title Text 1")
![alt text](https://github.com/facundofernandez/videojs-css/blob/master/img/2.png "Logo Title Text 1")
![alt text](https://github.com/facundofernandez/videojs-css/blob/master/img/3.png "Logo Title Text 1")

## Installation

```sh
npm install --save videojs-css
```

## Usage

To include videojs-css on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-css.min.js"></script>
<script>
  var player = videojs('my-video');

  player.css({
      controlBar:{
        borderRadius: "20px",
        marginBottom: "15px",
        width:"90%",
        marginLeft:"5%",
        fontSize:"1.5em",
        background:"#3F51B5"
      },
      bigPlayButton:{
        borderRadius: "10%",
        width:"150px",
        height:"150px",
        lineHeight:"150px",
        fontSize:"80px",
        border:"none",
        left:"50%",
        top:"50%",
        transform:"translate(-50%,-50%)",
        background:"#3F51B5"

      }
  });
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-css via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-css');

var player = videojs('my-video');

player.css({
      controlBar:{
        borderRadius: "20px",
        marginBottom: "15px",
        width:"90%",
        marginLeft:"5%",
        fontSize:"1.5em",
        background:"#3F51B5"
      },
      bigPlayButton:{
        borderRadius: "10%",
        width:"150px",
        height:"150px",
        lineHeight:"150px",
        fontSize:"80px",
        border:"none",
        left:"50%",
        top:"50%",
        transform:"translate(-50%,-50%)",
        background:"#3F51B5"

      }
  });
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-css'], function(videojs) {

  var player = videojs('my-video');

  player.css({
      controlBar:{
        borderRadius: "20px",
        marginBottom: "15px",
        width:"90%",
        marginLeft:"5%",
        fontSize:"1.5em",
        background:"#3F51B5"
      },
      bigPlayButton:{
        borderRadius: "10%",
        width:"150px",
        height:"150px",
        lineHeight:"150px",
        fontSize:"80px",
        border:"none",
        left:"50%",
        top:"50%",
        transform:"translate(-50%,-50%)",
        background:"#3F51B5"

      }
  });
});
```

## License

MIT. Copyright (c) Facundo Fernandez &lt;ffernandez@edge-americas.com&gt;


[videojs]: http://videojs.com/
