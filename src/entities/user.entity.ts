import { AbstractEntity } from './abstract-entity';
import { Column, Entity, BeforeInsert, OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Exclude, classToPlain } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { StockEntity } from './stock.entity';


@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(
    () => StockEntity,
    (stock) => stock.user
  )
  stocks: StockEntity[];

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password)
  }

  toJSON() {
    return classToPlain(this);
  }
}