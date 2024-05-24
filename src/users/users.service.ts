import { Injectable } from '@nestjs/common';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: UserInterface[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
    },
  ];

  getUsers(): UserInterface[] {
    return this.users;
  }
}
