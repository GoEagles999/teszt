import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(d: any): Promise<{
        user: import("../users/entities/user.entity").User;
        name: any;
        desc: any;
        uid: any;
        createdAt: number;
    } & import("./entities/task.entity").Task>;
    findOneTasks(id: string): Promise<import("./entities/task.entity").Task[]>;
    findAll(): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: string): Promise<import("./entities/task.entity").Task[]>;
    update(id: string, d: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
