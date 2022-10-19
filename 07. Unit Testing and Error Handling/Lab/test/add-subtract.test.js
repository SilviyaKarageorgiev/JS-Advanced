const { expect, assert } = require('chai');
const { createCalculator } = require("../07.AddSubtract");

describe('Calculator', () => {

    it('should return an object with functions as properties', () => {
        assert.isObject(createCalculator());
    });

    it('should keep internal sum that cannot be modified from outside', () => {
        let calc = createCalculator();
        calc.add(10);
        let result = calc.get();
        expect(result).to.be.equal(10);
    });

    it('should add work properly when input is a string', () => {
        let calc = createCalculator();
        calc.add('10');
        let result = calc.get();
        expect(result).to.be.equal(10);
    });

    it('should subtract work properly when input is a number', () => {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract(5);
        let result = calc.get();
        expect(result).to.be.equal(5);
    });

    it('should add work properly when input is a string', () => {
        let calc = createCalculator();
        calc.add('10');
        calc.subtract('5')
        let result = calc.get();
        expect(result).to.be.equal(5);
    });

    it('should return undefined when input is invalid', () => {
        let calc = createCalculator();
        calc.add('Not a number');
        let result = calc.get();
        expect(result).to.be.NaN;
    });

});