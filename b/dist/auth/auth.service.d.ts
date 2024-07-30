import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private jwtService;
    private userRepo;
    constructor(jwtService: JwtService, userRepo: Repository<User>);
    create(createAuthDto: any): string;
    remove(createAuthDto: any): string;
    update(createAuthDto: any): string;
    findAll(): string;
    findOne(id: number): string;
    signup(req: any): Promise<void>;
}
