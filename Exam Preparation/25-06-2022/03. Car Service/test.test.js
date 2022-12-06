const { expect } = require('chai');
const { carService } = require('./app');

describe('carService', () => {

    describe('isItExpensive', () => {

        it('happy path', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('aaa')).to.equal('The overall price will be a bit cheaper');
            expect(carService.isItExpensive(5)).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe('discount', () => {

        it('happy path', () => {
            expect(carService.discount(3, 50)).to.equal('Discount applied! You saved 7.5$');
            expect(carService.discount(8, 100)).to.equal('Discount applied! You saved 30$');
            expect(carService.discount(1, 10)).to.equal('You cannot apply a discount');
        });

        it('happy path, edge case', () => {
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
            expect(carService.discount(2, 20)).to.equal('You cannot apply a discount');
        });

        it('invalid input', () => {
            expect(() => carService.discount(5, '5')).to.throw('Invalid input');
            expect(() => carService.discount('5', 20)).to.throw('Invalid input');
            expect(() => carService.discount('5', '20')).to.throw('Invalid input');
        });
    });

    describe('partsToBuy', () => {

        it('happy path', () => {
            expect(carService.partsToBuy([
                {
                    part: "blowoff valve",
                    price: 145
                },
                {
                    part: "coil springs",
                    price: 230
                },
                {
                    part: "injectors",
                    price: 200
                }], ["blowoff valve", "injectors"])).to.equal(345);
                expect(carService.partsToBuy([
                    {
                        part: "blowoff valve",
                        price: 145
                    },
                    {
                        part: "coil springs",
                        price: 230
                    }], ["blowoff valve", "injectors"])).to.equal(145);
        });

        it('happy path, single case', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });

        it('invalid input', () => {
            expect(() => carService.partsToBuy(['5'], '5')).to.throw('Invalid input');
            expect(() => carService.partsToBuy(5, [20])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(5, '20')).to.throw('Invalid input');
        });
    });

});