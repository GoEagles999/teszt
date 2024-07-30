import { User } from 'src/users/entities/user.entity';
export declare class Task {
    id: string;
    name: string;
    user: User;
    desc: string;
    createdAt: number;
    deletedAt?: Date;
}
