# easing-animation
### v1.1.1 ( last update: 24 june 2017 )

Animation builder.

### Install
npm
```javascript
npm i easing-animation --save
```

Node.js
```javascript
var Animation = require("easing-animation");
```

Browser
```javascript
<script src="/node_modules/easing-animation/dist/easing-animation.js"></script>
```

### How to use
Start new one
```javascript
var animation = Animation.create();
animation.start({
  from: 5, to: 7,
  duration: 100,
  easing: Animation.easing.easeout,
  callback: (v) => {
    //on going
    console.log(v);
  },
  onload: (v) => {
    //When it's done
    console.log(`onload: ${v}`);
  }
});
```
Stop when necessary
```javascript
animation.stop();
```
On going?
```javascript
if (animation.isAnimated) {
  // ...
}
```

### Included easing:

* linear
* easein
* easeout
* easeinout

You are always able to use your own. Example:
```javascript
// Like this
function linear(v) => {
  return v;
}

// Or something else
function easeInQuad(v) => {
  return v * v;
}

Animation.create({
  from: 1, to: 100,
  duration: 1000,
  easing: easeInQuad, // <-- the one
  callback: (v) => {
    //on going
    console.log(v);
  }
});
```

### Extra
smoothize(from, to, ease)
```javascript
Animation.create({
  from: 0, to: 1,
  duration: 1000,
  easing: Animation.easing.easeinout,
  callback: (v) => {
    var length = Animation.smoothize(300, 320, v);
    var width = Animation.smoothize(110, 200, v);

    // ...
  }
});
```

recolorize(color1, color2, ease)
```javascript
Animation.create({
  from: 0, to: 1,
  duration: 1000,
  easing: Animation.easing.easeinout,
  callback: (v) => {
    var color = Animation.recolorize("red", "#1843E2", v);

    // ...
  }
});
```

hexToRgb(hex)
```javascript
var rgb = Animation.hexToRgb("#41D73D");
var red = Animation.hexToRgb("red");
```

rgbToHex(r, g, b)
```javascript
var hex = Animation.rgbToHex(65, 215, 61);
var red = Animation.rgbToHex(255, 0, 0);
```

randcolor()
```javascript
var color = Animation.randcolor();
```