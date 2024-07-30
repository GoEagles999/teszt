import {
  Redirect,
  Controller,
  Body,
  Get,
  Request,
  Post,
  UseGuards,
  RawBodyRequest,
  Patch,
  Param,
  Delete,
  Response,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async signup(@Body() d) {
    return this.usersService.create(d);
  }

  @Get()
  async findAll(@Request() req) {
    return this.usersService.findAll(req);
  }

  @Get(':id')
  async getOne(@Param('id') id) {
    return this.usersService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() d) {
    return this.usersService.update(id, d);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
