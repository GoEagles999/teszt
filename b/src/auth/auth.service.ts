// @ts-nocheck
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Repository, MoreThan, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'node:crypto';
import { User } from '../users/entities/user.entity';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}
  create(createAuthDto) {
    return 'This action adds a new auth';
  }

  remove(createAuthDto) {
    return 'This action adds a new auth';
  }

  update(createAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  

  async signup(req: any) {
    
  }

}
