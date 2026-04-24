import { Product } from '../domain/entities/product';
import { ProductRepository } from '../domain/repositories/product.repository';

export class CreateProduct {
  constructor(private repo: ProductRepository) {}

  execute(name: string, price: number, stock: number) {
    const product = new Product(0, name, price, stock);
    return this.repo.create(product);
  }
}
