# easing-animation
### v1.0.4 ( last update: 8 june 2017 )

Animation builder.

### Install
```javascript
npm i easing-animation --save
```

### Node.js
```javascript
var Animation = require("easing-animation");
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