var expect = require('chai').expect;
var converter = require('../app/converter');
describe("Color code converter", function(){
    describe("RGB to Hex", function(){
        it("coverts the basic colors", function(){
            var redHex = converter.rgbToHex(255,0,0);
            var greenHex = converter.rgbToHex(0,255,0);
            var blueHex = converter.rgbToHex(0,0,255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("Hex to RGB", function(){
        it("coverts the basic colors", function(){
            var red   = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue  = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    } );
});


describe("Temperature converter", function(){
    describe("Feh to Cent", function(){
      it("converts fehranhite to centigrade", function(){
          var cent = converter.toCentrigrade(100);
          expect(cent).to.equal(37.8);
      });
    });

    describe("Cent to Feh", function(){
      it("converts centigrade to fehranhite", function(){
          var feh = converter.toFehrenheit(38);
          expect(feh).to.equal(100.4);
      });
    });


});
