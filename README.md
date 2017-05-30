# easing-animation
### v1.0.0 ( last update: 30 may 2017 )

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

### Available easing:
* linear
* easein
* easeout
* easeinout