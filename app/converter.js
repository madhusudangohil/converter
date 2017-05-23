exports.rgbToHex = function(red, green, blue) {

  var redHex   = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex  = blue.toString(16);

  return pad(redHex) + pad(greenHex) + pad(blueHex);

};

function pad(hex) {
  return (hex.length === 1 ? "0" + hex : hex);
}

exports.hexToRgb = function(hex) {

  var red   = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue  = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];

};

exports.toCentrigrade = function(fehrenheit) {
  var cent =(fehrenheit - 32) * .5556
  return Math.round(cent*10)/ 10;
}

exports.toFehrenheit = function(centigrade) {
  var feh = (centigrade * 1.8) + 32
  return feh;
}