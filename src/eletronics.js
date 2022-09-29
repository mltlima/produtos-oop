import TaxItem from "./taxItem";

export default class Eletronics extends TaxItem {
    constructor(description, price) {
        super('eletronics', description, price);
    }

    getTax() {
        return 0.3;
    }
}