class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        let existing = this.products.find(p => p.product === product);

        if (!existing) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= existing.quantity) {
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - existing.quantity;
        existing.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`

    }

    sellProduct(product) {
        let existing = this.products.find(p => p.product === product);
        let sold = this.sales.find(s => s.product === product);

        if (!existing) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        existing.quantity--;

        if (!sold) {
            this.sales.push({ product, quantity: 1 })
        } else {
            let soldBefore = this.sales.find(p => p.product === product);
            soldBefore.quantity++;
        }

        return `The ${product} has been successfully sold.`;
    }

    revision(){
        let output = [];
        let total = 0;
        if (this.sales.length == 0) {
            throw new Error ("There are no sales today!");
        }else {
            for (const sale of this.sales) {
               total += sale.quantity;
            }
            output.push(`You sold ${total} products today!`);
        }
        output.push('Products in the warehouse:');
        this.products.forEach(p => output.push(`${p.product}-${p.quantity} more left`));

        return output.join('\n');
    }
}


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.revision());
// //console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

