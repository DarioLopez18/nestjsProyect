import { CreateUserDto } from './DTO/createUser.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

@Controller({ path: 'users' })
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.UsersService.getUsers();
  }
  @Post('/')
  createUser(@Body() user: CreateUserDto) {
    return this.UsersService.createUser(user);
  }
}
