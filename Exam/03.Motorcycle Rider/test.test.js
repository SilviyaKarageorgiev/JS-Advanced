const { expect } = require('chai');
const { motorcycleRider } = require('./app');

describe('motorcycleRider', () => {

    describe('licenseRestriction', () => {

        it('happy path', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });

        it('invalid input', () => {
            expect(() => motorcycleRider.licenseRestriction(3)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.licenseRestriction('a')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.licenseRestriction([])).to.throw('Invalid Information!');
        });
    });

    describe('motorcycleShowroom', () => {

        it('happy path', () => {
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 500)).to.equal('There are 2 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 125)).to.equal('There are 1 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 100)).to.equal('There are 0 available motorcycles matching your criteria!');
        });

        it('happy path, edge cases', () => {
            expect(motorcycleRider.motorcycleShowroom(["50", "250", "600"], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(["125"], 50)).to.equal('There are 0 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(["50"], 125)).to.equal('There are 1 available motorcycles matching your criteria!');
        });

        it('invalid input', () => {
            expect(() => motorcycleRider.motorcycleShowroom(3, 120)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["120"], '120')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(120, '50')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([], 50)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([], 120)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([], '120')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(["50", "250", "600"], 35)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([], 45)).to.throw('Invalid Information!');
        });
    });

    describe('otherSpendings', () => {
        it('happy path', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal('You spend $270.00 for equipment and consumables!');
        });
        it('happy path with discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!');
        });
        it('happy path with empty arrays', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], false)).to.equal('You spend $500.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings([], ['engine oil', 'oil filter'], true)).to.equal('You spend $90.00 for equipment and consumables with 10% discount!');
        });
        it('invalid input', () => {
            expect(() => motorcycleRider.otherSpendings('3', [], true)).to.throw('Invalid information');
            expect(() => motorcycleRider.otherSpendings([], 'Popcorn', false)).to.throw('Invalid information');
            expect(() => motorcycleRider.otherSpendings('3', ['Popcorn'], 5)).to.throw('Invalid information');
        });
    });

});