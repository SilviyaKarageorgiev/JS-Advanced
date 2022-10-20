const { expect } = require('chai');
const { lookupChar } = require("../03.CharLookup");

describe('lookupChar', () => {

    it('should return undefined if first param is not a string', () => {
        expect(lookupChar(123, 2)).to.be.undefined;
    });

    it('should return undefined if first param is not a string', () => {
        expect(lookupChar([], 2)).to.be.undefined;
    });

    it('should return undefined if first param is not a string', () => {
        expect(lookupChar({}, 2)).to.be.undefined;
    });

    it('should return undefined if second param is not a number', () => {
        expect(lookupChar('123', '2')).to.be.undefined;
    });

    it('should return undefined if second param is not a number', () => {
        expect(lookupChar('123', true)).to.be.undefined;
    });

    it('should return undefined if second param is not a number', () => {
        expect(lookupChar('123', 5.5)).to.be.undefined;
    });

    it('should return undefined if two params are invalid', () => {
        expect(lookupChar(false, 'chai')).to.be.undefined;
    });

    it('should return incorrect index if index is out of range', () => {
        expect(lookupChar('Mocha', -1)).to.be.equal('Incorrect index');
    });

    it('should return incorrect index if index is out of range', () => {
        expect(lookupChar('Mocha', 7)).to.be.equal('Incorrect index');
    });

    it('should return correct result', () => {
        expect(lookupChar('Mocha', 3)).to.be.equal('h');
    });

    it('should return correct result', () => {
        expect(lookupChar('Mocha', 0)).to.be.equal('M');
    });
});