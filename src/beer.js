import TaxItem from "./taxItem";

export default class Beer extends TaxItem {
    constructor(description, price) {
        super('beer', description, price);
    }

    getTax() {
        return 0.2;
    }
}