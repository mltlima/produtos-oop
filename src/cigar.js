import TaxItem from "./taxItem";

export default class Cigar extends TaxItem {
    constructor(description, price) {
        super('cigar', description, price);
    }

    getTax() {
        return 0.25;
    }
}