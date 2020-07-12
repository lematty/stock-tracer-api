import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockEntity } from '../entities/stock.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { StockDTO } from '../models/stock.model';

@Injectable()
export class StockService {

  constructor(@InjectRepository(StockEntity) private stockRepository: Repository<StockEntity>) {}

  async findStocksByUser(user: UserEntity): Promise<StockEntity[]> {
    return this.stockRepository.find({ where: { user }, relations: ['user'] });
  }

  async addStock(user: UserEntity, stock: StockDTO): Promise<StockEntity> {
    try {
      const newStock = this.stockRepository.create({ ...stock, userId: user.id, user });
      await newStock.save();
      return newStock;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async removeStock(user: UserEntity, symbol: string): Promise<{ success: boolean }> {
    const stock = this.stockRepository.find({ where: { user, symbol }, relations: ['user'] });
    if (!stock) {
      throw new InternalServerErrorException(`Cannot find ${symbol} to remove`);
    }
    const response = await this.stockRepository.delete({ user, symbol });
    const success = response.affected > 0 ? true : false;
    return { success };
  }
}
