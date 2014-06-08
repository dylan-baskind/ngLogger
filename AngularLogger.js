var __slice = [].slice;

angular.module('ngLogger', []).factory("log", function() {
  var angularLogger, blue, cyan, green, red, yellow;
  yellow = '#FF851B';
  red = '#FF4136';
  blue = '#001F3F';
  green = '#3D9970';
  cyan = '#008080';
  angularLogger = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return console.log.apply(console, args);
  };
  angularLogger.at = function() {
    var data;
    data = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    log("");
    log(("[c='color: " + yellow + "']AT:") + data + '[c]');
    return log("[c='color: " + yellow + "']-------------------------[c]");
  };
  angularLogger.doing = function() {
    var data;
    data = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return log(("[c='color: " + blue + "']") + data + '[c]');
  };
  angularLogger.say = function() {
    var data;
    data = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return log(data);
  };
  angularLogger.error = function() {
    var data;
    data = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    log("");
    log(("[c='color: " + red + "']") + "ERROR: " + data + "[c]");
    return log("[c='color: " + red + "']------------------------------[c]");
  };
  angularLogger.success = function() {
    var data;
    data = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    log("");
    return log(("[c='color: " + green + "']") + data + "[c]");
  };
  angularLogger.note = function() {
    var data;
    data = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return log(("[c='color: " + cyan + "']") + data + "[c]");
  };
  return angularLogger;
});