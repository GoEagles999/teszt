"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
let TasksService = class TasksService {
    constructor(userRepo, taskRepo) {
        this.userRepo = userRepo;
        this.taskRepo = taskRepo;
    }
    async create(d) {
        const { name, desc, uid } = d;
        const u = new user_entity_1.User();
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
        console.log(id);
        const u = await this.userRepo.find({
            where: { id },
            relations: { tasks: true },
        });
        console.log(u[0]);
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
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map