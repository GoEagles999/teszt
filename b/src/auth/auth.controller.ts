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
import { JwtAuthGuard } from './jwt-auth.guard';

import { LocalAuthGuard } from './local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { Cron } from '@nestjs/schedule';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() d) {
    return this.authService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }




  @Post('signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body);
  }

}
