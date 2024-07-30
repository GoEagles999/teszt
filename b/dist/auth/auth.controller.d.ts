import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: any): string;
    findAll(): string;
    update(id: string, d: any): string;
    remove(id: string): string;
    signup(req: any): Promise<void>;
}
