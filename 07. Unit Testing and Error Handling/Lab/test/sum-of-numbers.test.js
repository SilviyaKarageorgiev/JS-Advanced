const { expect } = require('chai');

const { sum } = require("../03.DeckOfCards");

describe('sum', () => {

    it('should return correct result', () => {
        let arr = [1, 2, 3];
        expect(sum(arr)).to.be.equal(6);
    });
});