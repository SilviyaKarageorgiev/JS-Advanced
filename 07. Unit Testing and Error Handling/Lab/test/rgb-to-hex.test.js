const { expect } = require('chai');
const { rgbToHexColor } = require("../06.RGBtoHex");

describe('RGBToHexColor', () => {

    it('should return color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });

    it('should return color', () => {
        expect(rgbToHexColor(222, 122, 55)).to.be.equal("#DE7A37");
    });

    it('should return color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });

    it('should return undefined because param is out of range', () => {
        expect(rgbToHexColor(300, 50, 100)).to.be.undefined;
    });

    it('should return undefined because of invalid input', () => {
        expect(rgbToHexColor(-20, -500, 100)).to.be.undefined;
    });

    it('should return undefined because of not enough params', () => {
        expect(rgbToHexColor(150, 100)).to.be.undefined;
    });

    it('should return undefined because of invalid input', () => {
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('should return undefined because of invalid input', () => {
        expect(rgbToHexColor('a', '234', true)).to.be.undefined;
    });

});