import { IsString, IsNumber, MinLength, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MinLength(3, {message: 'Name must be at least 3 characters long.'})
    name!: string;

    @IsNumber()
    @Min(1, {message: 'Price must be a positive number.'})
    price!: number;

    @IsNumber()
    @Min(0, {message: 'Stock cannot be negative.'})
    stock!: number;
}