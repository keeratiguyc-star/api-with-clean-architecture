import { ProductRepository } from "src/domain/repositories/product.repository";

export class DeleteProduct {
    constructor(private repo: ProductRepository) {}

  execute(id: number) {
    const success = this.repo.deleteById(id);

    if (!success) {
      throw new Error('Product not found');
    }
    return { message: 'Deleted successfully' };
  }
}