import Item from './item';

export default class TaxItem extends Item {
    constructor(category, description, price) {
        super(category, description, price);
        if (this.constructor == TaxItem) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    calculateTax(tax) {
        return this.price * tax;
    }
}