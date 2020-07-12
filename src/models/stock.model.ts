import { IsString, MinLength, IsNotEmpty, IsPositive, IsAlpha, IsNumber } from 'class-validator';

export class StockDTO {

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @IsAlpha()
  symbol: string;

  @IsNotEmpty()
  @IsPositive()
  shares: number;

  @IsNotEmpty()
  @IsPositive()
  buyPrice: number;

  @IsNotEmpty()
  @IsNumber()
  dividend: number
}