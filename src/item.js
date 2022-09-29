export default class Item {
    constructor(category, description, price) {
        if (this.constructor == Item) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.category = category;
        this.description = description;
        this.price = price;
    }

    getTax() {
        return 0;
    }

    calculateTax(tax) {
        return 0;
    }
}