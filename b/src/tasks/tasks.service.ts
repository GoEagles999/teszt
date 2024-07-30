import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(Task)
    private taskRepo: Repository<Task>
  ) {}
  async create(d) {
    const { name, desc, uid } = d;
    const u = new User();
    u.id = uid;
    const t = await this.taskRepo.save({
      user: u,
      name,
      desc,
      uid,
      createdAt: Date.now(),
    });
    return t;
  }

  async findOneTasks(id) {
    const u = await this.userRepo.find({
      where: { id },
      relations: { tasks: true },
    });
    return u[0].tasks;
  }

  async findAll() {
    const t = await this.taskRepo.find();
    return t;
  }

  async findOne(id) {
    const t = await this.taskRepo.find({ where: { id } });
    return t;
  }

  async update(id, d) {
    const u = await this.taskRepo.update({ id }, d);
    return u;
  }

  async remove(id) {
    const t = await this.taskRepo.softDelete({ id });
    return t;
  }
}
