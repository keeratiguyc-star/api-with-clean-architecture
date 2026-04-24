import { IsString, IsNumber, IsOptional, MinLength, Min } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    @MinLength(3, {message: 'Name must be at least 3 characters long.'})
    name?: string;

    @IsOptional()
    @IsNumber()
    @Min(1, {message: 'Price must be a positive number.'})
    price?: number;

    @IsOptional()
    @IsNumber()
    @Min(0, {message: 'Stock cannot be negative.'})
    stock?: number;
}