import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({ path: 'tasks' })
export class TaskController {
  constructor(private taskService: TasksService) {}
  @Get('/')
  getTasks() {
    return this.taskService.getTasks();
  }
}
