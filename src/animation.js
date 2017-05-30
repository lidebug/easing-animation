var js = require("libraryjs");
var BasicEasing = require("./easing");

var easing = {
  linear: BasicEasing.linear,
  easein: BasicEasing.easeInCubic,
  easeout: BasicEasing.easeOutCubic,
  easeinout: BasicEasing.easeInOutCubic
}

class Animation {

  constructor(param) {
    var f = this;

    f.interval = new js.Interval();
    f.start(param);
  }

  //from, to, duration, callback, easing?, onload?, interval?
  start(param) {
    var f = this;

    f.stop();

    param.easing = js.or(param.easing, easing.easeinout);
    param.interval = js.or(param.interval, 5);

    var n = Math.floor(param.duration/param.interval);

    var i = 0;
    f.interval.create(param.interval, () => {
      var eased = param.easing(i/n);
      var result = param.from + (param.to - param.from) * eased;
      param.callback(result);
      if (i == n) {
        //onload:
        f.interval.stop();
        if (js.is(param.onload)) param.onload(param.to);
        return;
      }
      i++;
    });
  }

  stop() {
    var f = this;

    f.interval.stop();

    return f;
  }

}

function create(param) {
  return new Animation(param)
}

module.exports = {
  create: create,
  easing: easing
};