import Item from './item';

export default class Water extends Item {
    constructor(description, price) {
        super('water', description, price);
    }
}