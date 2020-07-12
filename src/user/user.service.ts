import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { username }, relations: ['stocks'] });
  }

  async updateUser(username: string, data: Partial<UserEntity>): Promise<UserEntity> {
    await this.userRepository.update({ username }, data);
    return this.findByUsername(username);
  }

  async deleteUser(username: string): Promise<boolean> {
    const result = await this.userRepository.delete({ username });
    return result.affected > 0 ? true : false;
  }
}
