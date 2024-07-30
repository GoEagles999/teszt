import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(d: any): Promise<boolean>;
    findOne(id: number): string;
    findAll(id: number): Promise<User[]>;
    update(id: any, d: any): Promise<import("typeorm").UpdateResult>;
    getOne(id: any): Promise<User>;
    remove(id: any): Promise<boolean>;
}
