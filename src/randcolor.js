var js = require("libraryjs");

function randcolor() {
  var a = "";
  for(let i=0; i<6; i++) a += js.rand(0,15).toString(16);
  return "#"+a;
}

module.exports = randcolor;