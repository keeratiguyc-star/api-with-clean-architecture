import { Product } from '../entities/product';

export interface ProductRepository {
    findAll(): Product[];
    findById(id: number): Product | null;
    create(product: Product): Product;
    deleteById(id: number): boolean;
    update(id: number, data: Partial<Product>): Product | null;
}