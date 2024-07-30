import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  DeleteDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @Column({ nullable: true })
  desc: string;

  @Column({ type: 'bigint' })
  createdAt: number;

  @DeleteDateColumn()
  deletedAt?: Date;
}
