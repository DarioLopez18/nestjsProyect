import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'users' })
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.UsersService.getUsers();
  }
}
