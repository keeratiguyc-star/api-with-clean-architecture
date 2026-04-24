import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductMemoryRepository } from '../infrastructure/repositories/product.memory';
import { GetProducts } from 'src/usecases/getProducts';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';
import { CreateProduct } from 'src/usecases/createProduct';
import { DeleteProduct } from 'src/usecases/deleteProduct';
import { UpdateProduct } from 'src/usecases/updateProduct';

@Controller('products')
export class ProductController {
  private repo = new ProductMemoryRepository();
  private getProducts = new GetProducts(this.repo);
  private createProduct = new CreateProduct(this.repo);
  private deleteProduct = new DeleteProduct(this.repo);
  private updateProduct = new UpdateProduct(this.repo);

  @Get()
  getAll() {
    return this.getProducts.execute();
  }

  @Post()
  async create(@Body() dto: CreateProductDto) {
    return this.createProduct.execute(dto.name, dto.price, dto.stock);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.deleteProduct.execute(Number(id));
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
    return this.updateProduct.execute(id, dto);
  }
}
