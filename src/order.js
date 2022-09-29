export default class order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getTaxes() {
        return this.items.reduce((total, item) => total +  item.calculateTax(item.getTax()), 0);
    }
}