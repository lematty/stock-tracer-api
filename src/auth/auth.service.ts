import { Injectable, InternalServerErrorException, ConflictException, UnauthorizedException } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from '../models/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>) {}

  async register(credentials: RegisterDTO): Promise<UserEntity> {
    try {
      const user = this.userRepo.create(credentials);
      await user.save();
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email or Username has already been taken');
      }
      throw new InternalServerErrorException(error);
    }
  }

  async login({ email, password }: LoginDTO): Promise<UserEntity> {
    try {
      const user = await this.userRepo.findOne({ where: { email } });
      const isValid = await user.comparePassword(password);
      if (!isValid) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
