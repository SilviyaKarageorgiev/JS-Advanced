const { mathEnforcer } = require("../04.MathEnforcer");
const { expect } = require('chai');

describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('should return undefined if parameter is not a number', () => {
            expect(mathEnforcer.addFive('mocha')).to.be.equal(undefined);
            expect(mathEnforcer.addFive([])).to.be.equal(undefined);
            expect(mathEnforcer.addFive({})).to.be.equal(undefined);
            expect(mathEnforcer.addFive()).to.be.equal(undefined);
        });

        it('should add five to number', () => {
            expect(mathEnforcer.addFive(20)).to.be.equal(25);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
            expect(mathEnforcer.addFive(2.25)).to.be.equal(7.25);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined if parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('mocha')).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen()).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen('2.5')).to.be.equal(undefined);
        });
        it('should subtract ten from number', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30);
            expect(mathEnforcer.subtractTen(-20.5)).to.be.equal(-30.5);
        });
    });

    describe('sum', () => {
        it('should return undefined if one of parameters are not a number', () => {
            expect(mathEnforcer.sum('mocha', true)).to.be.equal(undefined);
            expect(mathEnforcer.sum([], 5)).to.be.equal(undefined);
            expect(mathEnforcer.sum(3, {})).to.be.equal(undefined);
            expect(mathEnforcer.sum(3.5, true)).to.be.equal(undefined);
        });
        it('should sum numbers', () => {
            expect(mathEnforcer.sum(20, 50)).to.be.equal(70);
            expect(mathEnforcer.sum(0, 100)).to.be.equal(100);
            expect(mathEnforcer.sum(-20, -50)).to.be.equal(-70);
            expect(mathEnforcer.sum(5.25, 5.25)).to.be.equal(10.50);
        });
    });

});