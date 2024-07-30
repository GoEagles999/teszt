import { Task } from '../../tasks/entities/task.entity';
export declare class User {
    id: string;
    email: string;
    city: string;
    pw: string;
    pcode: string;
    addr: string;
    tasks: Task[];
    createdAt: number;
    deletedAt?: Date;
}
