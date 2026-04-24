import { ProductRepository } from '../domain/repositories/product.repository';

export class GetProducts {
    constructor(private repo: ProductRepository) {}

    execute() {
        return this.repo.findAll();
    }
}