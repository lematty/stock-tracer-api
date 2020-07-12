import { IsString, MinLength, IsNotEmpty, IsPositive, IsAlpha, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StockDTO {

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @IsAlpha()
  symbol: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  shares: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  buyPrice: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  dividend: number
}