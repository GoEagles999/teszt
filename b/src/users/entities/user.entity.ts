import {
  Entity,
  Column,
  OneToMany,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  pw: string;

  @Column({ nullable: true })
  pcode: string;

  @Column({ nullable: true })
  addr: string;

  @OneToMany(() => Task, (t) => t.user, { cascade: true, onDelete: 'CASCADE' })
  tasks: Task[];

  @Column({ type: 'bigint', nullable: true })
  createdAt: number;

  @DeleteDateColumn()
  deletedAt?: Date;
}
