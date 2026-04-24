import { ProductRepository } from "src/domain/repositories/product.repository";
import { NotFoundException, BadRequestException } from "@nestjs/common";
import { Product } from "src/domain/entities/product";

export class UpdateProduct {
  constructor(private repo: ProductRepository) {}

  execute(id: number, data: { name?: string; price?: number; stock?: number }) {

    const existing = this.repo.findById(id);

    if (!existing) {
      throw new NotFoundException('Product not found');
    }

    const merged = new Product(
      existing.id,
      data.name ?? existing.name,
      data.price ?? existing.price,
      data.stock ?? existing.stock
    );

    return this.repo.update(id, data);
  }
}