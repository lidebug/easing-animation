var index = {};
Object.assign(index, require("./src/animation"));
Object.assign(index, require("./src/rgb"));
Object.assign(index, {
  recolorize: require("./src/recolorize"),
  smoothize: require("./src/smoothize"),
  randcolor: require("./src/randcolor")
});

module.exports = index;