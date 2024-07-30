// @ts-nocheck
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Logger, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as bcrypt from 'bcrypt';

import { User } from '../users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}
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

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findAll(id: number) {
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

    const u = await this.userRepo.find({
      where: { id },
      relations: { tasks: true },
    });


    await this.userRepo.softRemove(u[0]);
    return true;
  }
}
