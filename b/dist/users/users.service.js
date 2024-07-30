"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("../users/entities/user.entity");
let UsersService = class UsersService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async create(d) {
        const { city, pcode, addr } = d;
        const hpw = await bcrypt.hash(d.pw, 10);
        await this.userRepo.save({
            email: d.email,
            pw: hpw,
            city,
            pcode,
            addr,
            createdAt: Date.now(),
        });
        return true;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    async findAll(id) {
        const u = await this.userRepo.find({});
        return u;
    }
    async update(id, d) {
        const u = await this.userRepo.update({ id }, d);
        return u;
    }
    async getOne(id) {
        const u = await this.userRepo.find({ where: { id } });
        return u[0];
    }
    async remove(id) {
        console.log(id);
        const u = await this.userRepo.find({
            where: { id },
            relations: { tasks: true },
        });
        console.log(u[0], 'asd');
        await this.userRepo.softRemove(u[0]);
        return true;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map