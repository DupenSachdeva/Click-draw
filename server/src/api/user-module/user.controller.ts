import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { AuthGuard } from 'src/engine/core/guards/Authorization.guard';

@Controller('v1/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signin')
  async singin(@Req() request: Request) {
    return await this.userService.singin(request);
  }

  @Get('/')
  @UseGuards(AuthGuard)
  async getUser(@Req() req: Request) {
    return await this.userService.getUser(req);
  }

  @Get('/last-task')
  @UseGuards(AuthGuard)
  async getLastTaskOfUserStats(@Req() req: Request) {
    return await this.userService.getLastTaskOfUserStats(req);
  }
}
