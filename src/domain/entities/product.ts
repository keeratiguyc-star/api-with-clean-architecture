export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public stock: number
    ) {}

    isValid() {
        return this.name.length > 0 && this.price >= 0 && this.stock >= 0;
    }
}

