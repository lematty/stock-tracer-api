import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from '../entities/stock.entity';
import { UserEntity } from '../entities/user.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([StockEntity, UserEntity])
  ],
  providers: [StockService],
  controllers: [StockController]
})
export class StockModule {}
