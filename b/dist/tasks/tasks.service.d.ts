import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
export declare class TasksService {
    private userRepo;
    private taskRepo;
    constructor(userRepo: Repository<User>, taskRepo: Repository<Task>);
    create(d: any): Promise<{
        user: User;
        name: any;
        desc: any;
        uid: any;
        createdAt: number;
    } & Task>;
    findOneTasks(id: any): Promise<Task[]>;
    findAll(): Promise<Task[]>;
    findOne(id: any): Promise<Task[]>;
    update(id: any, d: any): Promise<import("typeorm").UpdateResult>;
    remove(id: any): Promise<import("typeorm").UpdateResult>;
}
