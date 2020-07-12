import { Controller, Get, UseGuards, Post, Body, ValidationPipe, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../auth/user.decorator';
import { UserEntity } from '../entities/user.entity';
import { StockService } from '../stock/stock.service';
import { StockEntity } from '../entities/stock.entity';
import { StockDTO } from '../models/stock.model';

@Controller('stock')
export class StockController {

  constructor(private stockService: StockService) {}

  @Get()
  @UseGuards(AuthGuard())
  findStocksByUser(@User() user: UserEntity): Promise<StockEntity[]> {
    return this.stockService.findStocksByUser(user);
  }

  @Post()
  @UseGuards(AuthGuard())
  addStock(@User() user: UserEntity, @Body(ValidationPipe) stock: StockDTO): Promise<StockEntity> {
    return this.stockService.addStock(user, stock);
  }

  @Delete()
  @UseGuards(AuthGuard())
  removeStock(@User() user: UserEntity, @Body(ValidationPipe) symbol: string): Promise<{ success: boolean }> {
    return this.stockService.removeStock(user, symbol);
  }
}
