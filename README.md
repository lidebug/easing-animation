# easing-animation
### v1.0.2 ( last update: 31 may 2017 )

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
```javascript
Animation.create({
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

### Included easing:

* linear
* easein
* easeout
* easeinout

You are always able to use your own. Example:
```javascript
// no easing, no acceleration
function linear(v) => {
  return v;
}
// accelerating from zero velocity
function easeInQuad(v) => {
  return v * v;
}
```