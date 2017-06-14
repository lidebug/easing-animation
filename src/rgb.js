var colors = require("./colors");

function hexToRgb(hex) {
  if (hex[0] === "#") {
    hex = hex.substr(1, hex.length - 1);
    var n;
  }
  else hex = colors[hex];

  if (hex.length === 3) {
    var newhex = "";
    for(let n16 of hex.split("")) newhex += n16+n16;
    hex = newhex;
  }

  var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  if ( (0 > r || r > 255) || (0 > g || g > 255) || (0 > b || b > 255) ) return null;
  var componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgba(hexColor, opacity) {
  var rgb = hexToRgb(hexColor);
  if (rgb === null) rgb = { r:0, b:0, g:0 };
  return "(" + rgb.r +","+ rgb.g +","+ rgb.b +","+ opacity +")";
}

module.exports = {
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  rgba: rgba
};