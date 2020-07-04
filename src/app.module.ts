import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnectionService } from './database-connection/database-connection.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    })
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, DatabaseConnectionService],
})
export class AppModule {}
