const { expect } = require('chai');
const { isSymmetric } = require("../05.CheckForSymmetry");

describe('isSymmetric', () => {

    it('should return true if the given string is a symmetric string', () => {
        let arr = [1, 2, 3, 4, 3, 2, 1];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    });

    it('should return false if the given string is not a symmetric string', () => {
        let arr = [1, 2, 3, 1, 5, 5];
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    });

    it('should return true if the given string is a symmetric string', () => {
        let arr = [1, 2, 3, 3, 2, 1];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    });

    it('should return false if the given string is not a symmetric string', () => {
        let arr = [1, 2, 3, 4, 1, 5, 5];
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    });

    it('should return false if the given string is not an array', () => {
        let arr = 'Invalid array';
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    });

    it('should return true if the given string is a symmetric string', () => {
        let arr = ['a', 'b', 'c', 'd', 'c', 'b', 'a'];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    });

    it('should return false if the given string is not a symmetric string', () => {
        let arr = ['a', true, false, 'a', '1', '456', '5'];
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    });

    it('should return true if the given strings are symmetric', () => {
        let arr = ['a', 'b', 'b', 'a'];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    });

    it('should return true with 1 string param', () => {
        let arr = ['abcba'];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    });

    it('should return false if the given string is not symmetric', () => {
        let arr = [true, false, true, true];
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    });

    it('should return false if the given string is not symmetric', () => {
        let arr = 123;
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    });

    it('returns false for type mismatched elements ', () => {
        let arr = [1, 2, '1'];
        let result = isSymmetric(arr);
        expect(result).to.be.false;
    })
});