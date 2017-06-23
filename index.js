const objectAssign = require("object-assign");

var index = {};
objectAssign(index, require("./src/animation"));
objectAssign(index, require("./src/rgb"));
objectAssign(index, {
  recolorize: require("./src/recolorize"),
  smoothize: require("./src/smoothize"),
  randcolor: require("./src/randcolor")
});

module.exports = index;