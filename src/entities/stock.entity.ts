import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';


@Entity('stocks')
export class StockEntity extends AbstractEntity {
  @Column()
  symbol: string;

  @Column({ type: 'float'})
  shares: number;

  @Column({ type: 'float'})
  buyPrice: number;

  @Column({ type: 'float'})
  dividend: number
  
  @Column()
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.stocks)
  @JoinColumn()
  user: UserEntity;
}