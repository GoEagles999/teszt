import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(d: any): Promise<boolean>;
    findAll(req: any): Promise<import("./entities/user.entity").User[]>;
    getOne(id: any): Promise<import("./entities/user.entity").User>;
    update(id: any, d: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<boolean>;
}
