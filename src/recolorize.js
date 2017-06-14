var smoothize = require("./smoothize");
var rgb = require("./rgb");

function recolorize(color1, color2, ease) {
  var rgbcolor1 = rgb.hexToRgb(color1);
  var rgbcolor2 = rgb.hexToRgb(color2);
  var rgbcolor3 = {};
  for(let name in rgbcolor1) {
    rgbcolor3[name] = Math.round(smoothize(rgbcolor1[name], rgbcolor2[name], ease));
  }

  return rgb.rgbToHex(rgbcolor3.r, rgbcolor3.g, rgbcolor3.b);
}

module.exports = recolorize;