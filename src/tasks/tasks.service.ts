import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    getTasks(){
        return 'Get all tasks in the controllers';
    }
}
