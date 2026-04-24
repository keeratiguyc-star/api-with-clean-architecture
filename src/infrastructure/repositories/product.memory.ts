import { Product } from '../../domain/entities/product';
import { ProductRepository } from '../../domain/repositories/product.repository';

export class ProductMemoryRepository implements ProductRepository {
  private products: Product[] = [];
  private currentId = 1;

  findAll(): Product[] {
    return this.products;
  }

  findById(id: number): Product | null {
    return this.products.find((p) => p.id === id) || null;
  }

  create(product: Product): Product {
    product.id = this.currentId++;
    this.products.push(product);
    return product;
  }

  deleteById(id: number): boolean {
      const index = this.products.findIndex(p => p.id === id);

      if (index === -1) {
        return false;
      }

      this.products.splice(index, 1);
      return true;
  }

  update(id: number, data: Partial<Product>): Product | null {
  const index = this.products.findIndex(p => p.id === id);

  if (index === -1) {
    return null;
  }

  const existing = this.products[index];

  const updated = new Product(
  existing.id,
  data?.name ?? existing.name,
  data?.price ?? existing.price,
  data?.stock ?? existing.stock
);

  this.products[index] = updated;
  return updated;
}
}
