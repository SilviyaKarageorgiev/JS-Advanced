const { expect } = require('chai');
const { isOddOrEven } = require("../02.EvenOrOdd");

describe('isOddOrEven', () => {

    it('should return undefined when passed param is not a string', () => {
        expect(isOddOrEven(123)).to.be.undefined;
    });

    it('should return undefined when passed param is a null', () => {
        expect(isOddOrEven(null)).to.be.undefined;
    });

    it('should return undefined when passed param is an array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('should return even when passed param is with even symbols', () => {
        expect(isOddOrEven('form')).to.be.equal('even');
    });

    it('should return odd when passed param is with odd symbols', () => {
        expect(isOddOrEven('wow')).to.be.equal('odd');
    });
});