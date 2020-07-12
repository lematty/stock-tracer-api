import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { StockEntity } from '../entities/stock.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([StockEntity, UserEntity])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
