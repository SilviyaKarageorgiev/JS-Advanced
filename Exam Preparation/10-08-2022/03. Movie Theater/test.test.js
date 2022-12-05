const { expect } = require('chai');
const { movieTheater } = require('./app');

describe('movieTheater', () => {

    describe('ageRestrictions', () => {
        it('happy path', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('aaa')).to.equal('There are no age restrictions for this movie');
        });

    });

    describe('moneySpent', () => {
        it('happy path', () => {
            expect(movieTheater.moneySpent(1, ['Popcorn'], ['Soda'])).to.equal('The total cost for the purchase is 22.00');
            expect(movieTheater.moneySpent(2, ['Popcorn', 'Nachos'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 44.50');
        });
        it('happy path with discount', () => {
            expect(movieTheater.moneySpent(3, ['Popcorn'], ['Soda'])).to.equal('The total cost for the purchase with applied discount is 41.60');
            expect(movieTheater.moneySpent(3, ['Popcorn', 'Nachos'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 47.60');
        });
        it('happy path with empty arrays', () => {
            expect(movieTheater.moneySpent(1, [], [])).to.equal('The total cost for the purchase is 15.00');
            expect(movieTheater.moneySpent(2, [], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 34.00');
        });
        it('happy path, edge case', () => {
            expect(movieTheater.moneySpent(3, [], ['Soda', 'Soda'])).to.equal('The total cost for the purchase is 50.00');
        });
        it('invalid input', () => {
            expect(() => movieTheater.moneySpent('3', ['Popcorn'], ['Soda'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(3, 'Popcorn', ['Soda'])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent('3', ['Popcorn'], 5)).to.throw('Invalid input');
        });
    });

    describe('reservation', () => {
        it('happy path', () => {
            expect(movieTheater.reservation([{
                rowNumber: 1,
                freeSeats: 7
            },
            {
                rowNumber: 2,
                freeSeats: 5
            }], 4)).to.equal(2);

            expect(movieTheater.reservation([{
                rowNumber: 1,
                freeSeats: 7
            },
            {
                rowNumber: 2,
                freeSeats: 5
            }], 6)).to.equal(1);
        });

        it('happy path, edge case', () => {
            expect(movieTheater.reservation([{
                rowNumber: 1,
                freeSeats: 7
            },
            {
                rowNumber: 2,
                freeSeats: 5
            }], 5)).to.equal(2);

            expect(movieTheater.reservation([{
                rowNumber: 1,
                freeSeats: 7
            },
            {
                rowNumber: 2,
                freeSeats: 5
            }], 6)).to.equal(1);
        });
        
        it('invalid input', () => {
            expect(() => movieTheater.reservation({}, 5)).to.throw('Invalid input');

            expect(() => movieTheater.reservation([{
                rowNumber: 1,
                freeSeats: 7
            },
            {
                rowNumber: 2,
                freeSeats: 5
            }], '6')).to.throw('Invalid input');
        });
    });

});
