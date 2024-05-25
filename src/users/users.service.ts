import { PrismaService } from 'src/Prisma/prisma.service';
import { CreateUserDto } from './DTO/createUser.dto';
import { Injectable } from '@nestjs/common';

export interface UserInterface {
  id: number;
  email: string;
  name: string;
  password: string;
  createAt: Date;
  updateAt: Date;
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }
}
