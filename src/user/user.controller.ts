import { Controller, Body, ValidationPipe, Get, UseGuards, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from '../entities/user.entity';
import { User } from '../auth/user.decorator';
import { UpdateUserDTO } from '../models/user.model';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard())
  findCurrentUser(@User() user: UserEntity): Promise<UserEntity> {
    return this.userService.findByUsername(user.username);
  }

  @Put()
  @UseGuards(AuthGuard())
  updateUser(@User() user: UserEntity, @Body(new ValidationPipe({ transform: true, whitelist: true })) data: UpdateUserDTO): Promise<UserEntity> {
    return this.userService.updateUser(user.username, data);
  }

  @Delete()
  @UseGuards(AuthGuard())
  deleteUser(@User() user: UserEntity): Promise<boolean> {
    return this.userService.deleteUser(user.username);
  }
}
